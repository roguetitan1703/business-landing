import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Rocketup, Loaditup } from "./components/Comp_App";
import { WhatweDo, Services, Home, Contact } from "./Screens";
function App() {
  const [bgshow, setbgshow] = useState(false);
  const ti = 10000;
  useEffect(() => {
    setTimeout(() => {
      setbgshow(true);
    }, ti);
  }, []);

  return (
    <Router>
      <Loaditup bigshow={bgshow} />

      <div className={`bg-[#131314] scroll-smooth ${!bgshow ? "hidden" : ""}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatweDo />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Rocketup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
