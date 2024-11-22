import React from "react";
import PostItem from "../Post/PostItem";
import Comments from "../Post/Comments";
import { GET_ALL_POSTS } from "../../utilities/graphql_queries";
import { useQuery } from "@apollo/client";

export default function Posts() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <div className="loadMore">
      {data.allPosts.length === 0 && <p>Be the first to write something</p>}
      {data.allPosts.map((post) => (
        <div className="central-meta item" key={post._id}>
          <div className="user-post">
            <PostItem post={post} />
            <Comments />
          </div>
        </div>
      ))}
    </div>
  );
}
