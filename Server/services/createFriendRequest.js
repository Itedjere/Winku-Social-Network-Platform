import mongoose from "mongoose";
import { Friend } from "../models/friendModel.js";
import { User } from "../models/userModel.js";

export const createFriendRequest = async (args, req) => {
  const { friendId } = args;
  const { userId } = req;

  // validate friendId
  if (!mongoose.Types.ObjectId.isValid(friendId)) {
    throw new Error("Invalid user ID.");
  }

  // check if friend exists
  const friend = await User.findById(friendId);
  if (!friend) {
    throw new Error("This User does not exist");
  }

  // create the request
  const friendRequest = new Friend({
    user: userId,
    friend: friendId,
    status: "PENDING",
  });
  await friendRequest.save();

  // send success message
  return { status: true, message: "Friend request sent" };
};
