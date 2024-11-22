import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

export default function Comments() {
  return (
    <div className="coment-area">
      <ul className="we-comet">
        <CommentItem />
        <CommentItem />
        <li>
          <a href="#" title="" className="showmore underline">
            more comments
          </a>
        </li>
        <CommentForm />
      </ul>
    </div>
  );
}
