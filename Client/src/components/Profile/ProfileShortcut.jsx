import React, { useContext } from "react";
import {
  TfiBell,
  TfiClipboard,
  TfiCommentsSmiley,
  TfiFiles,
  TfiImage,
  TfiMouseAlt,
  TfiPowerOff,
  TfiUser,
  TfiVideoCamera,
} from "react-icons/tfi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfileShortcut() {
  const { logoutUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    logoutUser();
    toast.success("You logged out successfully");
    navigate("/login");
  };
  return (
    <div className="widget">
      <h4 className="widget-title">Shortcuts</h4>
      <ul className="naves">
        <li>
          <TfiClipboard />
          <Link to="/" title="Home">
            News feed
          </Link>
        </li>
        <li>
          <TfiMouseAlt />
          <Link to="/chat" title="Chat">
            Inbox
          </Link>
        </li>
        <li>
          <TfiFiles />
          <Link to={`/profile/${auth?.user?._id}/timeline`} title="My profile">
            My profile
          </Link>
        </li>
        <li>
          <TfiUser />
          <Link to={`/profile/${auth?.user?._id}/friends`} title="Friends">
            friends
          </Link>
        </li>
        <li>
          <TfiImage />
          <Link to={`/profile/${auth?.user?._id}/photos`} title="photos">
            photos
          </Link>
        </li>
        <li>
          <TfiVideoCamera />
          <Link to={`/profile/${auth?.user?._id}/videos`} title="videos">
            videos
          </Link>
        </li>
        <li>
          <TfiCommentsSmiley />
          <Link to={`/chat`} title="chat">
            Messages
          </Link>
        </li>
        <li>
          <TfiBell />
          <Link
            to={`/profile/${auth?.user?._id}/notifications`}
            title="notifications"
          >
            Notifications
          </Link>
        </li>
        <li>
          <TfiPowerOff />
          <a href="logout" onClick={logOut} title="Logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
