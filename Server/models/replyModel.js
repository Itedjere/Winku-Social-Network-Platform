import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  textContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Comment = mongoose.model("Comment", replySchema);
