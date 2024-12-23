import { gql } from "@apollo/client";
import { CORE_POST_FIELDS } from "./graphql_fragments";

export const GET_ALL_POSTS = gql`
  ${CORE_POST_FIELDS}
  query allPosts {
    allPosts {
      ...CorePostFields
    }
  }
`;

export const GET_USER_POSTS = gql`
  ${CORE_POST_FIELDS}
  query UserPosts($profileId: ID!) {
    userPosts(profileId: $profileId) {
      ...CorePostFields
    }
  }
`;

export const GET_POST = gql`
  ${CORE_POST_FIELDS}
  query getPost($postId: ID!) {
    singlePost(postId: $postId) {
      post {
        ...CorePostFields
      }
      comments {
        _id
        createdAt
        postId
        replies
        textContent
        user {
          _id
          firstname
          lastname
          profile_photo
        }
      }
    }
  }
`;

export const GET_COMMENT = gql`
  query GetComment($commentId: ID!) {
    singleComment(commentId: $commentId) {
      comment {
        _id
        createdAt
        postId
        replies
        textContent
        user {
          _id
          firstname
          lastname
          profile_photo
        }
      }
      replies {
        commentId
        textContent
        createdAt
        user {
          _id
          firstname
          lastname
          profile_photo
        }
      }
    }
  }
`;

export const GET_USER_STATS = gql`
  query GetUser($profileId: ID!) {
    user(userId: $profileId) {
      firstname
      lastname
      profile_photo
      cover_photo
      username
      friendCount
      friendshipStatus
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUserInfo($profileId: ID!) {
    user(userId: $profileId) {
      firstname
      lastname
      about_me
      city
      state
      country
      phone
      email
      interests
      languages
    }
  }
`;

export const GET_USER_INTERESTS = gql`
  query GetAllUserInterest($profileId: ID!) {
    allInterests(profileId: $profileId) {
      interests
    }
  }
`;

export const GET_USER_FRIENDS = gql`
  query Friends($profileId: ID!) {
    friends(profileId: $profileId) {
      _id
      firstname
      lastname
      username
      friendId
      profile_photo
      isFriend
    }
  }
`;
