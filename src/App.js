import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { WhatweDo, Services, Home } from "./Screens";
function App() {
  return (
    <Router>
      <div className="bg-[#131314] scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatweDo />} />
          <Route path="/our-services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
