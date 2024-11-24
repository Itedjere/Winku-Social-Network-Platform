import React from "react";
import PostItem from "../Post/PostItem";

export default function Posts({ posts }) {
  return (
    <div className="loadMore">
      {posts.length === 0 && (
        <p style={{ textAlign: "center" }}>No posts yet</p>
      )}
      {posts.map((post) => (
        <div className="central-meta item" key={post._id}>
          <div className="user-post">
            <PostItem post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}
