import React, { useContext } from "react";
import friendAvatar10 from "../../assets/images/resources/friend-avatar10.jpg";
import {
  FaComments,
  FaCss3,
  FaDribbble,
  FaEye,
  FaFacebook,
  FaGooglePlus,
  FaHtml5,
  FaInstagram,
  FaPinterest,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { TfiHeart, TfiHeartBroken } from "react-icons/tfi";
import { formatPostDate, handleApolloErrors } from "../../utilities/utilities";
import { Link } from "react-router-dom";
import { DISLIKE_POST, LIKE_POST } from "../../utilities/graphql_mutations";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function PostItem({ post }) {
  const { auth } = useContext(AuthContext);
  const [likePost] = useMutation(LIKE_POST, {
    update(cache, { data: { likePost } }) {
      cache.modify({
        id: cache.identify(post),
        fields: {
          likedBy(existingLikes = []) {
            // return new array from server
            return likePost.likedBy;
          },
          dislikedBy(existingDislikes = []) {
            return likePost.dislikedBy;
          },
        },
      });
    },
  });

  const [dislikePost] = useMutation(DISLIKE_POST, {
    update(cache, { data: { dislikePost } }) {
      cache.modify({
        id: cache.identify(post),
        fields: {
          likedBy(existingLikes = []) {
            // return new array from server
            return dislikePost.likedBy;
          },
          dislikedBy(existingDislikes = []) {
            // return new array from server
            return dislikePost.dislikedBy;
          },
        },
      });
    },
  });

  const handleLikePost = async () => {
    try {
      const { data } = await likePost({
        variables: {
          postId: post._id,
        },
      });

      if (data?.likePost) {
        const indexOfUserId = data.likePost.likedBy.indexOf(auth?.user?._id);
        if (indexOfUserId > -1) {
          toast.success("You liked the post");
        } else {
          toast.success("You removed your like");
        }
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };

  const handleDislikePost = async () => {
    try {
      const { data } = await dislikePost({
        variables: {
          postId: post._id,
        },
      });

      if (data?.dislikePost) {
        const indexOfUserId = data.dislikePost.dislikedBy.indexOf(
          auth?.user?._id
        );
        if (indexOfUserId > -1) {
          toast.success("You disliked the post");
        } else {
          toast.success("You removed your dislike");
        }
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };

  return (
    <div className="friend-info">
      <figure>
        <img
          src={
            post.user.profile_photo ? post.user.profile_photo : friendAvatar10
          }
          alt=""
        />
      </figure>
      <div className="friend-name">
        <ins>
          <Link to={`/profile/${post.user._id}/timeline`} title="visit profile">
            {`${post.user.firstname} ${post.user.lastname}`}
          </Link>
        </ins>
        <span>published: {formatPostDate(post.createdAt)}</span>
      </div>
      <div className="post-meta">
        <div className="description">{post.textContent}</div>
        {post.postType === "IMAGE" && (
          <img
            src={`${import.meta.env.VITE_SERVER_URL}${post.mediaURL}`}
            alt=""
          />
        )}
        {post.postType === "VIDEO" && (
          <video controls className="object-fill-cover">
            <source
              src={`${import.meta.env.VITE_SERVER_URL}${post.mediaURL}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="we-video-info">
          <ul>
            <li>
              <span className="views" data-toggle="tooltip" title="views">
                <FaEye />
                <ins>1</ins>
              </span>
            </li>
            <li>
              <span className="comment" data-toggle="tooltip" title="Comments">
                <FaComments />
                <ins>{post.comments.length}</ins>
              </span>
            </li>
            <li>
              <span className="like" data-toggle="tooltip" title="like">
                <TfiHeart onClick={handleLikePost} />
                <ins>{post.likedBy.length}</ins>
              </span>
            </li>
            <li>
              <span className="dislike" data-toggle="tooltip" title="dislike">
                <TfiHeartBroken onClick={handleDislikePost} />
                <ins>{post.dislikedBy.length}</ins>
              </span>
            </li>
            <li className="social-media">
              <div className="menu">
                <div className="btn trigger">
                  <FaShareAlt className="fa" />
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaHtml5 />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaGooglePlus />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaCss3 />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaDribbble />
                    </a>
                  </div>
                </div>
                <div className="rotater">
                  <div className="btn btn-icon">
                    <a href="#" title="">
                      <FaPinterest />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
