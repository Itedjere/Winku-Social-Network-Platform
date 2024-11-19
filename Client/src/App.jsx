import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileTimeline from "./pages/ProfileTimeline";
import Register from "./pages/Register";
import ProfileLayout from "./components/layouts/ProfileLayout";
import MainLayout from "./components/layouts/MainLayout";
import ProfilePhotos from "./pages/ProfilePhotos";
import ProfileVideos from "./pages/ProfileVideos";
import ProfileFriends from "./pages/ProfileFriends";
import ProfileGroups from "./pages/ProfileGroups";
import ProfileAbout from "./pages/ProfileAbout";
import Notifications from "./pages/Notifications";
import ProfileEditBasics from "./pages/ProfileEditBasics";
import ProfileEditInterest from "./pages/ProfileEditInterest";
import ProfileEditAccountSettings from "./pages/ProfileEditAccountSettings";
import ProfileChangePassword from "./pages/ProfileChangePassword";
import ChatLayout from "./components/layouts/ChatLayout";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
          </Route>
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<ProfileTimeline />} />
            <Route path="timeline" element={<ProfileTimeline />} />
            <Route path="photos" element={<ProfilePhotos />} />
            <Route path="videos" element={<ProfileVideos />} />
            <Route path="friends" element={<ProfileFriends />} />
            <Route path="groups" element={<ProfileGroups />} />
            <Route path="about" element={<ProfileAbout />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="edit-basics" element={<ProfileEditBasics />} />
            <Route path="interests" element={<ProfileEditInterest />} />
            <Route
              path="edit-account-settings"
              element={<ProfileEditAccountSettings />}
            />
            <Route path="change-password" element={<ProfileChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
