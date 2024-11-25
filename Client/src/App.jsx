import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
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
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import PostComment from "./components/Post/PostComment";
import HomeLayout from "./components/layouts/HomeLayout";
import CommentReply from "./components/Post/CommentReply";
import ProfileWhoFollowing from "./components/Profile/ProfileWhoFollowing";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={auth ? <Navigate to="/" /> : <Register />}
        />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:postId" element={<PostComment />} />
            <Route path="comment/:commentId" element={<CommentReply />} />
          </Route>
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
          </Route>
          <Route path="/profile/:profileId/" element={<ProfileLayout />}>
            <Route index element={<ProfileTimeline />} />
            <Route path="timeline" element={<ProfileTimeline />} />
            <Route path="photos" element={<ProfilePhotos />} />
            <Route path="videos" element={<ProfileVideos />} />
            <Route path="friends" element={<ProfileFriends />} />
            <Route path="groups" element={<ProfileGroups />} />
            <Route path="about" element={<ProfileAbout />} />
            <Route path="notifications" element={<Notifications />} />
            <Route
              path="edit-basics"
              element={auth ? <ProfileEditBasics /> : <Navigate to="/login" />}
            />
            <Route path="interests" element={<ProfileEditInterest />} />
            <Route path="followers" element={<ProfileWhoFollowing />} />
            <Route
              path="edit-account-settings"
              element={<ProfileEditAccountSettings />}
            />
            <Route
              path="change-password"
              element={
                auth ? <ProfileChangePassword /> : <Navigate to="/login" />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
