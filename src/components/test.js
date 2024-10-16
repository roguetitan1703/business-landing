import React from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div style={{ width: 300, height: 250 }}>
      <Spline
        onClick={() => console.log("loggin the clicks")}
        scene="https://prod.spline.design/bhs-62pzmTWUDqwL/scene.splinecode"
      />
    </div>
  );
}
