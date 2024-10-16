import React from "react";
import Spline from "@splinetool/react-spline";

export default function RockBut({ width = 300, height = 250 }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        position: "fixed",
        bottom: 10,
        right: 10,
      }}
    >
      <Spline
        onClick={() =>
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 1000)
        }
        scene="https://prod.spline.design/bhs-62pzmTWUDqwL/scene.splinecode"
      />
    </div>
  );
}
