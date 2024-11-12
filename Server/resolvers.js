import { GraphQLDateTime } from "graphql-scalars";
import { registerUser } from "./services/registerUser.js";
import { retrieveUser } from "./services/retrieveUser.js";

export const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    user: async (parent, args, context) => {
      try {
        const { userId } = args;
        return await retrieveUser(userId);
      } catch (error) {
        console.error("Error retrieving user:", error);
        throw new Error("An error occurred while retrieving the user.");
      }
    },
  },
  Mutation: {
    signup: async (parent, args, context) => {
      try {
        const { signupInfo } = args;
        return await registerUser(signupInfo);
      } catch (error) {
        console.error("Error signing up user:", error);
        throw new Error("An error occurred during signup. Please try again.");
      }
    },
  },
};
