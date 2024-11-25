import React, { useContext } from "react";
import ProfileTopArea from "../Profile/ProfileTopArea";
import ProfileEditInfo from "../Profile/ProfileEditInfo";
import ProfileShortcut from "../Profile/ProfileShortcut";
import Advertisement from "../Advertisement";
import ProfileYourPage from "../Profile/ProfileYourPage";
import ProfileWhoFollowing from "../Profile/ProfileWhoFollowing";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfileLayout() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <ProfileTopArea />
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row" id="page-contents">
                  <div className="col-lg-3">
                    <aside className="sidebar static">
                      {auth && <ProfileEditInfo />}
                      <ProfileShortcut />
                    </aside>
                  </div>
                  <div className="col-lg-6">
                    <Outlet />
                  </div>
                  <div className="col-lg-3">
                    <aside className="sidebar static">
                      <Advertisement />
                      <ProfileYourPage />
                      <ProfileWhoFollowing />
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
