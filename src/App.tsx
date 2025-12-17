import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import OnboardingLevel from "./pages/onboarding/OnboardingLevel";
import OnboardingObjective from "./pages/onboarding/OnboardingObjective";
import OnboardingAvailability from "./pages/onboarding/OnboardingAvailability";
import Home from "./pages/Home";
import CreateGame from "./pages/CreateGame";
import GameDetail from "./pages/GameDetail";
import GameChat from "./pages/GameChat";
import Confirmation from "./pages/Confirmation";
import PostGameRating from "./pages/PostGameRating";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding/level" element={<OnboardingLevel />} />
          <Route path="/onboarding/objective" element={<OnboardingObjective />} />
          <Route path="/onboarding/availability" element={<OnboardingAvailability />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/chat/:id" element={<GameChat />} />
          <Route path="/chat" element={<GameChat />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/rating" element={<PostGameRating />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
