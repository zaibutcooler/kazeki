import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ApplicationsPage from "./pages/client/ApplicationsPage";
import CreateFreelanceOfferPage from "./pages/client/CreateFreelanceOfferPage";
import CreateJobOfferPage from "./pages/client/CreateJobOfferPage";
import CreateProfilePage from "./pages/profile/CreateProfilePage";
import ProfileDetailPage from "./pages/profile/ProfileDetailPage";
import ProfileSettingPage from "./pages/profile/ProfileSettingPage";
import ReplyPage from "./pages/seeker/ReplyPage";
import WriteApplicationPage from "./pages/seeker/WriteApplicationPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/create-job-offer" element={<CreateJobOfferPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/profile" element={<ProfileDetailPage />} />
        <Route path="/profile/settings" element={<ProfileSettingPage />} />
        <Route path="/reply" element={<ReplyPage />} />
        <Route path="/write-application" element={<WriteApplicationPage />} />
      </Routes>
    </>
  );
}

export default App;
