import { Comment } from "../models/commentModel.js";
import { Reply } from "../models/replyModel.js";

export const createReply = async (args, req) => {
  const { textContent, commentId } = args.replyInfo;
  const { userId } = req;

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new Error("Comment does not exist");
  }

  const reply = new Reply({ textContent, commentId, user: userId });
  await reply.save();

  comment.replies.push(reply._id);
  await comment.save();

  return await reply.populate("user");
};
