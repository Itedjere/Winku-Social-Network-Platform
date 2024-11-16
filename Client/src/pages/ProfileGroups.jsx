import React from "react";
import { FaUsers } from "react-icons/fa";
import group1 from "../assets/images/resources/group1.jpg";
import group2 from "../assets/images/resources/group2.jpg";
import group3 from "../assets/images/resources/group3.jpg";
import group4 from "../assets/images/resources/group4.jpg";
import group5 from "../assets/images/resources/group5.jpg";
import group6 from "../assets/images/resources/group6.jpg";
import group7 from "../assets/images/resources/group7.jpg";

export default function ProfileGroups() {
  return (
    <div className="central-meta">
      <div className="groups">
        <span>
          <FaUsers /> joined Groups
        </span>
      </div>
      <ul className="nearby-contct">
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group1} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  funparty
                </a>
              </h4>
              <span>public group</span>
              <em>32k Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group2} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  ABC News
                </a>
              </h4>
              <span>Private group</span>
              <em>5M Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group3} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  SEO Zone
                </a>
              </h4>
              <span>Public group</span>
              <em>32k Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group4} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  Max Us
                </a>
              </h4>
              <span>Public group</span>
              <em> 756 Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group5} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  Banana Group
                </a>
              </h4>
              <span>Friends Group</span>
              <em>32k Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group6} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  Bad boys n Girls
                </a>
              </h4>
              <span>Public group</span>
              <em>32k Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group7} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  Bachelor's fun
                </a>
              </h4>
              <span>Public Group</span>
              <em>500 Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="nearly-pepls">
            <figure>
              <a href="time-line.html" title="">
                <img src={group4} alt="" />
              </a>
            </figure>
            <div className="pepl-info">
              <h4>
                <a href="time-line.html" title="">
                  Max Us
                </a>
              </h4>
              <span>Public group</span>
              <em> 756 Members</em>
              <a href="#" title="" className="add-butn" data-ripple="">
                leave group
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="lodmore">
        <button className="btn-view btn-load-more"></button>
      </div>
    </div>
  );
}
