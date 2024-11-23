import mongoose from "mongoose";
import { Comment } from "../models/commentModel.js";
import { Post } from "../models/postModel.js";

export const fetchSinglePost = async (args) => {
  // Validate post ID
  if (!mongoose.Types.ObjectId.isValid(args.postId)) {
    throw new Error("Invalid Post ID");
  }

  const post = await Post.findById(args.postId).populate("user");

  if (!post) {
    throw new Error("Post not Found");
  }

  // find Comments
  const comments = await Comment.find({ postId: post._id })
    .sort({ createdAt: -1 })
    .populate("user");

  return { post, comments };
};
