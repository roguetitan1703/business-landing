import React from "react";
import { FeaturesList } from "../devdata/constants";
import { Glowing, Floaty } from "./Comp_Features";

// Individual Feature Component
const Feature = ({ name, subhead, description, image, color }) => {
  return (
    <div className="flex flex-col lg:flex-row even:flex-row odd:flex-row-reverse items-center py-10 lg:py-20">
      {/* Adjust image and text layout based on screen size */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
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
  );
};

// Features Component
const Features = () => {
  return (
    <div className="relative">
      {/* Floating Sidebar on the left */}
      <div className="px-16">
        <Floaty />
      </div>

      {/* Feature List aligned right */}
      <div className="ml-auto w-3/5 text-slate-50 max-w-screen-lg px-4 py-32 sm:px-6 lg:px-8">
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
  );
};

export default Features;
