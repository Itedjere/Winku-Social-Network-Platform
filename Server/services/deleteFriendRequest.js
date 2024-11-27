import mongoose from "mongoose";
import { Friend } from "../models/friendModel.js";
import { User } from "../models/userModel.js";

export const deleteFriendRequest = async (args, req) => {
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

  const friendRequest = await Friend.findOneAndDelete({
    user: userId,
    friend: friendId,
    status: "PENDING",
  });

  if (!friendRequest) {
    throw new Error("An error occurred. Please try again");
  }

  return friend;
};
