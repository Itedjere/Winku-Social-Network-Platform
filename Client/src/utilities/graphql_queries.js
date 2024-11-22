import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      user {
        _id
        firstname
        lastname
        profile_photo
      }
      mediaURL
      postType
      textContent
      comments
      likedBy
      dislikedBy
      createdAt
    }
  }
`;
