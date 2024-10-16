import React from "react";
import { FeaturesList } from "../devdata/constants";
import { Glowing, Floaty } from "./Comp_Features";
import { Glow } from "../devdata/assets";

// Individual Feature Card Component with hover glow
const Feature = ({ name, subhead, description, image, color }) => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row odd:justify-start even:justify-end group">
      <div
        className="w-full lg:w-2/3 flex flex-col lg:flex-row group-even:flex-row group-odd:flex-row-reverse items-center justify-between py-2 lg:py-4 
        bg-[#131314] rounded-lg shadow-lg hover:shadow-[0_0_30px_10px] hover:shadow-current transition-shadow duration-150 ease-in-out"
        style={{
          borderColor: color,
        }}
      >
        {/* Image Section */}
        <div className="p-3 lg:p-4 w-full lg:w-1/2">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full max-h-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-3 lg:p-4">
          <p
            className="text-lg uppercase font-extrabold mb-2"
            style={{ color: color }}
          >
            {subhead}
          </p>
          <Glowing text={name} glowColor={color} />
          <p className="text-sm sm:text-md lg:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  return (
    <div className="relative bg-black">
      {/* Background Image */}
      <img
        src={Glow}
        alt="background"
        className="absolute inset-0 w-full object-cover opacity-20" // Ensure the background image covers the whole area
      />
      <div
        className="relative flex flex-col lg:flex-row m-10 space-y-10 lg:space-y-0"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Floating Sidebar on the left (only visible on large screens) */}
        <div className="px-8 hidden lg:block">
          <Floaty />
        </div>

        {/* Feature List aligned right */}
        <div className="ml-auto w-full lg:w-5/6 text-slate-50 px-4 py-16 sm:px-6 lg:px-8 space-y-10">
          {FeaturesList.map((feature) => (
            <Feature
              key={feature.name}
              name={feature.name}
              subhead={feature.subhead}
              description={feature.description}
              image={feature.image}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
