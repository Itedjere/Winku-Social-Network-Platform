import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function FriendItem({ friend }) {
  const { auth } = useContext(AuthContext);
  return (
    <li>
      <div className="nearly-pepls">
        <figure>
          <a href={`/profile/${friend.friendId}/timeline`} title="">
            <img
              src={
                friend.profile_photo
                  ? `${import.meta.env.VITE_SERVER_URL}${friend.profile_photo}`
                  : friendAvatar9
              }
              alt=""
            />
          </a>
        </figure>
        <div className="pepl-info">
          <h4>
            <a href={`/profile/${friend.friendId}/timeline`} title="">
              {`${friend.firstname} ${friend.lastname}`}
            </a>
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
