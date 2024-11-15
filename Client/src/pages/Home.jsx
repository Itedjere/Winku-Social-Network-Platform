import ResponsiveHeader from "../components/Navbar/ResponsiveHeader";
import Topbar from "../components/Navbar/Topbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/Footer/BottomBar";
import LeftSidebar from "../components/Home/LeftSidebar";
import RightSidebar from "../components/Home/RightSidebar";
import Post from "../components/Home/Post";

import React from "react";

export default function Home() {
  return (
    <div className="theme-layout">
      <ResponsiveHeader />
      <Topbar />
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div class="row" id="page-contents">
                  <LeftSidebar />
                  <Post />
                  <RightSidebar />
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
