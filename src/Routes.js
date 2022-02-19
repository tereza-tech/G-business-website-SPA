import React from "react";
import Pluginfilecover1 from "./pages/Pluginfilecover1";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/pluginfilecover1" element={<Pluginfilecover1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
