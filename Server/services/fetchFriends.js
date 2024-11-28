import mongoose from "mongoose";
import { Friend } from "../models/friendModel.js";

export const fetchFriends = async (args, req) => {
  const { profileId } = args;
  const { userId } = req;

  // validate profile id
  if (!mongoose.Types.ObjectId.isValid(profileId)) {
    throw new Error("Invalid user ID.");
  }

  // get profile friend's list
  const friends = await Friend.find({
    $or: [
      { user: profileId, status: "ACCEPTED" },
      { friend: profileId, status: "ACCEPTED" },
    ],
  })
    .populate("user", "_id firstname lastname username profile_photo")
    .populate("friend", "_id firstname lastname username profile_photo");

  // map through the list
  // return friend list

  return friends.map(async (person) => {
    const userInfo =
      person.user._id.toString() === profileId ? person.friend : person.user;

    const isFriend = await Friend.exists({
      $or: [
        { user: userId, friend: userInfo._id, status: "ACCEPTED" },
        { user: userInfo._id, friend: userId, status: "ACCEPTED" },
      ],
    });

    return {
      _id: person._id,
      friendId: userInfo._id,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      username: userInfo.username,
      profile_photo: userInfo.profile_photo,
      isFriend: isFriend !== null,
    };
  });
};
