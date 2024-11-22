import React from "react";
import Commet1 from "../../assets/images/resources/comet-1.jpg";

export default function CommentForm() {
  return (
    <li className="post-comment">
      <div className="comet-avatar">
        <img src={Commet1} alt="" />
      </div>
      <div className="post-comt-box">
        <form method="post">
          <textarea placeholder="Post your comment"></textarea>
          <div className="add-smiles">
            <span className="em em-expressionless" title="add icon"></span>
          </div>
          <div className="smiles-bunch">
            <i className="em em---1"></i>
            <i className="em em-smiley"></i>
            <i className="em em-anguished"></i>
            <i className="em em-laughing"></i>
            <i className="em em-angry"></i>
            <i className="em em-astonished"></i>
            <i className="em em-blush"></i>
            <i className="em em-disappointed"></i>
            <i className="em em-worried"></i>
            <i className="em em-kissing_heart"></i>
            <i className="em em-rage"></i>
            <i className="em em-stuck_out_tongue"></i>
          </div>
          <button type="submit"></button>
        </form>
      </div>
    </li>
  );
}
