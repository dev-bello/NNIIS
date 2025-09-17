import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";
import ExhibitionPage from "./pages/Exhibition";
import MasterclassesPage from "./pages/Masterclasses";
import VolunteerPage from "./pages/Volunteer";
import RegistrationSuccessPage from "./pages/RegistrationSuccess";
import LoginPage from "./pages/Login";
import VerifyOtpPage from "./pages/VerifyOtp";
import B2BPage from "./pages/B2B";
import StateDetailPage from "./pages/StateDetail";
import SelectionStatusPage from "./pages/SelectionStatus";

const LandingRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/exhibition" element={<ExhibitionPage />} />
    {/* <Route path="/masterclasses" element={<MasterclassesPage />} /> */}
    <Route path="/b2b" element={<B2BPage />} />
    <Route path="/volunteer" element={<VolunteerPage />} />
    <Route path="/registration-success" element={<RegistrationSuccessPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/verify-otp" element={<VerifyOtpPage />} />
    <Route path="/selection-status" element={<SelectionStatusPage />} />
    <Route path="/state/:slug" element={<StateDetailPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default LandingRoutes;
