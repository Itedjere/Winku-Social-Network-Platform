import React from "react";
import comet2 from "../../assets/images/resources/comet-2.jpg";
import { formatPostDate } from "../../utilities/utilities";
import { Link } from "react-router-dom";

export default function ReplyItem({ reply }) {
  return (
    <li>
      <div className="comet-avatar">
        <img
          src={reply.user.profile_photo ? reply.user.profile_photo : comet2}
          alt=""
        />
      </div>
      <div className="we-comment">
        <div className="coment-head">
          <h5>
            <Link
              to={`/profile/${reply.user._id}/timeline`}
              title={`${reply.user.firstname} ${reply.user.lastname}`}
            >
              {`${reply.user.firstname} ${reply.user.lastname}`}
            </Link>
          </h5>
          <span>{formatPostDate(reply.createdAt)} ago</span>
          {/* <a className="we-reply" href="#" title="Reply">
            <i className="fa fa-reply"></i>
          </a> */}
        </div>
        <p>{reply.textContent}</p>
      </div>
    </li>
  );
}
