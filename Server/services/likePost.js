import { Post } from "../models/postModel.js";

export const likePost = async (args, req) => {
  const { postId } = args;
  const { userId } = req;

  const post = await Post.findById(postId);

  // Check if the user has already liked the post
  const likedIndex = post.likedBy.indexOf(userId);
  if (likedIndex > -1) {
    // User has already liked the post; remove the like to set it to neutral
    post.likedBy.splice(likedIndex, 1);
  } else {
    // Add like and remove any existing dislike
    post.likedBy.push(userId);

    const dislikedIndex = post.dislikedBy.indexOf(userId);
    if (dislikedIndex > -1) {
      post.dislikedBy.splice(dislikedIndex, 1);
    }
  }

  await post.save();
  return Post.findById(post._id).populate("user");
};
