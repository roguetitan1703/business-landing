import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroBackground from "./HeroBackground.tsx";

const Hero = () => {
  return (
    <div className="text-slate-50">
      {/* <HeroBackground /> */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="text-9xl font-extrabold">
            The only{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text">
              Tech-Team
            </span>{" "}
            you'll ever need.
          </h1>
        </div>
        <div className="max-w-2xl flex flex-row justify-between items-center mt-12">
          <p className="text-xl">to build your next idea into reality</p>
          <div className="rounded-full flex flex-row items-center px-4 py-2 bg-gradient-to-l hover:bg-gradient-to-r from-cyan-400 to-purple-500 hover:text-transparent hover:bg-clip-text hover:ring-white hover:ring-1 hover:scale-105 transition-transform ease-in-out duration-150">
            <a href="#">Get in touch</a>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-center sm:justify-start"></div>
      </div>
    </div>
  );
};

export default Hero;
