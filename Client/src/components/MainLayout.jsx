import ResponsiveHeader from "./Navbar/ResponsiveHeader";
import Topbar from "./Navbar/Topbar";
import Footer from "./Footer/Footer";
import BottomBar from "./Footer/BottomBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="theme-layout">
      <ResponsiveHeader />
      <Topbar />
      <Outlet />
      <Footer />
      <BottomBar />
    </div>
  );
}
