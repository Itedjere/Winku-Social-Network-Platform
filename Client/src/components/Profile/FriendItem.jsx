import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import friendAvatar9 from "../../assets/images/resources/friend-avatar9.jpg";

export default function FriendItem({ friend }) {
  const { auth } = useContext(AuthContext);
  return (
    <li>
      <div className="nearly-pepls">
        <figure>
          <Link to={`/profile/${friend.friendId}/timeline`} title="">
            <img
              src={
                friend.profile_photo
                  ? `${import.meta.env.VITE_SERVER_URL}${friend.profile_photo}`
                  : friendAvatar9
              }
              alt=""
            />
          </Link>
        </figure>
        <div className="pepl-info">
          <h4>
            <Link to={`/profile/${friend.friendId}/timeline`} title="">
              {`${friend.firstname} ${friend.lastname}`}
            </Link>
          </h4>
          <span>{friend.username}</span>
          {friend.friendId !== auth?.user?._id && (
            <>
              {friend.isFriend ? (
                <>
                  <a
                    href="#"
                    title="Unfriend"
                    className="add-butn more-action"
                    data-ripple=""
                  >
                    Unfriend
                  </a>
                  <a
                    href="#"
                    title="Chat Friend"
                    className="add-butn"
                    data-ripple=""
                  >
                    Chat Friend
                  </a>
                </>
              ) : (
                <a
                  href="#"
                  title="Add Friend"
                  className="add-butn"
                  data-ripple=""
                >
                  Add Friend
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}
