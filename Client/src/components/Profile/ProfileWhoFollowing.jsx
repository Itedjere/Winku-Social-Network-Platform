import React from "react";
import friendAvatar2 from "../../assets/images/resources/friend-avatar2.jpg";
import friendAvatar4 from "../../assets/images/resources/friend-avatar4.jpg";
import friendAvatar6 from "../../assets/images/resources/friend-avatar6.jpg";
import friendAvatar8 from "../../assets/images/resources/friend-avatar8.jpg";
import friendAvatar3 from "../../assets/images/resources/friend-avatar3.jpg";

export default function ProfileWhoFollowing() {
  return (
    <div className="widget stick-widget">
      <h4 className="widget-title">Who's follownig</h4>
      <ul className="followers">
        <li>
          <figure>
            <img src={friendAvatar2} alt="" />
          </figure>
          <div className="friend-meta">
            <h4>
              <a href="time-line.html" title="">
                Kelly Bill
              </a>
            </h4>
            <a href="#" title="" className="underline">
              Add Friend
            </a>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar4} alt="" />
          </figure>
          <div className="friend-meta">
            <h4>
              <a href="time-line.html" title="">
                Issabel
              </a>
            </h4>
            <a href="#" title="" className="underline">
              Add Friend
            </a>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar6} alt="" />
          </figure>
          <div className="friend-meta">
            <h4>
              <a href="time-line.html" title="">
                Andrew
              </a>
            </h4>
            <a href="#" title="" className="underline">
              Add Friend
            </a>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar8} alt="" />
          </figure>
          <div className="friend-meta">
            <h4>
              <a href="time-line.html" title="">
                Sophia
              </a>
            </h4>
            <a href="#" title="" className="underline">
              Add Friend
            </a>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar3} alt="" />
          </figure>
          <div className="friend-meta">
            <h4>
              <a href="time-line.html" title="">
                Allen
              </a>
            </h4>
            <a href="#" title="" className="underline">
              Add Friend
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
