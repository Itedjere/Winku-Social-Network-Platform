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
    settings {
      display {
        theme
      }
      interactions {
        enable_follow_me
        enable_friend_requests
        enable_tagging
      }
      notifications {
        enable_notification
        enable_notification_sound
        enable_sms
      }
      privacy {
        expose_author_name
        hide_profile
        hide_profile_photo
        show_me_online
      }
    }
  }
`;
