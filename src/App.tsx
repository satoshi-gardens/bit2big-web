
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ITConsulting from "./pages/ITConsulting";
import Cybersecurity from "./pages/Cybersecurity";
import Blockchain from "./pages/Blockchain";
import AITraining from "./pages/AITraining";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import KnowledgeBase from "./pages/KnowledgeBase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
