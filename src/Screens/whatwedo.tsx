import React from "react";
import { projects1, projects2 } from "../devdata/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarListen } from "@fortawesome/free-solid-svg-icons";
import DaisyCarousel from "./cdaisyarousel";

const WhatWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      {/* Hero Section */}
      <div className="relative text-center py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-black rounded-2xl shadow-xl">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight">
          What We Do <span className="text-yellow-400">?</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          We transform ideas into reality with innovative digital solutions.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-16 space-y-24">
        {/* Create Section */}
        <section className="flex flex-col items-end w-full">
          <div className="w-2/3 text-right">
            <h2 className="text-3xl font-semibold text-purple-400">Create</h2>
            <p className="text-gray-300">
              We design innovative digital experiences that move people and
              elevate brands, blending creativity and technology.
            </p>
          </div>
        </section>
        <DaisyCarousel projects={projects1} />

        {/* Build Section */}
        <section className="flex flex-col items-end w-full">
          <div className="w-2/3 text-right">
            <h2 className="text-3xl font-semibold text-blue-400">Build</h2>
            <p className="text-gray-300">
              Leveraging cutting-edge technologies, we build scalable solutions
              tailored to your business needs.
            </p>
          </div>
        </section>
        <DaisyCarousel projects={projects2} />

        {/* Grow Section */}
        <section className="flex flex-col items-end w-full">
          <div className="w-2/3 text-right">
            <h2 className="text-3xl font-semibold text-green-400">Grow</h2>
            <p className="text-gray-300">
              We help businesses grow with tailored strategies for long-term
              success.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>🌍 Digital Strategy</li>
              <li>📈 SEO & CRO</li>
              <li>🔍 User Testing & Product Management</li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col items-center">
        <p className="text-lg text-gray-300 text-center">
          Need ears for the project?
        </p>
        <a
          href="/contact"
          className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          Get in Touch <FontAwesomeIcon icon={faEarListen} />
        </a>
      </div>
    </div>
  );
};

export default WhatWeDo;
