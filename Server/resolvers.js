import { GraphQLDateTime } from "graphql-scalars";
import { registerUser } from "./services/registerUser.js";
import { retrieveUser } from "./services/retrieveUser.js";
import { loginUser } from "./services/loginUser.js";
import { changePassword } from "./services/changePassword.js";
import { createPost } from "./services/createPost.js";

export const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    user: async (parent, args, context) => {
      try {
        const { userId } = args;
        return await retrieveUser(userId);
      } catch (error) {
        console.error("Error retrieving user:", error);
        throw error;
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
        throw error;
      }
    },
    login: async (parent, args, context) => {
      try {
        const { loginInfo } = args;
        return await loginUser(loginInfo);
      } catch (error) {
        console.error("Error login user:", error);
        throw error;
      }
    },
    changePassword: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await changePassword(args.passwordInfo, req.userId);
      } catch (error) {
        console.error("Error changing password:", error);
        throw error;
      }
    },
    addPost: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await createPost(args.postInfo, req.userId);
      } catch (error) {
        console.error("Error creating post:", error);
        throw error;
      }
    },
  },
};
