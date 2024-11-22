import { Post } from "../models/postModel.js";

export const fetchAllPosts = async () => {
  // Find all posts (or apply filters if needed)
  const posts = await Post.find({}).populate("user");

  return posts;
};
