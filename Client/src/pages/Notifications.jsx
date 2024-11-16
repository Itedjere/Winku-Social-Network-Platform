import React from "react";
import friendAvatar from "../assets/images/resources/friend-avatar.jpg";
import friendAvatar2 from "../assets/images/resources/friend-avatar2.jpg";
import friendAvatar3 from "../assets/images/resources/friend-avatar3.jpg";
import friendAvatar4 from "../assets/images/resources/friend-avatar4.jpg";
import friendAvatar5 from "../assets/images/resources/friend-avatar5.jpg";
import friendAvatar6 from "../assets/images/resources/friend-avatar6.jpg";
import { FaTrash } from "react-icons/fa";

export default function Notifications() {
  return (
    <div class="central-meta">
      <div class="editing-interest">
        <h5 class="f-title">
          <i class="ti-bell"></i>All Notifications{" "}
        </h5>
        <div class="notification-box">
          <ul>
            <li>
              <figure>
                <img src={friendAvatar} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>bob frank like your post</p>
                <span>30 mints ago</span>
              </div>
              <FaTrash className="del" />
            </li>
            <li>
              <figure>
                <img src={friendAvatar2} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>Sarah Hetfield commented on your photo. </p>
                <span>1 hours ago</span>
              </div>
              <FaTrash className="del" />
            </li>
            <li>
              <figure>
                <img src={friendAvatar3} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>Mathilda Brinker commented on your new profile status. </p>
                <span>2 hours ago</span>
              </div>
              <FaTrash className="del" />
            </li>
            <li>
              <figure>
                <img src={friendAvatar4} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>
                  Green Goo Rock invited you to attend to his event Goo in
                  Gotham Bar.{" "}
                </p>
                <span>2 hours ago</span>
              </div>
              <FaTrash className="del" />
            </li>
            <li>
              <figure>
                <img src={friendAvatar5} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>Chris Greyson liked your profile status. </p>
                <span>1 day ago</span>
              </div>
              <FaTrash className="del" />
            </li>
            <li>
              <figure>
                <img src={friendAvatar6} alt="" />
              </figure>
              <div class="notifi-meta">
                <p>
                  You and Nicholas Grissom just became friends. Write on his
                  wall.{" "}
                </p>
                <span>2 days ago</span>
              </div>
              <FaTrash className="del" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
