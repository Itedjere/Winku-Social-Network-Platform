import { Post } from "../models/postModel.js";

export const dislikePost = async (args, req) => {
  const { postId } = args;
  const { userId } = req;

  const post = await Post.findById(postId);

  // Check if the user has already disliked the post
  const dislikedIndex = post.dislikedBy.indexOf(userId);
  if (dislikedIndex > -1) {
    // User has already disliked the post; remove the dislike to set it to neutral
    post.dislikedBy.splice(dislikedIndex, 1);
  } else {
    // Add dislike and remove any existing like
    post.dislikedBy.push(userId);

    const likedIndex = post.likedBy.indexOf(userId);
    if (likedIndex > -1) {
      post.likedBy.splice(likedIndex, 1);
    }
  }

  await post.save();
  return post;
};
