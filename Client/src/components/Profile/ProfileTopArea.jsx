import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import timeline1 from "../../assets/images/resources/timeline-1.jpg";
import userAvatar from "../../assets/images/resources/user-avatar.jpg";
import { FaCameraRetro } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_STATS } from "../../utilities/graphql_queries";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../contexts/AuthContext";
import {
  CANCEL_FRIEND_REQUEST,
  CONFIRM_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST,
  UPDATE_COVER_PHOTO,
  UPDATE_PROFILE_PHOTO,
} from "../../utilities/graphql_mutations";
import { handleApolloErrors } from "../../utilities/utilities";
import { toast } from "react-toastify";
import PhotoEditorModal from "../Modal/PhotoEditorModal";
import { photoCropTypes } from "../../utilities/utilities";

export default function ProfileTopArea() {
  const [image, setImage] = useState(null);
  const [cropStyle, setCropStyle] = useState(photoCropTypes.portrait);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const { auth, updateUserInfo } = useContext(AuthContext);
  const { profileId } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_USER_STATS, {
    variables: {
      profileId,
    },
  });

  useEffect(() => {
    // Refetch Profile Id
    if (profileId) {
      refetch();
    }
  }, [profileId, refetch]);

  const [sendRequest] = useMutation(SEND_FRIEND_REQUEST, {
    update(cache, { data: { sendFriendRequest } }) {
      cache.modify({
        fields: {
          user(existingDetails = {}) {
            return {
              ...existingDetails,
              friendshipStatus: sendFriendRequest.friendshipStatus,
            };
          },
        },
      });
    },
  });

  const [cancelRequest] = useMutation(CANCEL_FRIEND_REQUEST, {
    update(cache, { data: { cancelFriendRequest } }) {
      cache.modify({
        fields: {
          user(existingDetails = {}) {
            return {
              ...existingDetails,
              friendshipStatus: cancelFriendRequest.friendshipStatus,
            };
          },
        },
      });
    },
  });

  const [confirmRequest] = useMutation(CONFIRM_FRIEND_REQUEST, {
    update(cache, { data: { confirmFriendRequest } }) {
      cache.modify({
        fields: {
          user(existingDetails = {}) {
            const { friendCount, friendshipStatus } = confirmFriendRequest;
            return {
              ...existingDetails,
              friendCount,
              friendshipStatus,
            };
          },
        },
      });
    },
  });

  const [updateProfilePhoto] = useMutation(UPDATE_PROFILE_PHOTO, {
    update(cache, { data: { updateProfilePhoto } }) {
      cache.modify({
        fields: {
          user(existingDetails = {}) {
            const { profile_photo } = updateProfilePhoto;
            return {
              ...existingDetails,
              profile_photo,
            };
          },
        },
      });
    },
  });

  const [updateCoverPhoto] = useMutation(UPDATE_COVER_PHOTO, {
    update(cache, { data: { updateCoverPhoto } }) {
      cache.modify({
        fields: {
          user(existingDetails = {}) {
            const { cover_photo } = updateCoverPhoto;
            return {
              ...existingDetails,
              cover_photo,
            };
          },
        },
      });
    },
  });

  const sendFriendRequest = async () => {
    const { data } = await sendRequest({
      variables: {
        friendId: profileId,
      },
    });

    if (data) {
      toast.success("Friend Request Sent!!!");
    }
  };

  const cancelFriendRequest = async () => {
    const { data } = await cancelRequest({
      variables: {
        friendId: profileId,
      },
    });

    if (data) {
      toast.success("Friend Request Cancel");
    }
  };

  const acceptFriendRequest = async () => {
    const { data } = await confirmRequest({
      variables: {
        friendId: profileId,
      },
    });

    if (data) {
      toast.success("Friend request accepted");
    }
  };

  const handleFriendRequest = async (e) => {
    e.preventDefault();
    if (data) {
      try {
        if (data.user.friendshipStatus === "NONE") {
          // Send friend request logic
          sendFriendRequest();
        } else if (data.user.friendshipStatus === "PENDING_SENT") {
          // Cancel friend request logic
          cancelFriendRequest();
        } else if (data.user.friendshipStatus === "PENDING_RECEIVED") {
          // Confirm friend request logic
          acceptFriendRequest();
        }
      } catch (error) {
        handleApolloErrors(error);
      }
    }
  };

  // Handles file selection
  const handleFileChange = (e, crop) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setCropStyle(crop);
        setOpenPhotoModal(true);
      }; // Convert file to data URL
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = async (croppedBlob) => {
    setIsUploadingPhoto(true); // Indicate that the upload is in progress

    // Prepare the cropped image to send to the server
    const formData = new FormData();
    formData.append(
      "media",
      croppedBlob,
      cropStyle.cropType === "portrait" ? "profile.jpg" : "banner.jpg"
    );

    try {
      // Upload the image to the server
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );

      // Check if fileUrl is returned
      const { fileUrl } = response.data;
      if (!fileUrl) throw new Error("No file URL returned from server.");

      // Call the appropriate GraphQL mutation
      const variables = { fileUrl };
      let data;

      if (cropStyle.cropType === "portrait") {
        ({ data } = await updateProfilePhoto({ variables }));
      } else {
        ({ data } = await updateCoverPhoto({ variables }));
      }

      // Update user info and show success message
      const userInfo =
        cropStyle.cropType === "portrait"
          ? { profile_photo: data?.updateProfilePhoto?.profile_photo }
          : { cover_photo: data?.updateCoverPhoto?.cover_photo };

      updateUserInfo(userInfo);
      toast.success(`Upload successful.`);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(`Upload error: ${error.message}`);
    } finally {
      setIsUploadingPhoto(false); // Ensure this runs regardless of success or failure
      setOpenPhotoModal(false); // Close modal
    }
  };

  return (
    <section>
      <div className="feature-photo">
        <figure>
          {loading ? (
            <Skeleton height={450} />
          ) : (
            <img
              src={
                data?.user?.cover_photo
                  ? `${import.meta.env.VITE_SERVER_URL}${
                      data?.user?.cover_photo
                    }`
                  : timeline1
              }
              alt="Profile Photo"
            />
          )}
        </figure>
        {!loading && (
          <>
            <div className="add-btn">
              <span>{data?.user?.friendCount} friends</span>
              {auth?.user?._id !== profileId && (
                <a
                  href="#"
                  title=""
                  data-ripple=""
                  onClick={handleFriendRequest}
                >
                  {data?.user?.friendshipStatus === "FRIENDS" && "Your Friend"}
                  {data?.user?.friendshipStatus === "NONE" && "Add Friend"}
                  {data?.user?.friendshipStatus === "PENDING_SENT" &&
                    "Cancel Request"}
                  {data?.user?.friendshipStatus === "PENDING_RECEIVED" &&
                    "Confirm Request"}
                </a>
              )}
            </div>
            {auth?.user?._id === profileId && (
              <form className="edit-phto">
                <FaCameraRetro />
                <label className="fileContainer">
                  Edit Cover Photo
                  <input
                    type="file"
                    onChange={(e) =>
                      handleFileChange(e, photoCropTypes.landscape)
                    }
                  />
                </label>
              </form>
            )}
          </>
        )}
        <div className="container-fluid">
          <div className="row merged">
            <div className="col-lg-2 col-sm-3">
              <div className="user-avatar">
                <figure>
                  {/*  */}
                  {loading ? (
                    <Skeleton height={182} />
                  ) : (
                    <>
                      <img
                        src={
                          data?.user?.profile_photo
                            ? `${import.meta.env.VITE_SERVER_URL}${
                                data?.user?.profile_photo
                              }`
                            : userAvatar
                        }
                        alt=""
                      />
                      {auth?.user?._id === profileId && (
                        <form className="edit-phto">
                          <FaCameraRetro />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handleFileChange(e, photoCropTypes.portrait)
                              }
                            />
                          </label>
                        </form>
                      )}
                    </>
                  )}
                </figure>
              </div>
            </div>
            <div className="col-lg-10 col-sm-9">
              <div className="timeline-info">
                <ul>
                  <li className="admin-name">
                    {!loading && (
                      <>
                        <h5>{`${data?.user?.firstname} ${data?.user?.lastname}`}</h5>
                        <span>{data?.user?.username}</span>
                      </>
                    )}
                  </li>
                  <li>
                    <NavLink
                      to={`/profile/${profileId}/timeline`}
                      title=""
                      data-ripple=""
                    >
                      time line
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/photos`}
                      title=""
                      data-ripple=""
                    >
                      Photos
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/videos`}
                      title=""
                      data-ripple=""
                    >
                      Videos
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/friends`}
                      title=""
                      data-ripple=""
                    >
                      Friends
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/followers`}
                      title=""
                      data-ripple=""
                    >
                      followers
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/about`}
                      title=""
                      data-ripple=""
                    >
                      about
                    </NavLink>
                    <NavLink to="/chat" title="" data-ripple="">
                      chat
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PhotoEditorModal
        showModal={openPhotoModal}
        photo={image}
        closeModal={setOpenPhotoModal}
        handleFileUpload={handleFileUpload}
        isUploadingPhoto={isUploadingPhoto}
        cropStyle={cropStyle}
      />
    </section>
  );
}
