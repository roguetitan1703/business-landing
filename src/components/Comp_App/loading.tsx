import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Loadingitup({
  width = "100%",
  height = "100%",
  bigshow,
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        position: "fixed",
      }}
    >
      <Spline
        hidden={bigshow}
        scene="https://prod.spline.design/xMqapW1bShcHpcw5/scene.splinecode"
      />
    </div>
  );
}
