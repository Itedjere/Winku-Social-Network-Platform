import React from "react";
import {
  TfiBell,
  TfiComment,
  TfiHome,
  TfiPencilAlt,
  TfiPowerOff,
  TfiSearch,
  TfiSettings,
  TfiTarget,
  TfiUser,
} from "react-icons/tfi";
import { FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import thumb1 from "../../assets/images/resources/thumb-1.jpg";
import thumb2 from "../../assets/images/resources/thumb-2.jpg";
import thumb3 from "../../assets/images/resources/thumb-3.jpg";
import thumb4 from "../../assets/images/resources/thumb-4.jpg";
import thumb5 from "../../assets/images/resources/thumb-5.jpg";
import admin from "../../assets/images/resources/admin.jpg";
import resourcesThumb1 from "../../assets/images/resources/thumb-1.jpg";
import resourcesThumb2 from "../../assets/images/resources/thumb-2.jpg";
import resourcesThumb3 from "../../assets/images/resources/thumb-3.jpg";
import resourcesThumb4 from "../../assets/images/resources/thumb-4.jpg";
import resourcesThumb5 from "../../assets/images/resources/thumb-5.jpg";

export default function Topbar() {
  return (
    <div className="topbar stick">
      <div className="logo">
        <a title="" href="newsfeed.html">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="top-area">
        <ul className="main-menu">
          <li>
            <a href="#" title="">
              Home
            </a>
            <ul>
              <li>
                <a href="index-2.html" title="">
                  Home Social
                </a>
              </li>
              <li>
                <a href="index2.html" title="">
                  Home Social 2
                </a>
              </li>
              <li>
                <a href="index-company.html" title="">
                  Home Company
                </a>
              </li>
              <li>
                <a href="landing.html" title="">
                  Login page
                </a>
              </li>
              <li>
                <a href="logout.html" title="">
                  Logout Page
                </a>
              </li>
              <li>
                <a href="newsfeed.html" title="">
                  news feed
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" title="">
              timeline
            </a>
            <ul>
              <li>
                <a href="time-line.html" title="">
                  timeline
                </a>
              </li>
              <li>
                <a href="timeline-friends.html" title="">
                  timeline friends
                </a>
              </li>
              <li>
                <a href="timeline-groups.html" title="">
                  timeline groups
                </a>
              </li>
              <li>
                <a href="timeline-pages.html" title="">
                  timeline pages
                </a>
              </li>
              <li>
                <a href="timeline-photos.html" title="">
                  timeline photos
                </a>
              </li>
              <li>
                <a href="timeline-videos.html" title="">
                  timeline videos
                </a>
              </li>
              <li>
                <a href="fav-page.html" title="">
                  favourit page
                </a>
              </li>
              <li>
                <a href="groups.html" title="">
                  groups page
                </a>
              </li>
              <li>
                <a href="page-likers.html" title="">
                  Likes page
                </a>
              </li>
              <li>
                <a href="people-nearby.html" title="">
                  people nearby
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" title="">
              account settings
            </a>
            <ul>
              <li>
                <a href="create-fav-page.html" title="">
                  create fav page
                </a>
              </li>
              <li>
                <a href="edit-account-setting.html" title="">
                  edit account setting
                </a>
              </li>
              <li>
                <a href="edit-interest.html" title="">
                  edit-interest
                </a>
              </li>
              <li>
                <a href="edit-password.html" title="">
                  edit-password
                </a>
              </li>
              <li>
                <a href="edit-profile-basic.html" title="">
                  edit profile basics
                </a>
              </li>
              <li>
                <a href="edit-work-eductation.html" title="">
                  edit work educations
                </a>
              </li>
              <li>
                <a href="messages.html" title="">
                  message box
                </a>
              </li>
              <li>
                <a href="inbox.html" title="">
                  Inbox
                </a>
              </li>
              <li>
                <a href="notifications.html" title="">
                  notifications page
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" title="">
              more pages
            </a>
            <ul>
              <li>
                <a href="404.html" title="">
                  404 error page
                </a>
              </li>
              <li>
                <a href="about.html" title="">
                  about
                </a>
              </li>
              <li>
                <a href="contact.html" title="">
                  contact
                </a>
              </li>
              <li>
                <a href="faq.html" title="">
                  faq's page
                </a>
              </li>
              <li>
                <a href="insights.html" title="">
                  insights
                </a>
              </li>
              <li>
                <a href="knowledge-base.html" title="">
                  knowledge base
                </a>
              </li>
              <li>
                <a href="widgets.html" title="">
                  Widgts
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="setting-area">
          <li>
            <a href="#" title="Home" data-ripple="">
              <TfiSearch />
            </a>
            <div className="searched">
              <form method="post" className="form-search">
                <input type="text" placeholder="Search Friend" />
                <button data-ripple>
                  <TfiSearch />
                </button>
              </form>
            </div>
          </li>
          <li>
            <a href="newsfeed.html" title="Home" data-ripple="">
              <TfiHome />
            </a>
          </li>
          <li>
            <a href="#" title="Notification" data-ripple="">
              <TfiBell />
              <span>20</span>
            </a>
            <div className="dropdowns">
              <span>4 New Notifications</span>
              <ul className="drops-menu">
                <li>
                  <a href="notifications.html" title="">
                    <img src={thumb1} alt="" />
                    <div className="mesg-meta">
                      <h6>sarah Loren</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag green">New</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={thumb2} alt="" />
                    <div className="mesg-meta">
                      <h6>Jhon doe</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag red">Reply</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={thumb3} alt="" />
                    <div className="mesg-meta">
                      <h6>Andrew</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag blue">Unseen</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={thumb4} alt="" />
                    <div className="mesg-meta">
                      <h6>Tom cruse</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag">New</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={thumb5} alt="" />
                    <div className="mesg-meta">
                      <h6>Amy</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag">New</span>
                </li>
              </ul>
              <a href="notifications.html" title="" className="more-mesg">
                view more
              </a>
            </div>
          </li>
          <li>
            <a href="#" title="Messages" data-ripple="">
              <TfiComment />
              <span>12</span>
            </a>
            <div className="dropdowns">
              <span>5 New Messages</span>
              <ul className="drops-menu">
                <li>
                  <a href="notifications.html" title="">
                    <img src={resourcesThumb1} alt="" />
                    <div className="mesg-meta">
                      <h6>sarah Loren</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag green">New</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={resourcesThumb2} alt="" />
                    <div className="mesg-meta">
                      <h6>Jhon doe</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag red">Reply</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={resourcesThumb3} alt="" />
                    <div className="mesg-meta">
                      <h6>Andrew</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag blue">Unseen</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={resourcesThumb4} alt="" />
                    <div className="mesg-meta">
                      <h6>Tom cruse</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag">New</span>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    <img src={resourcesThumb5} alt="" />
                    <div className="mesg-meta">
                      <h6>Amy</h6>
                      <span>Hi, how r u dear ...?</span>
                      <i>2 min ago</i>
                    </div>
                  </a>
                  <span className="tag">New</span>
                </li>
              </ul>
              <a href="messages.html" title="" className="more-mesg">
                view more
              </a>
            </div>
          </li>
          <li>
            <a href="#" title="Languages" data-ripple="">
              <FaGlobe />
            </a>
            <div className="dropdowns languages">
              <a href="#" title="">
                <i className="ti-check"></i>English
              </a>
              <a href="#" title="">
                Arabic
              </a>
              <a href="#" title="">
                Dutch
              </a>
              <a href="#" title="">
                French
              </a>
            </div>
          </li>
        </ul>
        <div className="user-img">
          <img src={admin} alt="" />
          <span className="status f-online"></span>
          <div className="user-setting">
            <a href="#" title="">
              <span className="status f-online"></span>online
            </a>
            <a href="#" title="">
              <span className="status f-away"></span>away
            </a>
            <a href="#" title="">
              <span className="status f-off"></span>offline
            </a>
            <a href="#" title="">
              <TfiUser /> view profile
            </a>
            <a href="#" title="">
              <TfiPencilAlt />
              edit profile
            </a>
            <a href="#" title="">
              <TfiTarget />
              activity log
            </a>
            <a href="#" title="">
              <TfiSettings />
              account setting
            </a>
            <a href="#" title="">
              <TfiPowerOff />
              log out
            </a>
          </div>
        </div>
        <span className="ti-menu main-menu" data-ripple=""></span>
      </div>
    </div>
  );
}
