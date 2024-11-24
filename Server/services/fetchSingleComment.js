import mongoose from "mongoose";
import { Comment } from "../models/commentModel.js";
import { Reply } from "../models/replyModel.js";

export const fetchSingleComment = async (args) => {
  const { commentId } = args;
  // Validate comment ID
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    throw new Error("Invalid Comment ID");
  }

  //   Get comment
  const comment = await Comment.findById(commentId).populate("user");
  if (!comment) {
    throw new Error("Comment not found");
  }

  //   retrieve all replies
  const replies = await Reply.find({ commentId: comment._id })
    .sort({ createdAt: -1 })
    .populate("user");

  return { comment, replies };
};
