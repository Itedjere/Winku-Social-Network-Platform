import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import InputEmoji from "react-input-emoji";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import { useMutation } from "@apollo/client";
import { ADD_REPLY } from "../../utilities/graphql_mutations";
import { toast } from "react-toastify";
import { handleApolloErrors } from "../../utilities/utilities";
import { GET_COMMENT } from "../../utilities/graphql_queries";

export default function ReplyForm({ comment }) {
  const { auth } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [addReply] = useMutation(ADD_REPLY, {
    refetchQueries: [GET_COMMENT],
  });

  const handleOnEnter = async () => {
    // check if reply is empty or less than 20 characters
    if (text.length < 2) {
      return toast.error("Reply must be more than 15 characters");
    }

    // send feedbackt to server
    try {
      const { data } = await addReply({
        variables: {
          replyInfo: {
            commentId: comment._id,
            textContent: text,
          },
        },
      });
      if (data) {
        toast.success("Reply added successfully!!!");
      }
    } catch (error) {
      console.error("Add reply error", error);
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
            placeholder="Post your reply"
          />
        </form>
      </div>
    </li>
  );
}
