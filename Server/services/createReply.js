import { Comment } from "../models/commentModel.js";
import { Reply } from "../models/replyModel.js";

export const createReply = async (args, req) => {
  const { textContent, postId, commentId } = args;
  const { userId } = req;

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new Error("Comment does not exist");
  }

  const reply = new Reply({ textContent, postId, commentId, userId });
  await reply.save();

  comment.replies.push(reply._id);
  await comment.save();

  return await reply
    .populate("userId", "firstname lastname profile_photo")
    .execPopulate();
};
