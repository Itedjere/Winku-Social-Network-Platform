import React, { useContext } from "react";
import timeline1 from "../../assets/images/resources/timeline-1.jpg";
import userAvatar from "../../assets/images/resources/user-avatar.jpg";
import { FaCameraRetro } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_STATS } from "../../utilities/graphql_queries";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfileTopArea() {
  const { auth } = useContext(AuthContext);
  const { profileId } = useParams();
  const { loading, error, data } = useQuery(GET_USER_STATS, {
    variables: {
      profileId,
    },
  });

  return (
    <section>
      <div className="feature-photo">
        <figure>
          {loading ? (
            <Skeleton height={450} />
          ) : (
            <img src={timeline1} alt="Profile Photo" />
          )}
        </figure>
        {!loading && (
          <>
            <div className="add-btn">
              <span>1205 followers</span>
              {auth?.user?._id !== profileId && (
                <a href="#" title="" data-ripple="">
                  Add Friend
                </a>
              )}
            </div>
            {auth?.user?._id === profileId && (
              <form className="edit-phto">
                <FaCameraRetro />
                <label className="fileContainer">
                  Edit Cover Photo
                  <input type="file" />
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
                      <img src={userAvatar} alt="" />
                      {auth?.user?._id === profileId && (
                        <form className="edit-phto">
                          <FaCameraRetro />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input type="file" />
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
                        <h5>{`${data.user.firstname} ${data.user.lastname}`}</h5>
                        <span>{data.user.username}</span>
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
    </section>
  );
}
