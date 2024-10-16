import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Rocketup } from "./components/Comp_App";
import { WhatweDo, Services, Home, Contact } from "./Screens";
function App() {
  return (
    <Router>
      <div className="bg-[#131314] scroll-smooth ">
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
