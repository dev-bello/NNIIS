import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";
import ExhibitionPage from "./pages/Exhibition";
import MasterclassesPage from "./pages/Masterclasses";
import VolunteerPage from "./pages/Volunteer";
import RegistrationSuccessPage from "./pages/RegistrationSuccess";
import LoginPage from "./pages/Login";
import VerifyOtpPage from "./pages/VerifyOtp";
import DashboardPage from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import B2BPage from "./pages/B2B";
import StateDetailPage from "./pages/StateDetail";
import SelectionStatusPage from "./pages/SelectionStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          {/* <Route path="/masterclasses" element={<MasterclassesPage />} /> */}
          <Route path="/b2b" element={<B2BPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route
            path="/registration-success"
            element={<RegistrationSuccessPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/selection-status" element={<SelectionStatusPage />} />
          <Route path="/state/:slug" element={<StateDetailPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
