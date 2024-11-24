import { Post } from "../models/postModel.js";

export const fetchUserPosts = async (args) => {
  // Find all posts (or apply filters if needed)
  const posts = await Post.find({ user: args.profileId })
    .sort({ createdAt: -1 })
    .populate("user");

  return posts;
};
