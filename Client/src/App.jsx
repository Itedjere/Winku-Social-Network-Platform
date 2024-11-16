import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileTimeline from "./pages/ProfileTimeline";
import Register from "./pages/Register";
import ProfileLayout from "./components/Profile/ProfileLayout";
import MainLayout from "./components/MainLayout";
import ProfilePhotos from "./pages/ProfilePhotos";
import ProfileVideos from "./pages/ProfileVideos";
import ProfileFriends from "./pages/ProfileFriends";
import ProfileGroups from "./pages/ProfileGroups";
import ProfileAbout from "./pages/ProfileAbout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<ProfileTimeline />} />
            <Route path="timeline" element={<ProfileTimeline />} />
            <Route path="photos" element={<ProfilePhotos />} />
            <Route path="videos" element={<ProfileVideos />} />
            <Route path="friends" element={<ProfileFriends />} />
            <Route path="groups" element={<ProfileGroups />} />
            <Route path="about" element={<ProfileAbout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
