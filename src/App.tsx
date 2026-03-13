import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navrh1 from "./pages/Navrh1";
import Dotaznik from "./pages/Dotaznik";
import Dakujeme from "./pages/Dakujeme";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Navrh1 />} />
        <Route path="/dotaznik" element={<Dotaznik />} />
        <Route path="/dakujeme" element={<Dakujeme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
