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
