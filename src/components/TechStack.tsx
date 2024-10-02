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
  { name: "Angular", icon: Angular, colorgrad: "red-white-red" },
  { name: "AWS", icon: AWS, colorgrad: "orange-black-orange" },
  { name: "Bootstrap", icon: Bootstrap, colorgrad: "purple-white-purple" },
  { name: "Django", icon: Django, colorgrad: "white-darkgreen-white" },
  { name: "Express", icon: Express, colorgrad: "white-balck-white" },
  { name: "FastAPI", icon: FastAPI, colorgrad: "white-mattegreen-white" },
  { name: "Firebase", icon: Firebase, colorgrad: "orange-red-yellow" },
  { name: "Flask", icon: Flask, colorgrad: "white-black-white" },
  { name: "Go", icon: Go, colorgrad: "skin-lightblue-skin" },
  { name: "Next.js", icon: Nextjs, colorgrad: "darkblack-white-darkblack" },
  { name: "Node.js", icon: Nodejs, colorgrad: "green-green-green" },
  { name: "Three.js", icon: Threejs, colorgrad: "darkblack-white-darkblack" },
  { name: "React", icon: ReactIcon, colorgrad: "lightblue" },
  { name: "WordPress", icon: WordPress, colorgrad: "dampblue-lightblack-blue" },
  { name: "TailwindCSS", icon: TailwindCSS, colorgrad: "darkblue" },
];

const RenderTechIcons = TechIcons.map((tech) => (
  <img
    src={tech.icon}
    className="h-24 my-10 hover:scale-110 transition-all duration-150 ease-in-out"
  />
));
const TechStack = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:items-center lg:px-8">
        <div className="text-slate-50 p-4 rounded-lg">
          <p
            className="text-lg uppercase font-extrabold mb-4"
            style={{ color: "#ff0000" }}
          >
            Tech Stack
          </p>
          <h5 className="mb-16 text-5xl">
            Technologies which make sure your tech never falls behind.
          </h5>

          <div>
            <div className="relative -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg ">
              <div className="rounded-xl border border-slate-50 p-12  ring-1 ring-black">
                <div className="grid grid-cols-6">{RenderTechIcons}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
