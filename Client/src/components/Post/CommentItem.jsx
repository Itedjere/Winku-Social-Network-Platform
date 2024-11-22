import React from "react";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import { FaReply } from "react-icons/fa";

export default function CommentItem() {
  return (
    <li>
      <div className="comet-avatar">
        <img src={Commet1} alt="" />
      </div>
      <div className="we-comment">
        <div className="coment-head">
          <h5>
            <a href="time-line.html" title="">
              Donald Trump
            </a>
          </h5>
          <span>1 week ago</span>
          <a className="we-reply" href="#" title="Reply">
            <FaReply />
          </a>
        </div>
        <p>
          we are working for the dance and sing songs. this video is very
          awesome for the youngster. please vote this video and like our channel
          <i className="em em-smiley"></i>
        </p>
      </div>
    </li>
  );
}
