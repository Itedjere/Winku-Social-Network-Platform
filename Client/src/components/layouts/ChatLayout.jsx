import ProfileTopArea from "../Profile/ProfileTopArea";
import ProfileEditInfo from "../Profile/ProfileEditInfo";
import ProfileShortcut from "../Profile/ProfileShortcut";
import Advertisement from "../Advertisement";
import ProfileYourPage from "../Profile/ProfileYourPage";
import ProfileWhoFollowing from "../Profile/ProfileWhoFollowing";
import { Outlet } from "react-router-dom";

export default function ChatLayout() {
  return (
    <>
      <ProfileTopArea />
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row" id="page-contents">
                  <div className="col-lg-9">
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
