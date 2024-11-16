import LeftSidebar from "../components/Home/LeftSidebar";
import RightSidebar from "../components/Home/RightSidebar";
import Post from "../components/Home/Post";

export default function Home() {
  return (
    <section>
      <div className="gap gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div class="row" id="page-contents">
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <LeftSidebar />
                  </aside>
                </div>
                <div className="col-lg-6">
                  <Post />
                </div>
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <RightSidebar />
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
