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
