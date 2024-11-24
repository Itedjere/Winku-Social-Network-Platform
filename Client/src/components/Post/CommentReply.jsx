import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COMMENT } from "../../utilities/graphql_queries";
import ReplyItem from "./ReplyItem";
import ReplyForm from "./ReplyForm";

export default function CommentReply() {
  const { commentId } = useParams();
  const { loading, error, data } = useQuery(GET_COMMENT, {
    variables: {
      commentId,
    },
  });

  if (loading) return <p>Please wait, comment still loading</p>;
  if (error) return <p>An error occured {error.message}</p>;

  return (
    <div className="coment-area">
      <ul className="we-comet">
        <li>
          <CommentItem comment={data.singleComment.comment} />
          <ul>
            {data.singleComment.replies.length === 0 && (
              <li>
                <p>Be the first to reply</p>
              </li>
            )}
            {data.singleComment.replies.map((reply) => (
              <ReplyItem reply={reply} key={reply._id} />
            ))}
          </ul>
        </li>
        {data.singleComment.replies.length > 5 && (
          <li>
            <a href="#" title="" className="showmore underline">
              more replies
            </a>
          </li>
        )}
        <ReplyForm comment={data.singleComment.comment} />
      </ul>
    </div>
  );
}
