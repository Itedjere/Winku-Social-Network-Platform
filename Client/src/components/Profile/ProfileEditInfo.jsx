import React from "react";
import {
  TfiHeart,
  TfiInfoAlt,
  TfiLock,
  TfiMouseAlt,
  TfiSettings,
} from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";

export default function ProfileEditInfo() {
  const { profileId } = useParams();
  return (
    <div className="widget">
      <h4 className="widget-title">Edit info</h4>
      <ul className="naves">
        <li>
          <TfiInfoAlt />
          <Link title="" to={`/profile/${profileId}/edit-basics`}>
            Basic info
          </Link>
        </li>
        <li>
          <TfiMouseAlt />
          <a title="" href="edit-work-eductation.html">
            Education &amp; Work
          </a>
        </li>
        <li>
          <TfiHeart />
          <Link title="" to={`/profile/${profileId}/interests`}>
            My interests
          </Link>
        </li>
        <li>
          <TfiSettings />
          <Link title="" to={`/profile/${profileId}/edit-account-settings`}>
            account setting
          </Link>
        </li>
        <li>
          <TfiLock />
          <Link title="" to={`/profile/${profileId}/change-password`}>
            change password
          </Link>
        </li>
      </ul>
    </div>
  );
}
