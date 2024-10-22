import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Loadingitup({ width = "100%", height = "100%" }) {
  var splineRef = null; // Reference to Spline canvas\
  const [cameraPosition, setCameraPosition] = useState(null);
  const [bigshow, setbigshow] = useState(false);
  function onSplineLoad(spline) {
    console.log("Loading");

    splineRef = spline;
    // console.log(spline);
  }
  useEffect(() => {
    // Function to check the camera position at intervals
    const checkCameraPosition = () => {
      if (splineRef) {
        // console.log(splineRef._scene);

        const camera = splineRef._camera;
        const { x, y, z } = camera.position;

        setCameraPosition({ x, y, z });

        // Example condition: if the camera passes the cube (e.g., x > 5)
        if (z < 35) {
          // Adjust this condition to your 3D scene's coordinate system
          // Redirect to another route/page
          console.log("Hello");
          setbigshow(true);
        }
      }
    };

    const intervalId = setInterval(checkCameraPosition, 1000); // Check camera position every 100ms

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  return (
    <div
      style={{
        width: width,
        height: height,
        position: "fixed",
      }}
    >
      <Spline
        onLoad={onSplineLoad}
        hidden={bigshow}
        scene="https://prod.spline.design/xMqapW1bShcHpcw5/scene.splinecode"
      />
    </div>
  );
}
