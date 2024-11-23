import React from "react";
import moment from "moment";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import { FaReply } from "react-icons/fa";
import { formatPostDate } from "../../utilities/utilities";
import { Link } from "react-router-dom";

export default function CommentItem({ comment }) {
  return (
    <li>
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
            to={`/reply/${comment?._id}`}
            title="Reply"
          >
            <FaReply />
          </Link>
        </div>
        <p>{comment?.textContent}</p>
      </div>
    </li>
  );
}
