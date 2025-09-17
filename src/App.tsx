import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import LandingRoutes from "./LandingRoutes";
import DashboardRoutes from "./DashboardRoutes";

const queryClient = new QueryClient();

const App = () => {
  const hostname = window.location.hostname;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {hostname === "dashboard.mapinng.com" ? (
            <DashboardRoutes />
          ) : (
            <LandingRoutes />
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
