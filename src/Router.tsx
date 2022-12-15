import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FindCarPage from "./pages/FindCarPage";
import "tw-elements";
import { RegisterPage } from "./pages/RegisterPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find_car" element={<FindCarPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
