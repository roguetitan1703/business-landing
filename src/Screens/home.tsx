import React from "react";
import { Features, Hero, TechStack } from "../components";
function Home() {
  return (
    <div className="bg-[#131314] scroll-smooth z-1">
      <Hero />
      <Features />
      <TechStack />
      {/* <GetInTouch /> */}
    </div>
  );
}

export default Home;
