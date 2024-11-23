import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

export default function Comments({ comments }) {
  return (
    <div className="coment-area">
      <ul className="we-comet">
        {comments.length === 0 && (
          <li>
            <p>Be the first to comment</p>
          </li>
        )}
        {comments.map((comment) => (
          <CommentItem key={comment?._id} comment={comment} />
        ))}
        {comments.length > 5 && (
          <li>
            <a href="#" title="" className="showmore underline">
              more comments
            </a>
          </li>
        )}
        <CommentForm />
      </ul>
    </div>
  );
}
