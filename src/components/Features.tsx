import React from "react";
import img from "../devdata/assets/image.png";

const FeaturesList = [
  {
    name: "Strategy",
    subhead: "Data-Driven",
    description:
      "Strategic planning guided by data analysis, ensuring targeted solutions.",
    image: img,
    color: "#3498db", // Blue
  },
  {
    name: "Design",
    subhead: "User-Centric",
    description: "Intuitive interfaces crafted with user needs in mind.",
    image: img,
    color: "#f39c12", // Orange
  },
  {
    name: "Development",
    subhead: "Over the top",
    description:
      "Scalable solutions built using latest technologies, prioritizing security and robustness.",
    image: img,
    color: "#2ecc71", // Green
  },
  {
    name: "Support",
    subhead: "Dedicated Assistance",
    description:
      "Comprehensive support, ensuring seamless operation and addressing challenges promptly.",
    image: img,
    color: "#e74c3c", // Red
  },
  {
    name: "Scalability and Robustness",
    subhead: "Future-Proof Solutions",
    description:
      "Scalable infrastructure and robust security, future-proofing your digital presence.",
    image: img,
    color: "#9b59b6", // Purple
  },
];

const Feature = ({ name, subhead, description, image, color }) => {
  return (
    <div className="flex even:flex-row odd:flex-row-reverse odd:text-left even:text-left items-center py-20">
      <div className="w-1/2 p-12">
        <img src={image} alt={name} />
      </div>
      <div className="w-1/2 p-12">
        <p
          className="text-lg uppercase font-extrabold mb-2"
          style={{ color: color }}
        >
          {subhead}
        </p>
        <GlowingText text={name} glowColor={color} />
        {/* <h3 className="text-5xl font-bold mb-2">{name}</h3> */}
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

const BuildFeatures = FeaturesList.map((feature) => (
  <Feature
    name={feature.name}
    subhead={feature.subhead}
    description={feature.description}
    image={feature.image}
    color={feature.color}
  />
));

const GlowingText = ({ text, glowColor }) => {
  return (
    <h3
      className={`text-5xl font-bold mb-3`}
      style={{
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
      }}
    >
      {text}
    </h3>
  );
};

const Features = () => {
  return (
    <div className="text-slate-50 relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:items-center lg:px-8">
      {BuildFeatures}
    </div>
  );
};

export default Features;
