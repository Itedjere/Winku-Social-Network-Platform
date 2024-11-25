import { User } from "../models/userModel.js";

export const removeUserInterest = async (args, req) => {
  const { interest } = args;
  const { userId } = req;

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("This account does not exist");
  }

  let interestIndex = user.interests.indexOf(interest);
  if (interestIndex > -1) {
    user.interests.splice(interestIndex, 1);
    await user.save();
  }

  return user;
};
