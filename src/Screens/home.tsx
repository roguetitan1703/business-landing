import React from "react";
import { Features, Hero, GetInTouch, TechStack } from "../components";

function Home() {
  return (
    <div className="bg-[#131314] scroll-smooth">
      <Hero />
      <Features />
      <TechStack />
      <GetInTouch />
    </div>
  );
}

export default Home;
