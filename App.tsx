
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CampaignsPage from "./pages/CampaignsPage";
import CampaignDetailPage from "./pages/CampaignDetailPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";
import StartCampaignPage from "./pages/StartCampaignPage";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

// Define App as a React function component to ensure hooks work correctly
const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/:campaignId" element={<CampaignDetailPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/start-campaign" element={<StartCampaignPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
