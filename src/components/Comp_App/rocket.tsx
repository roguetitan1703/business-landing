import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function RockBut({ width = 300, height = 350 }) {
  const [showlabel, setshowlabel] = useState(true);
  const [showrocket, setshowrocket] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 0) {
        setshowrocket(false);
      }
      if (scrollPosition > 500) {
        setshowlabel(false);
      } else {
        setshowlabel(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // a component of 3d object rocket spline
  const RocketScene = (
    <Spline
      hidden={showrocket}
      onClick={() =>
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 2000)
      }
      scene="https://prod.spline.design/bhs-62pzmTWUDqwL/scene.splinecode"
    />
  );

  return (
    <div
      className="hidden lg:block cursor-pointer"
      style={{
        width: width,
        height: height,
        position: "fixed",
        bottom: 0,
        right: 10,
      }}
    >
      {RocketScene}
      <h1
        hidden={showlabel}
        style={{ fontSize: 20, color: "white", bottom: 40, right: -120 }}
        className="relative"
      >
        Go Up?
      </h1>
    </div>
  );
}
