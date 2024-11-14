import { Post } from "../models/postModel.js";

export const fetchAllPosts = async () => {
  // Find all posts (or apply filters if needed)
  const posts = await Post.find({})
    .sort({ createdAt: -1 }) // You can pass filters here, e.g., { active: true }
    .populate("userId", "firstname lastname profile_photo")
    .exec(); // Ensuring it is executed properly

  // Add comment count for each post
  const postsWithCommentCount = posts.map((post) => ({
    ...post.toObject(), // Convert the post from a Mongoose document to a plain JavaScript object
    commentsCount: post.comments.length, // Adding comment count based on the length of the comments array
  }));

  return postsWithCommentCount;
};
