import React from "react";
import Spline from "@splinetool/react-spline";

export default function RockBut({ width = 1000, height = 1000 }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        top: -550,
        right: 80,
        position: "absolute",
      }}
    >
      <Spline scene="https://prod.spline.design/i7vuPWvPzm-2meso/scene.splinecode" />
      {/* scene="https://prod.spline.design/90S-8iiU7GZh0VGM/scene.splinecode" */}
    </div>
  );
}
