import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Rocketup, Loaditup } from "./components/Comp_App";
import { WhatweDo, Services, Home, Contact } from "./Screens";

function Navs() {
  return (
    <Router>
      <Loaditup />

      <div className={"bg-[#131314] scroll-smooth"}>
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

export default Navs;
