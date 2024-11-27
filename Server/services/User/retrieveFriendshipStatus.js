import { Friend } from "../../models/friendModel.js";

export const retreiveFriendshipStatus = async (profileId, req) => {
  // Default friendship status to "NONE"
  let friendshipStatus = "NONE";

  // Check if the authenticated user is viewing their own profile
  if (req.isAuth) {
    const isOwnProfile = req.userId === profileId;
    if (!isOwnProfile) {
      // Determine friendship status if not the user's own profile
      const friendship = await Friend.findOne({
        $or: [
          { user: req.userId, friend: profileId },
          { user: profileId, friend: req.userId },
        ],
      });

      if (friendship) {
        if (friendship.status === "ACCEPTED") {
          friendshipStatus = "FRIENDS";
        } else if (
          friendship.status === "PENDING" &&
          friendship.user.toString() === req.userId
        ) {
          friendshipStatus = "PENDING_SENT";
        } else if (
          friendship.status === "PENDING" &&
          friendship.friend.toString() === req.userId
        ) {
          friendshipStatus = "PENDING_RECEIVED";
        }
      }
    }
  }

  return friendshipStatus;
};
