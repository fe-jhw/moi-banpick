import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { BanpickPlayerPage } from "./pages/banpick-player";
import { HomePage } from "./pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/game" element={<BanpickPlayerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
