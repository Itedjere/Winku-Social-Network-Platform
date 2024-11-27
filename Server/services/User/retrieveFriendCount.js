import { Friend } from "../../models/friendModel.js";

export const retrieveFriendCount = async (profileId) => {
  const count = await Friend.countDocuments({
    $or: [
      { user: profileId, status: "ACCEPTED" },
      { friend: profileId, status: "ACCEPTED" },
    ],
  });
  return count;
};
