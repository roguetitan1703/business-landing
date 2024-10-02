import React, { useState } from "react";

import Android from "../devdata/assets/Android.png";
import Angular from "../devdata/assets/Angular.png";
import AWS from "../devdata/assets/AWS.png";
import Bootstrap from "../devdata/assets/Bootstrap.png";
import Django from "../devdata/assets/Django.png";
import Express from "../devdata/assets/Express.png";
import FastAPI from "../devdata/assets/FastAPI.png";
import Firebase from "../devdata/assets/Firebase.png";
import Flask from "../devdata/assets/Flask.png";
import Go from "../devdata/assets/Go.png";
import Nextjs from "../devdata/assets/Next.js.png";
import Nodejs from "../devdata/assets/Node.js.png";
import ReactIcon from "../devdata/assets/React.png";
import WordPress from "../devdata/assets/WordPress.png";
import TailwindCSS from "../devdata/assets/TailwindCSS.png";
import Threejs from "../devdata/assets/Three.js.png";

const TechIcons = [
  {
    name: "Android",
    icon: Android,
    colorgrad: "from-white via-green-400 to-green-600",
  },
  { name: "Angular", icon: Angular, colorgrad: "from-red-500 to-red-700" },
  { name: "AWS", icon: AWS, colorgrad: "from-yellow-400 to-orange-500" },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    colorgrad: "from-purple-500 to-indigo-600",
  },
  { name: "Django", icon: Django, colorgrad: "from-green-700 to-green-900" },
  { name: "Express", icon: Express, colorgrad: "from-gray-300 to-gray-500" },
  { name: "FastAPI", icon: FastAPI, colorgrad: "from-teal-400 to-teal-600" },
  { name: "Firebase", icon: Firebase, colorgrad: "from-yellow-500 to-red-500" },
  { name: "Flask", icon: Flask, colorgrad: "from-gray-100 to-gray-300" },
  { name: "Go", icon: Go, colorgrad: "from-blue-400 to-blue-500" },
  { name: "Next.js", icon: Nextjs, colorgrad: "from-gray-900 to-gray-800" },
  { name: "Node.js", icon: Nodejs, colorgrad: "from-green-500 to-green-700" },
  { name: "Three.js", icon: Threejs, colorgrad: "from-gray-900 to-gray-800" },
  { name: "React", icon: ReactIcon, colorgrad: "from-blue-500 to-cyan-500" },
  {
    name: "WordPress",
    icon: WordPress,
    colorgrad: "from-blue-700 to-blue-900",
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSS,
    colorgrad: "from-teal-500 to-blue-500",
  },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (colorgrad) => {
    setHoveredTech(colorgrad);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const RenderTechIcons = TechIcons.map((tech) => (
    <img
      key={tech.name}
      src={tech.icon}
      alt={tech.name}
      className="h-24 my-10 hover:scale-110 transition-all duration-500 ease-in-out"
      onMouseEnter={() => handleMouseEnter(tech.colorgrad)}
      onMouseLeave={handleMouseLeave}
    />
  ));

  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:items-center lg:px-8">
        <div className="text-slate-50 p-4 rounded-lg">
          <p
            className="text-lg uppercase font-extrabold mb-4"
            style={{ color: "#ff0000" }}
          >
            Tech Stack
          </p>
          <h5 className="mb-16 text-5xl">
            Technologies which make sure your tech never falls behind.
          </h5>

          <div>
            <div
              className={`relative -inset-1 rounded-lg transition-all  duration-1000 ${
                hoveredTech ? `bg-gradient-to-r ${hoveredTech}` : "bg-white"
              }`}
            >
              <div className="rounded-xl border border-slate-50 p-12 ring-1 ring-black">
                <div className="grid grid-cols-6">{RenderTechIcons}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
