import React from "react";
import {
  Nav,
  Hero,
  Features,
  Testimonials,
  Pricing,
  Blog,
  Contact,
} from "./Components/export2.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-color-primary min-h-screen text-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
