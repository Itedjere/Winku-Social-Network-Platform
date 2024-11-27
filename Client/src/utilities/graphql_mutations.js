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

export const ADD_REPLY = gql`
  mutation AddReply($replyInfo: ADDREPLYINPUT!) {
    addReply(replyInfo: $replyInfo) {
      _id
      user {
        _id
        firstname
        lastname
        profile_photo
      }
      commentId
      textContent
      createdAt
    }
  }
`;

export const UPDATE_PROFILE_BASIC_EDITS = gql`
  mutation UPDATE_BASIC_PROFIE($basicInfo: PROFILEBASICINPUT!) {
    editProfileBasic(basicInfo: $basicInfo) {
      firstname
      lastname
      about_me
      city
      state
      country
      dob
      phone
      gender
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation ChangePassword($passwordInfo: CHANGEPASSWORDINPUT!) {
    changePassword(passwordInfo: $passwordInfo) {
      message
      status
    }
  }
`;

export const ADD_USER_INTERESTS = gql`
  mutation AddUserInterests($interest: String!) {
    addInterests(interest: $interest) {
      interests
    }
  }
`;

export const REMOVE_USER_INTEREST = gql`
  mutation RemoveUserInterest($interest: String!) {
    removeInterest(interest: $interest) {
      interests
    }
  }
`;

export const UPDATE_USER_SETTINGS = gql`
  mutation UpdateUserSettings($settings: SETTINGSINPUT!) {
    updateSettings(settings: $settings) {
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
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation SendFriendReuest($friendId: ID!) {
    sendFriendRequest(friendId: $friendId) {
      friendshipStatus
    }
  }
`;
