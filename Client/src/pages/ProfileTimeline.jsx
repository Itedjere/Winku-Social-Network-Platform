import ResponsiveHeader from "../components/Navbar/ResponsiveHeader";
import Topbar from "../components/Navbar/Topbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/Footer/BottomBar";
import ProfileTopArea from "../components/Profile/ProfileTopArea";
import ProfileEditInfo from "../components/Profile/ProfileEditInfo";
import ProfileShortcut from "../components/Profile/ProfileShortcut";
import Post from "../components/Home/Post";
import Advertisement from "../components/Advertisement";
import ProfileYourPage from "../components/Profile/ProfileYourPage";
import ProfileWhoFollowing from "../components/Profile/ProfileWhoFollowing";

export default function ProfileTimeline() {
  return (
    <div className="theme-layout">
      <ResponsiveHeader />
      <Topbar />
      <ProfileTopArea />
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row" id="page-contents">
                  <div className="col-lg-3">
                    <aside className="sidebar static">
                      <ProfileEditInfo />
                      <ProfileShortcut />
                    </aside>
                  </div>
                  <div className="col-lg-6">
                    <Post />
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
      <Footer />
      <BottomBar />
    </div>
  );
}
