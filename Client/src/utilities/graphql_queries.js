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
