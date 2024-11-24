import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

export default function Comments({ comments, post }) {
  return (
    <div className="coment-area">
      <ul className="we-comet">
        {comments.length === 0 && (
          <li>
            <p>Be the first to comment</p>
          </li>
        )}
        {comments.map((comment) => (
          <li key={comment?._id}>
            <CommentItem comment={comment} />
          </li>
        ))}
        {comments.length > 5 && (
          <li>
            <a href="#" title="" className="showmore underline">
              more comments
            </a>
          </li>
        )}
        <CommentForm post={post} />
      </ul>
    </div>
  );
}
