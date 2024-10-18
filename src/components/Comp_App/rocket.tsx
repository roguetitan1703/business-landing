import React from "react";
import Spline from "@splinetool/react-spline";

export default function RockBut({ width = 300, height = 350 }) {
  return (
    <div
      className="hidden lg:block cursor-pointer"
      style={{
        width: width,
        height: height,
        position: "fixed",
        bottom: 10,
        right: 10,
      }}
    >
      <Spline
        hidden={window.scrollY > 1000}
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
