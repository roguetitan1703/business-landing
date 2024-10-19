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
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#23c461_20deg,transparent_120deg)]",
    color: "bg-[#23c461]/10",
  },
  {
    name: "Angular",
    icon: Angular,
    colorgrad: "bg-gradient-to-r from-red-700 from-20% to-red-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#b62022_20deg,transparent_120deg)]",
    color: "bg-[#b62022]/10",
  },
  {
    name: "AWS",
    icon: AWS,
    colorgrad: "bg-gradient-to-r from-yellow-600 from-40% to-yellow-10",
    shadowColor: "bg-[#e1e1eb]",
    animatedBorderColor:
      "bg-[conic-gradient(#c98b06_20deg,transparent_120deg)]",
    color: "bg-[#c98b06]/10",
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    colorgrad: "bg-gradient-to-l from-indigo-600 from-40%  to-purple-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#4e48e6_20deg,transparent_120deg)]",
    color: "bg-[#4e48e6]/10",
  },
  {
    name: "Django",
    icon: Django,
    colorgrad: "bg-gradient-to-l from-green-700 from-20% to-green-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#15803d_20deg,transparent_120deg)]",
    color: "bg-[#15803d]/10",
  },
  {
    name: "Express",
    icon: Express,
    colorgrad: "bg-gradient-to-l from-gray-400  to-gray-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#99a4b2_20deg,transparent_120deg)]",
    color: "bg-[#99a4b2]/10",
  },
  {
    name: "FastAPI",
    icon: FastAPI,
    colorgrad: "bg-gradient-to-r from-teal-600 to-teal-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#0e948a_20deg,transparent_120deg)]",
    color: "bg-[#0e948a]/10",
  },
  {
    name: "Firebase",
    icon: Firebase,
    colorgrad: "bg-gradient-to-r from-orange-500 from-20% to-red-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#f47516_20deg,transparent_120deg)]",
    color: "bg-[#f47516]/10",
  },
  {
    name: "Flask",
    icon: Flask,
    colorgrad: "bg-gradient-to-r from-gray-300 from-40% to-gray-10",
    shadowColor: "bg-[#e1e1eb",
    animatedBorderColor:
      "bg-[conic-gradient(#cfd4db_20deg,transparent_120deg)]",
    color: "bg-[#cfd4db]/10",
  },
  {
    name: "Go",
    icon: Go,
    colorgrad: "bg-gradient-to-l from-blue-400 from-40%  to-blue-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#60a5fa_20deg,transparent_120deg)]",
    color: "bg-[#60a5fa]/10",
  },
  {
    name: "Next.js",
    icon: Nextjs,
    colorgrad: "bg-gradient-to-l from-gray-100 from-20% to-gray-10",
    shadowColor: "bg-[#e1e1eb]",
    animatedBorderColor:
      "bg-[conic-gradient(#f1f3f6_20deg,transparent_120deg)]",
    color: "bg-[#f1f3f6]/10",
  },
  {
    name: "Node.js",
    icon: Nodejs,
    colorgrad: "bg-gradient-to-l from-lime-400 to-green-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#a3e635_20deg,transparent_120deg)]",
    color: "bg-[#a3e635]/10",
  },
  {
    name: "Three.js",
    icon: Threejs,
    colorgrad: "bg-gradient-to-r from-gray-100  to-gray-10",
    shadowColor: "bg-[#e1e1eb]",
    animatedBorderColor:
      "bg-[conic-gradient(#f1f3f6_20deg,transparent_120deg)]",
    color: "bg-[#f1f3f6]/10",
  },
  {
    name: "React",
    icon: ReactIcon,
    colorgrad: "bg-gradient-to-r from-cyan-500 from-20% to-cyan-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#07b6d5_20deg,transparent_120deg)]",
    color: "bg-[#07b6d5]/10",
  },
  {
    name: "WordPress",
    icon: WordPress,
    colorgrad: "bg-gradient-to-r from-blue-900 from-40% to-blue-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#1f3c8c_20deg,transparent_120deg)]",
    color: "bg-[#1f3c8c]/10",
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSS,
    colorgrad: "bg-gradient-to-l from-teal-500 from-40% to-blue-10",
    shadowColor: "bg-[#191919]",
    animatedBorderColor:
      "bg-[conic-gradient(#15b8a7_20deg,transparent_120deg)]",
    color: "bg-[#15b8a7]/10",
  },
];

interface TechStackProps {
  name: string;
  icon: string;
  colorgrad: string;
  shadowColor: string;
  animatedBorderColor: string;
  color: string;
}

const TechStack = () => {
  const [hoveredGradient, setHoveredGradient] = useState("");
  const [hoveredShadow, setHoveredShadow] = useState("");
  const [hoveredColor, setHoveredColor] = useState("");
  const [hoveredAnimatedBorder, setHoveredAnimatedBorder] = useState("");

  const handleMouseEnter = (tech: TechStackProps) => {
    setHoveredGradient(tech.colorgrad);
    setHoveredShadow(tech.shadowColor);
    setHoveredColor(tech.color);
    setHoveredAnimatedBorder(tech.animatedBorderColor);
  };

  const handleMouseLeave = () => {
    setHoveredGradient("");
    setHoveredShadow("");
    setHoveredColor("");
    setHoveredAnimatedBorder("");
  };

  const renderTechIconReturner = (tech: TechStackProps) => {
    const shadowStyle = `hover:shadow-${tech.color.slice(3, -3)}`;
    let hoverBgStyle = `hover:bg-[#191919]`;
    if (
      tech.name === "Next.js" ||
      tech.name === "Flask" ||
      tech.name === "Three.js" ||
      tech.name === "AWS"
    ) {
      hoverBgStyle = `hover:bg-slate-50`;
    }
    return (
      <img
        key={tech.name}
        src={tech.icon}
        alt={tech.name}
        className={`rounded-xl p-2 ${hoverBgStyle} hover:border-[0.1px] border-slate-50/10 hover:shadow-xl ${shadowStyle}/50 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 m-6 sm:m-8 lg:m-10 hover:scale-110 transition-all duration-500 ease-in-out`}
        onMouseEnter={() => handleMouseEnter(tech)}
        onMouseLeave={handleMouseLeave}
      />
    );
  };
  const RenderTechIcons = TechIcons.map((tech) => renderTechIconReturner(tech));

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-slate-50 p-4 rounded-lg">
        <p
          className="text-lg uppercase font-extrabold mb-4"
          style={{ color: "#ff0000" }}
        >
          Tech Stack
        </p>
        <h5 className="mb-16 text-4xl sm:text-5xl">
          Technologies which make sure your tech never falls behind.
        </h5>
      </div>
      <div className="mx-auto flex w-full items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl p-[5px]">
          <div
            className={`animate-rotate absolute inset-0 h-full w-full rounded-full ${
              hoveredAnimatedBorder
                ? hoveredAnimatedBorder
                : "bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]"
            }`}
          ></div>
          <div
            className={`relative z-20 w-full rounded-[0.60rem] bg-[#131314] opacity-100`}
          >
            <div
              className={`rounded-xl ${
                hoveredColor ? hoveredColor : "bg-[#222224]"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {RenderTechIcons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
