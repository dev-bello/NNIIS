import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";
import ExhibitionPage from "./pages/Exhibition";
import EventsPage from "./pages/Events";
import VolunteerPage from "./pages/Volunteer";
import RegistrationSuccessPage from "./pages/RegistrationSuccess";
import LoginPage from "./pages/Login";
import VerifyOtpPage from "./pages/VerifyOtp";
import DashboardPage from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
import B2BPage from "./pages/B2B";
import StateDetailPage from "./pages/StateDetail";
import SelectionStatusPage from "./pages/SelectionStatus";
import VolunteerClose from "./pages/VolunteerClose";

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
          <Route path="/events" element={<EventsPage />} />
          <Route path="/b2b" element={<B2BPage />} />
          {/* <Route path="/volunteer" element={<VolunteerPage />} /> */}
          <Route path="/volunteer" element={<VolunteerClose />} />
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
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
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
