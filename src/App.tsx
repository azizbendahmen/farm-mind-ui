import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardPage from "@/pages/DashboardPage";
import TelemetryPage from "@/pages/TelemetryPage";
import ChartsPage from "@/pages/ChartsPage";
import AutomationPage from "@/pages/AutomationPage";
import AIAuditPage from "@/pages/AIAuditPage";
import AIVisionPage from "@/pages/AIVisionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/telemetry" element={<TelemetryPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/ai-audit" element={<AIAuditPage />} />
            <Route path="/ai-vision" element={<AIVisionPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
