import { gql } from "@apollo/client";
import { CORE_POST_FIELDS, CORE_USER_FIELDS } from "./graphql_fragments";

export const REGISTER_USER = gql`
  ${CORE_USER_FIELDS}
  mutation RegisterUser($signupInfo: ADDUSERINPUT!) {
    signup(signupInfo: $signupInfo) {
      user {
        ...CoreUserFields
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  ${CORE_USER_FIELDS}
  mutation LoginUser($loginInfo: LOGINUSERINPUT!) {
    login(loginInfo: $loginInfo) {
      token
      user {
        ...CoreUserFields
      }
    }
  }
`;

export const UPLOAD_POST = gql`
  ${CORE_POST_FIELDS}
  mutation AddPost($addPostPostInfo: ADDPOSTINPUT) {
    addPost(postInfo: $addPostPostInfo) {
      ...CorePostFields
    }
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likedBy
      dislikedBy
    }
  }
`;

export const DISLIKE_POST = gql`
  mutation DislikePost($postId: ID!) {
    dislikePost(postId: $postId) {
      _id
      likedBy
      dislikedBy
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $textContent: String!) {
    addComment(postId: $postId, textContent: $textContent) {
      _id
      user {
        _id
        firstname
        lastname
        profile_photo
      }
      postId
      textContent
      replies
      createdAt
    }
  }
`;
