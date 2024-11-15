import React from "react";
import ProfileYourPage from "../Profile/ProfileYourPage";
import Advertisement from "../Advertisement";
import ProfileFriends from "../Profile/ProfileFriends";

export default function RightSidebar() {
  return (
    <>
      <ProfileYourPage />
      <Advertisement />
      <ProfileFriends />
    </>
  );
}
