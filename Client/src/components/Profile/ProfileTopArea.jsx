import React from "react";
import timeline1 from "../../assets/images/resources/timeline-1.jpg";
import userAvatar from "../../assets/images/resources/user-avatar.jpg";
import { FaCameraRetro } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

export default function ProfileTopArea() {
  const { profileId } = useParams();

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
                    <NavLink
                      to={`/profile/${profileId}/timeline`}
                      title=""
                      data-ripple=""
                    >
                      time line
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/photos`}
                      title=""
                      data-ripple=""
                    >
                      Photos
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/videos`}
                      title=""
                      data-ripple=""
                    >
                      Videos
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/friends`}
                      title=""
                      data-ripple=""
                    >
                      Friends
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/followers`}
                      title=""
                      data-ripple=""
                    >
                      followers
                    </NavLink>
                    <NavLink
                      to={`/profile/${profileId}/about`}
                      title=""
                      data-ripple=""
                    >
                      about
                    </NavLink>
                    <NavLink to="/chat" title="" data-ripple="">
                      chat
                    </NavLink>
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
