import React from "react";
import friendAvatar from "../assets/images/resources/friend-avatar.jpg";
import friendAvatar2 from "../assets/images/resources/friend-avatar2.jpg";
import friendAvatar3 from "../assets/images/resources/friend-avatar3.jpg";
import friendAvatar4 from "../assets/images/resources/friend-avatar4.jpg";
import friendAvatar5 from "../assets/images/resources/friend-avatar5.jpg";
import friendAvatar6 from "../assets/images/resources/friend-avatar6.jpg";
import friendAvatar7 from "../assets/images/resources/friend-avatar7.jpg";
import friendAvatar8 from "../assets/images/resources/friend-avatar8.jpg";
import userlist1 from "../assets/images/resources/userlist-1.jpg";
import userlist2 from "../assets/images/resources/userlist-2.jpg";

export default function Chat() {
  return (
    <div className="central-meta">
      <div className="messages">
        <h5 className="f-title">
          <i className="ti-bell"></i>All Messages{" "}
          <span className="more-options">
            <i className="fa fa-ellipsis-h"></i>
          </span>
        </h5>
        <div className="message-box">
          <ul className="peoples">
            <li>
              <figure>
                <img src={friendAvatar2} alt="" />
                <span className="status f-online"></span>
              </figure>
              <div className="people-name">
                <span>Molly cyrus</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar3} alt="" />
                <span className="status f-away"></span>
              </figure>
              <div className="people-name">
                <span>Andrew</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar} alt="" />
                <span className="status f-online"></span>
              </figure>

              <div className="people-name">
                <span>jason bourne</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar4} alt="" />
                <span className="status off-online"></span>
              </figure>
              <div className="people-name">
                <span>Sarah Grey</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar5} alt="" />
                <span className="status f-online"></span>
              </figure>
              <div className="people-name">
                <span>bill doe</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar6} alt="" />
                <span className="status f-away"></span>
              </figure>
              <div className="people-name">
                <span>shen cornery</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar7} alt="" />
                <span className="status off-online"></span>
              </figure>
              <div className="people-name">
                <span>kill bill</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar8} alt="" />
                <span className="status f-online"></span>
              </figure>
              <div className="people-name">
                <span>jasmin walia</span>
              </div>
            </li>
            <li>
              <figure>
                <img src={friendAvatar6} alt="" />
                <span className="status f-online"></span>
              </figure>
              <div className="people-name">
                <span>neclos cage</span>
              </div>
            </li>
          </ul>
          <div className="peoples-mesg-box">
            <div className="conversation-head">
              <figure>
                <img src={friendAvatar} alt="" />
              </figure>
              <span>
                jason bourne <i>online</i>
              </span>
            </div>
            <ul className="chatting-area">
              <li className="you">
                <figure>
                  <img src={userlist2} alt="" />
                </figure>
                <p>what's liz short for? :)</p>
              </li>
              <li className="me">
                <figure>
                  <img src={userlist1} alt="" />
                </figure>
                <p>Elizabeth lol</p>
              </li>
              <li className="me">
                <figure>
                  <img src={userlist1} alt="" />
                </figure>
                <p>wanna know whats my second guess was?</p>
              </li>
              <li className="you">
                <figure>
                  <img src={userlist2} alt="" />
                </figure>
                <p>yes</p>
              </li>
              <li className="me">
                <figure>
                  <img src={userlist1} alt="" />
                </figure>
                <p>Disney's the lizard king</p>
              </li>
              <li className="me">
                <figure>
                  <img src={userlist1} alt="" />
                </figure>
                <p>i know him 5 years ago</p>
              </li>
              <li className="you">
                <figure>
                  <img src={userlist2} alt="" />
                </figure>
                <p>coooooooooool dude ;)</p>
              </li>
            </ul>
            <div className="message-text-container">
              <form method="post">
                <textarea></textarea>
                <button title="send">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
