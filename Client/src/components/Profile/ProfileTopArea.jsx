import React from "react";
import timeline1 from "../../assets/images/resources/timeline-1.jpg";
import userAvatar from "../../assets/images/resources/user-avatar.jpg";
import { FaCameraRetro } from "react-icons/fa";

export default function ProfileTopArea() {
  return (
    <section>
      <div className="feature-photo">
        <figure>
          <img src={timeline1} alt="" />
        </figure>
        <div className="add-btn">
          <span>1205 followers</span>
          <a href="#" title="" data-ripple="">
            Add Friend
          </a>
        </div>
        <form className="edit-phto">
          <FaCameraRetro />
          <label className="fileContainer">
            Edit Cover Photo
            <input type="file" />
          </label>
        </form>
        <div className="container-fluid">
          <div className="row merged">
            <div className="col-lg-2 col-sm-3">
              <div className="user-avatar">
                <figure>
                  <img src={userAvatar} alt="" />
                  <form className="edit-phto">
                    <FaCameraRetro />
                    <label className="fileContainer">
                      Edit Display Photo
                      <input type="file" />
                    </label>
                  </form>
                </figure>
              </div>
            </div>
            <div className="col-lg-10 col-sm-9">
              <div className="timeline-info">
                <ul>
                  <li className="admin-name">
                    <h5>Janice Griffith</h5>
                    <span>Group Admin</span>
                  </li>
                  <li>
                    <a
                      className="active"
                      href="time-line.html"
                      title=""
                      data-ripple=""
                    >
                      time line
                    </a>
                    <a
                      className=""
                      href="timeline-photos.html"
                      title=""
                      data-ripple=""
                    >
                      Photos
                    </a>
                    <a
                      className=""
                      href="timeline-videos.html"
                      title=""
                      data-ripple=""
                    >
                      Videos
                    </a>
                    <a
                      className=""
                      href="timeline-friends.html"
                      title=""
                      data-ripple=""
                    >
                      Friends
                    </a>
                    <a
                      className=""
                      href="timeline-groups.html"
                      title=""
                      data-ripple=""
                    >
                      Groups
                    </a>
                    <a className="" href="about.html" title="" data-ripple="">
                      about
                    </a>
                    <a className="" href="#" title="" data-ripple="">
                      more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
