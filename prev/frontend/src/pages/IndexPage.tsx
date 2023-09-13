import { Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import WriteApplicationPage from "./seeker/WriteApplicationPage";
import ReplyPage from "./seeker/ReplyPage";
import ApplicationsPage from "./client/ApplicationsPage";
import CreateFreelanceOfferPage from "./client/CreateFreelanceOfferPage";
import CreateJobOfferPage from "./client/CreateJobOfferPage";
import CreateProfilePage from "./profile/CreateProfilePage";
import ProfileDetailPage from "./profile/ProfileDetailPage";
import ProfileSettingPage from "./profile/ProfileSettingPage";
import HomePage from "./main/HomePage";
import AboutPage from "./main/AboutPage";

const IndexPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default IndexPage;
