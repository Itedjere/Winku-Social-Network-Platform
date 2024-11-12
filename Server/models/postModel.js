import { required } from "joi";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["TEXT", "IMAGE", "VIDEO"], required: true },
  textContent: { type: String, required: true },
  mediaURL: { type: String }, // URL to media file if it's an image/video
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model("Post", postSchema);
