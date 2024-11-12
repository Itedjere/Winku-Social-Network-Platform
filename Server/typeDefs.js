import { GraphQLDateTime } from "graphql-scalars";

export const typeDefs = `#graphql
    scalar Date

    enum AllowedTheme {
        DAY
        NIGHT
    }

    enum Gender {
        MALE
        FEMALE
    }

    enum AllowedPost {
        TEXT
        IMAGE
        VIDEO
    }

    type SettingsNotifications {
        enable_notification: Boolean!
        enable_notification_sound: Boolean!
        enable_sms: Boolean!
    }

    type SettingsPrivacy {
        hide_profile: Boolean!
        hide_profile_photo: Boolean!
        show_me_online: Boolean!
        expose_author_name: Boolean!
    }

    type SettingsInteractions {
        enable_tagging: Boolean!
        enable_friend_requests: Boolean!
        enable_follow_me: Boolean!
    }

    type SettingsDisplay {
        theme: AllowedTheme
    }

    type Settings {
        notifications: SettingsNotifications!
        privacy: SettingsPrivacy!
        display: SettingsDisplay
        interactions: SettingsInteractions!
    }

    # User Type
    type User {
        _id: ID!
        firstname: String!
        lastname: String!
        username: String!
        gender: Gender!
        email: String!
        about_me: String
        phone: String
        city: String
        state: String
        country: String
        website: String
        interests: [String]!
        languages: [String]!
        dob: Date
        profile_photo: String
        cover_photo: String
        settings: Settings!
    }

    type AuthenticatedUser {
        user: User!
        token: String!
    }

    type GenericSuccess {
        status: Boolean!
        message: String!
    }

    type Reply {
        _id: ID!
        user: User!
        textContent: String!
        createdAt: Date!
    }

    type Comment {
        _id: ID!
        user: User!
        textContent: String!
        replies: [Reply!]!
        createdAt: Date!
    }

    type Post {
        _id: ID!
        user: User!
        type: AllowedPost!
        textContent: String!
        mediaURL: String
        comments: [Comment!]!
        createdAt: Date!
    }

    type Query {
        user(userId: ID!): User
    }

    type Mutation {
        signup(signupInfo: ADDUSERINPUT!): AuthenticatedUser!
        login(loginInfo: LOGINUSERINPUT!): AuthenticatedUser!
        changePassword(passwordInfo: CHANGEPASSWORDINPUT!): GenericSuccess!
        addPost(postInfo: ADDPOSTINPUT): Post!
    }

    input ADDPOSTINPUT {
        type: AllowedPost!
        textContent: String!
        mediaURL: String
        createdAt: Date
    }

    input ADDUSERINPUT {
        firstname: String!
        lastname: String!
        username: String!
        password: String!
        gender: Gender!
        email: String!
    }

    input LOGINUSERINPUT {
        username: String!
        password: String!
    }

    input CHANGEPASSWORDINPUT {
        new_password: String!
        confirm_password: String!
        current_password: String!
    }

`;
