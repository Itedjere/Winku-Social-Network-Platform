import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($signupInfo: ADDUSERINPUT!) {
    signup(signupInfo: $signupInfo) {
      user {
        _id
        firstname
        lastname
        email
        gender
        username
        profile_photo
        cover_photo
        country
        city
        state
        about_me
        dob
        phone
        website
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($loginInfo: LOGINUSERINPUT!) {
    login(loginInfo: $loginInfo) {
      token
      user {
        _id
        firstname
        lastname
        email
        gender
        username
        profile_photo
        cover_photo
        country
        city
        state
        about_me
        dob
        phone
        website
      }
    }
  }
`;

export const UPLOAD_POST = gql`
  mutation AddPost($addPostPostInfo: ADDPOSTINPUT) {
    addPost(postInfo: $addPostPostInfo) {
      _id
      mediaURL
      postType
      textContent
      user {
        _id
        profile_photo
        firstname
        lastname
      }
      createdAt
      comments
      likedBy
      dislikedBy
      views
    }
  }
`;
