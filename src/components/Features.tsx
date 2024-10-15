import React from "react";
import { FeaturesList } from "../devdata/constants";
import { Glowing, Floaty } from "./Comp_Features";
import { Glow } from "../devdata/assets";

// Individual Feature Card Component with hover glow
const Feature = ({ name, subhead, description, image, color }) => {
  return (
    <div className="w-full lg:w-5/5 mx-auto">
      {/* Card Layout with hover effect */}
      <div
        className="flex flex-col lg:flex-row even:flex-row odd:flex-row-reverse items-center py-2 lg:py-4 
        bg-gray-800 rounded-lg shadow-lg hover:shadow-[0_0_30px_10px] hover:shadow-current transition-shadow duration-300 ease-in-out"
        style={{
          borderColor: color,
        }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-3 lg:p-4">
          <img
            src={image}
            alt={name}
            className="w-full h-auto max-h-48 lg:max-h-60 rounded-lg"
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
          <p className="text-md">{description}</p>
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
        className="relative flex m-10"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Floating Sidebar on the left */}
        <div className="px-8">
          <Floaty />
        </div>

        {/* Feature List aligned right */}
        <div className="ml-auto w-3/5 text-slate-50 max-w-screen-lg px-4 py-32 sm:px-6 lg:px-8 space-y-10">
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
