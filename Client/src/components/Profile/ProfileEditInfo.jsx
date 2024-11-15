import React from "react";
import {
  TfiHeart,
  TfiInfoAlt,
  TfiLock,
  TfiMouseAlt,
  TfiSettings,
} from "react-icons/tfi";

export default function ProfileEditInfo() {
  return (
    <div className="widget">
      <h4 className="widget-title">Edit info</h4>
      <ul className="naves">
        <li>
          <TfiInfoAlt />
          <a title="" href="edit-profile-basic.html">
            Basic info
          </a>
        </li>
        <li>
          <TfiMouseAlt />
          <a title="" href="edit-work-eductation.html">
            Education &amp; Work
          </a>
        </li>
        <li>
          <TfiHeart />
          <a title="" href="edit-interest.html">
            My interests
          </a>
        </li>
        <li>
          <TfiSettings />
          <a title="" href="edit-account-setting.html">
            account setting
          </a>
        </li>
        <li>
          <TfiLock />
          <a title="" href="edit-password.html">
            change password
          </a>
        </li>
      </ul>
    </div>
  );
}
