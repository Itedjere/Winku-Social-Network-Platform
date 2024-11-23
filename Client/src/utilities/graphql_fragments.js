import { gql } from "@apollo/client";

export const CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
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
`;

export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
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
`;
