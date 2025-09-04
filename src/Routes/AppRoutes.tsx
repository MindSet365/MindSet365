import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default AppRoutes;
