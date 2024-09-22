import React from "react";

import Android from "../devdata/assets/Android.png";
import Angular from "../devdata/assets/Angular.png";
import AWS from "../devdata/assets/AWS.png";
import Bootstrap from "../devdata/assets/Bootstrap.png";
import Django from "../devdata/assets/Django.png";
import Express from "../devdata/assets/Express.png";
import FastAPI from "../devdata/assets/FastAPI.png";
import Firebase from "../devdata/assets/Firebase.png";
import Flask from "../devdata/assets/Flask.png";
import Go from "../devdata/assets/Go.png";
import Nextjs from "../devdata/assets/Next.js.png";
import Nodejs from "../devdata/assets/Node.js.png";
import ReactIcon from "../devdata/assets/React.png";
import WordPress from "../devdata/assets/WordPress.png";
import TailwindCSS from "../devdata/assets/TailwindCSS.png";
import Threejs from "../devdata/assets/Three.js.png";

const TechIcons = [
  { name: "Android", icon: Android },
  { name: "Angular", icon: Angular },
  { name: "AWS", icon: AWS },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Django", icon: Django },
  { name: "Express", icon: Express },
  { name: "FastAPI", icon: FastAPI },
  { name: "Firebase", icon: Firebase },
  { name: "Flask", icon: Flask },
  { name: "Go", icon: Go },
  { name: "Next.js", icon: Nextjs },
  { name: "Node.js", icon: Nodejs },
  { name: "Three.js", icon: Threejs },
  { name: "React", icon: ReactIcon },
  { name: "WordPress", icon: WordPress },
  { name: "TailwindCSS", icon: TailwindCSS },
];

const RenderTechIcons = TechIcons.map((tech) => (
  <img
    src={tech.icon}
    className="h-24 hover:scale-110 transition-all duration-150 ease-in-out"
  />
));
const TechStack = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:items-center lg:px-8 text-slate-50">
      <p
        className="text-lg uppercase font-extrabold mb-4"
        style={{ color: "#ff0000" }}
      >
        Tech Stack
      </p>
      <div className="grid grid-cols-6 space-y-10">{RenderTechIcons}</div>
    </div>
  );
};

export default TechStack;
