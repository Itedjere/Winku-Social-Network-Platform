import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import InputEmoji from "react-input-emoji";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utilities/graphql_mutations";
import { toast } from "react-toastify";
import { handleApolloErrors } from "../../utilities/utilities";
import { GET_POST } from "../../utilities/graphql_queries";

export default function CommentForm({ post }) {
  const { auth } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST],
  });

  const handleOnEnter = async () => {
    // check if comment is empty or less than 20 characters
    if (text.length < 15) {
      return toast.error("Comment must be more than 15 characters");
    }

    // send feedbackt to server
    try {
      const { data } = await addComment({
        variables: {
          textContent: text,
          postId: post._id,
        },
      });
      if (data) {
        toast.success("Comment added successfully!!!");
      }
    } catch (error) {
      console.error("Add comment error", error);
      handleApolloErrors(error);
    }
  };

  return (
    <li className="post-comment">
      <div className="comet-avatar">
        <img
          src={auth.user.profile_photo ? auth.user.profile_photo : Commet1}
          alt=""
        />
      </div>
      <div className="post-comt-box">
        <form method="post">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Post your comment"
          />
        </form>
      </div>
    </li>
  );
}
