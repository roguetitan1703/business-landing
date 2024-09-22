import React from "react";
import ThunderClouds from "../3dComponents/ThunderClouds";

const HeroBackground = () => {
  return (
    <div className="z-1 absolute inset-0">
      <ThunderClouds />
    </div>
  );
};

export default HeroBackground;
