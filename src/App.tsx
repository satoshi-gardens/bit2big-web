import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cybersecurity from "./pages/Cybersecurity";
import Blockchain from "./pages/Blockchain";
import AITraining from "./pages/AITraining";
import ITConsulting from "./pages/ITConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;