import React, { useState } from "react";
import { TechIcons } from "../devdata/constants";

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
