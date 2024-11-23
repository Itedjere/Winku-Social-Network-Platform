import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import admin2 from "../../assets/images/resources/admin2.jpg";
import { FaCamera } from "react-icons/fa";
import { gql, useMutation } from "@apollo/client";
import { UPLOAD_POST } from "../../utilities/graphql_mutations";
import { toast } from "react-toastify";
import { handleApolloErrors, mimeToPostType } from "../../utilities/utilities";
import Spinner from "../Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthContext";
import { CORE_POST_FIELDS } from "../../utilities/graphql_fragments";

export default function PostForm() {
  const { auth } = useContext(AuthContext);

  const [textContent, setTextContent] = useState("");
  const [media, setMedia] = useState(null);
  const [
    createPost,
    { data: postData, loading: postLoading, error: postError },
  ] = useMutation(UPLOAD_POST, {
    update(cache, { data: { addPost } }) {
      cache.modify({
        fields: {
          allPosts(existingPosts = []) {
            const newPostRef = cache.writeFragment({
              data: addPost,
              fragment: CORE_POST_FIELDS,
            });
            return [newPostRef, ...existingPosts];
          },
        },
      });
    },
  });

  useEffect(() => {
    if (postData) {
      toast.success("Post Added Successfully!!!");
    }

    if (postError) {
      handleApolloErrors(postError);
    }
  }, [postData, postError]);

  const handlePostSubmission = async (e) => {
    e.preventDefault();

    // return with a message if textContent is empty
    if (textContent.length <= 100) {
      return toast.error("Your content should be more than 100 characters");
    }

    // Set up an empty mediaUrl
    let mediaURL = "";
    let postType = "TEXT";
    if (media) {
      try {
        // Step 1: Update postType based on file type
        postType = mimeToPostType[media.type];
        if (!postType) {
          return toast.error(
            "Invalid file type. Only images and videos are allowed."
          );
        }

        // Step 2: Upload the file to REST endpoint
        const formData = new FormData();
        formData.append("media", media);

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

        mediaURL = response.data.fileUrl;
      } catch (err) {
        console.error("Error uploading file:", err);
        toast.error(err.message);
      }
    }

    // call the createPost method
    // Step 2: Call GraphQL mutation to create post
    await createPost({
      variables: {
        addPostPostInfo: {
          postType,
          textContent,
          mediaURL,
        },
      },
    });

    setTextContent("");
    setMedia(null);
  };

  return (
    <div className="central-meta">
      <div className="new-postbox">
        <figure>
          <img src={admin2} alt="" />
        </figure>
        <div className="newpst-input">
          <form
            method="post"
            onSubmit={handlePostSubmission}
            encType="multipart/form-data"
          >
            <textarea
              rows="2"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              placeholder="write something"
            ></textarea>
            <div className="attachments">
              <ul>
                <li>
                  <FaCamera />
                  <label className="fileContainer">
                    <input
                      type="file"
                      name="media"
                      accept="image/*,video/*"
                      onChange={(e) => setMedia(e.target.files[0])}
                    />
                  </label>
                </li>
                <li>
                  <button type="submit" disabled={postLoading}>
                    {postLoading ? <Spinner /> : "Add Post"}
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
