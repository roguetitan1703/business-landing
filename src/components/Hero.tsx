import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="text-slate-50 relative">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8 z-0">
        <div className="max-w-3xl text-center sm:text-left z-0">
          <h1 className="text-9xl font-extrabold">
            The only{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text bg-300% animate-gradient">
              Tech-Team
            </span>{" "}
            you'll ever need.
          </h1>
        </div>

        <div className="max-w-3xl flex flex-row justify-between items-start mt-12 z-0">
          <p className="text-xl">
            to Design, Build, Plan and Execute your next idea into Reality
          </p>
          <a href="#" className="flex items-center group z-10">
            <div className="relative rounded-full flex flex-row items-center px-4 py-2 bg-gradient-to-l hover:bg-none from-cyan-400 to-purple-500 hover:ring-white hover:ring-1 hover:scale-105 transition-transform ease-in-out duration-150">
              <span className="mr-1 text-transparent text-nowrap bg-clip-text bg-white group-hover:bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:text-transparent">
                Get in touch
              </span>
              <span className="inline-block transform transition-transform duration-300 ease-in-out -translate-x-2 group-hover:translate-x-2">
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-4 text-center sm:justify-start z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
