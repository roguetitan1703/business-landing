import React, { useState } from "react";

import {
  Android,
  Angular,
  AWS,
  Bootstrap,
  Django,
  Express,
  FastAPI,
  Firebase,
  Flask,
  Go,
  Nodejs,
  Nextjs,
  ReactIcon,
  WordPress,
  TailwindCSS,
  Threejs,
} from "../devdata/assets";
const TechIcons = [
  {
    name: "Android",
    icon: Android,
    colorgrad: "bg-gradient-to-r from-green-500 to-green-10",
  },
  {
    name: "Angular",
    icon: Angular,
    colorgrad: "bg-gradient-to-r from-red-700 from-20% to-red-10",
  },
  {
    name: "AWS",
    icon: AWS,
    colorgrad: "bg-gradient-to-r from-yellow-600 from-40% to-yellow-10",
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    colorgrad: "bg-gradient-to-l from-indigo-600 from-40%  to-purple-10",
  },
  {
    name: "Django",
    icon: Django,
    colorgrad: "bg-gradient-to-l from-green-700 from-20% to-green-10",
  },
  {
    name: "Express",
    icon: Express,
    colorgrad: "bg-gradient-to-l from-gray-400  to-gray-10",
  },
  {
    name: "FastAPI",
    icon: FastAPI,
    colorgrad: "bg-gradient-to-r from-teal-600 to-teal-10",
  },
  {
    name: "Firebase",
    icon: Firebase,
    colorgrad: "bg-gradient-to-r from-orange-500 from-20% to-red-10",
  },
  {
    name: "Flask",
    icon: Flask,
    colorgrad: "bg-gradient-to-r from-gray-300 from-40% to-gray-10",
  },
  {
    name: "Go",
    icon: Go,
    colorgrad: "bg-gradient-to-l from-blue-400 from-40%  to-blue-10",
  },
  {
    name: "Next.js",
    icon: Nextjs,
    colorgrad: "bg-gradient-to-l from-gray-100 from-20% to-gray-10",
  },
  {
    name: "Node.js",
    icon: Nodejs,
    colorgrad: "bg-gradient-to-l from-lime-400 to-green-10",
  },
  {
    name: "Three.js",
    icon: Threejs,
    colorgrad: "bg-gradient-to-r from-gray-100  to-gray-10",
  },
  {
    name: "React",
    icon: ReactIcon,
    colorgrad: "bg-gradient-to-r from-cyan-500 from-20% to-cyan-10",
  },
  {
    name: "WordPress",
    icon: WordPress,
    colorgrad: "bg-gradient-to-r from-blue-900 from-40% to-blue-10",
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSS,
    colorgrad: "bg-gradient-to-l from-teal-500 from-40% to-blue-10",
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
                hoveredTech ? ` ${hoveredTech}` : "bg-white"
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
