import React from "react";
import ProfileShortcut from "../Profile/ProfileShortcut";
import RecentActivity from "./RecentActivity";
import ProfileWhoFollowing from "../Profile/ProfileWhoFollowing";

export default function LeftSidebar() {
  return (
    <>
      <ProfileShortcut />
      <RecentActivity />
      <ProfileWhoFollowing />
    </>
  );
}
