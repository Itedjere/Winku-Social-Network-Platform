import { GraphQLDateTime } from "graphql-scalars";
import { registerUser } from "./services/registerUser.js";
import { retrieveUser } from "./services/retrieveUser.js";
import { loginUser } from "./services/loginUser.js";
import { changePassword } from "./services/changePassword.js";
import { createPost } from "./services/createPost.js";
import { likePost } from "./services/likePost.js";
import { dislikePost } from "./services/dislikePost.js";
import { createComment } from "./services/createComment.js";
import { createReply } from "./services/createReply.js";
import { fetchAllPosts } from "./services/fetchAllPosts.js";
import { fetchAllComments } from "./services/fetchAllComments.js";
import { fetchAllReplies } from "./services/fetchAllReplies.js";
import { fetchSinglePost } from "./services/fetchSinglePost.js";
import { fetchSingleComment } from "./services/fetchSingleComment.js";
import { fetchUserPosts } from "./services/fetchUserPosts.js";
import { updateProfileBasic } from "./services/updateProfileBasic.js";
import { addUserInterests } from "./services/addUserInterests.js";
import { removeUserInterest } from "./services/removeUserInterest.js";
import { updateUserSettings } from "./services/updateUserSettings.js";
import { createFriendRequest } from "./services/createFriendRequest.js";
import { Friend } from "./models/friendModel.js";

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
    allPosts: async (parent, args, context) => {
      try {
        return await fetchAllPosts();
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
    },
    userPosts: async (parent, args, context) => {
      try {
        return await fetchUserPosts(args);
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
    },
    singlePost: async (parent, args, context) => {
      try {
        return await fetchSinglePost(args);
      } catch (error) {
        console.error("Error fetching post:", error);
        throw error;
      }
    },
    allComments: async (parent, args, context) => {
      try {
        return await fetchAllComments(args.postId);
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
      }
    },
    singleComment: async (parent, args, context) => {
      try {
        return await fetchSingleComment(args);
      } catch (error) {
        console.error("Error fetching comment:", error);
        throw error;
      }
    },
    allReplies: async (parent, args, context) => {
      try {
        return await fetchAllReplies(args.commentId);
      } catch (error) {
        console.error("Error fetching replies:", error);
        throw error;
      }
    },
    allInterests: async (parent, args, context) => {
      try {
        return await retrieveUser(args.profileId);
      } catch (error) {
        console.error("Error fetching interests:", error);
        throw error;
      }
    },
    userSettings: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await retrieveUser(args.userId);
      } catch (error) {
        console.error("Error fetching interests:", error);
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
        return await createPost(args.postInfo, req);
      } catch (error) {
        console.error("Error creating post:", error);
        throw error;
      }
    },
    likePost: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await likePost(args, req);
      } catch (error) {
        console.error("Failed to like post:", error);
        throw error;
      }
    },
    dislikePost: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await dislikePost(args, req);
      } catch (error) {
        console.error("Failed to dislike post:", error);
        throw error;
      }
    },
    addComment: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await createComment(args, req);
      } catch (error) {
        console.error("Failed to comment on post:", error);
        throw error;
      }
    },
    addReply: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await createReply(args, req);
      } catch (error) {
        console.error("Failed to reply on comment:", error);
        throw error;
      }
    },
    editProfileBasic: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await updateProfileBasic(args, req);
      } catch (error) {
        console.error("Failed to update profile", error);
        throw error;
      }
    },
    addInterests: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await addUserInterests(args, req);
      } catch (error) {
        console.error("Failed to add interest", error);
        throw error;
      }
    },
    removeInterest: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await removeUserInterest(args, req);
      } catch (error) {
        console.error("Failed to remove interest", error);
        throw error;
      }
    },
    updateSettings: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await updateUserSettings(args, req);
      } catch (error) {
        console.error("Failed to update settings:", error);
        throw error;
      }
    },
    sendFriendRequest: async (parent, args, context) => {
      try {
        const { req } = context;
        if (!req.isAuth) {
          throw new Error("User is not authenticated");
        }
        return await createFriendRequest(args, req);
      } catch (error) {
        console.error("Failed to send friend request:", error);
        throw error;
      }
    },
  },
  User: {
    async friendCount(parent) {
      // Count friends where the user is either `user` or `friend`
      const count = await Friend.countDocuments({
        $or: [
          { user: parent._id, status: "ACCEPTED" },
          { friend: parent._id, status: "ACCEPTED" },
        ],
      });
      return count;
    },
  },
};
