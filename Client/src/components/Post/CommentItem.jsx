import React from "react";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import { FaReply, FaComments } from "react-icons/fa";
import { formatPostDate } from "../../utilities/utilities";
import { Link } from "react-router-dom";
import { TfiHeart, TfiHeartBroken } from "react-icons/tfi";

export default function CommentItem({ comment }) {
  return (
    <>
      <div className="comet-avatar">
        <img
          src={
            comment?.user?.profile_photo
              ? comment?.user?.profile_photo
              : Commet1
          }
          alt=""
        />
      </div>
      <div className="we-comment">
        <div className="coment-head">
          <h5>
            <Link
              to={`/profile/${comment?.user?._id}/timeline`}
              title={`${comment?.user?.firstname} ${comment?.user?.lastname}`}
            >
              {`${comment?.user?.firstname} ${comment?.user?.lastname}`}
            </Link>
          </h5>
          <span>{formatPostDate(comment?.createdAt)} ago</span>
          <Link
            className="we-reply"
            to={`/comment/${comment?._id}`}
            title="Reply"
          >
            <FaReply />
          </Link>
        </div>
        <p>{comment?.textContent}</p>
        <div className="we-video-info" style={{ paddingBottom: 0 }}>
          <ul style={{ margin: 0 }}>
            <li style={{ marginBottom: 0 }}>
              <span className="comment" data-toggle="tooltip" title="Comments">
                <FaComments />
                <ins>{comment.replies.length}</ins>
              </span>
            </li>
            <li style={{ marginBottom: 0 }}>
              <span className="like" data-toggle="tooltip" title="like">
                <TfiHeart />
                <ins>0</ins>
              </span>
            </li>
            <li style={{ marginBottom: 0 }}>
              <span className="dislike" data-toggle="tooltip" title="dislike">
                <TfiHeartBroken />
                <ins>0</ins>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
