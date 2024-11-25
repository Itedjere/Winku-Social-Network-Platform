import { User } from "../models/userModel.js";

export const addUserInterests = async (args, req) => {
  const { userId } = req;
  const { interest } = args;

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Sorry your account does not exist");
  }

  if (user.interests.indexOf(interest) === -1) {
    user.interests.push(interest);
    await user.save();
  }

  return user;
};
