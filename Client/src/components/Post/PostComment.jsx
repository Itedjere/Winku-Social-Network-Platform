import React from "react";
import PostItem from "./PostItem";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../utilities/graphql_queries";

export default function PostComment() {
  const { postId } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      postId,
    },
  });

  if (loading) {
    return <p>Post is Loading, please wait...</p>;
  }

  if (error) {
    return <p>An error occured {error.message}</p>;
  }

  console.log("Post", data);

  return (
    <div className="loadMore">
      <div className="central-meta item">
        <div className="user-post">
          <PostItem post={data.singlePost.post} />
          <Comments
            comments={data.singlePost.comments}
            post={data.singlePost.post}
          />
        </div>
      </div>
    </div>
  );
}
