import { Comment } from "../models/commentModel.js";
import { Post } from "../models/postModel.js";

export const createComment = async (args, req) => {
  const { textContent, postId } = args;
  const { userId } = req;

  // get the post
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error("Post does not exist");
  }

  // create a new comment
  const comment = new Comment({ userId, textContent, postId });
  await comment.save();

  // update the post comment array
  post.comments.push(comment._id);
  await post.save();

  // Return the newly created comment, populated with user info if needed
  return await comment
    .populate("userId", "firstname lastname profile_photo")
    .execPopulate();
};
