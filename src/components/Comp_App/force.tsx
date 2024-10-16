import React from "react";
import Spline from "@splinetool/react-spline";

export default function RockBut({ width = 1000, height = 1000 }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        top: -50,
        right: 130,
        position: "absolute",
      }}
    >
      <Spline
        onClick={() =>
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 1000)
        }
        scene="https://prod.spline.design/i7vuPWvPzm-2meso/scene.splinecode"
      />
    </div>
  );
}
