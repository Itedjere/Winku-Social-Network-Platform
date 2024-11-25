import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  TfiHeart,
  TfiInfoAlt,
  TfiLock,
  TfiMouseAlt,
  TfiSettings,
} from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";

export default function ProfileEditInfo() {
  const { auth } = useContext(AuthContext);

  const { profileId } = useParams();
  return (
    <div className="widget">
      <h4 className="widget-title">Edit info</h4>
      <ul className="naves">
        <li>
          <TfiInfoAlt />
          <Link title="" to={`/profile/${auth?.user?._id}/edit-basics`}>
            Basic info
          </Link>
        </li>
        <li>
          <TfiMouseAlt />
          <a title="" href={`/profile/${auth?.user?._id}/edit-education`}>
            Education &amp; Work
          </a>
        </li>
        <li>
          <TfiHeart />
          <Link title="" to={`/profile/${auth?.user?._id}/interests`}>
            My interests
          </Link>
        </li>
        <li>
          <TfiSettings />
          <Link
            title=""
            to={`/profile/${auth?.user?._id}/edit-account-settings`}
          >
            account setting
          </Link>
        </li>
        <li>
          <TfiLock />
          <Link title="" to={`/profile/${auth?.user?._id}/change-password`}>
            change password
          </Link>
        </li>
      </ul>
    </div>
  );
}
