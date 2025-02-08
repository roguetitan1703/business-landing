import React from "react";
import "./swiper.css"; // Ensure you have the relevant styles in this file
import { projects1, projects2 } from "../devdata/constants"; // Your data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarListen } from "@fortawesome/free-solid-svg-icons";
import DaisyCarousel from "./cdaisyarousel";
const WhatWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <div className="text-slate-50 relative">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 lg:items-center ">
          <div className="text-center">
            {/* Adjust font size for responsiveness */}
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold">
              What We Do 🚀✨
            </h1>
          </div>

          <div className="text-center flex flex-col sm:flex-row justify-center mt-12 ">
            <p className="text-xl">
              We are committed to transforming ideas into reality through
              innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Create Section */}
      <section className="mb-8 text-right w-2/3 justify-self-end">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Create</h2>
        <p>
          We design innovative digital experiences that move people and elevate
          brands. Our approach blends creativity and technology to deliver
          solutions that are both functional and aesthetically compelling.
        </p>
      </section>

      <DaisyCarousel projects={projects1} />

      {/* Build Section */}
      <section className="mb-8 text-right w-2/3 justify-self-end">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Build</h2>
        <p>
          Leveraging cutting-edge technologies, we build scalable, customized
          solutions that adapt to your evolving business needs. Our approach is
          platform-agnostic and future-proof.
        </p>
      </section>

      <DaisyCarousel projects={projects2} />
      {/* Grow Section */}
      <section className="mb-8 w-2/3 text-right justify-self-end">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Grow</h2>
        <p className="mb-4">
          We help businesses grow with tailored strategies that focus on
          long-term success. From digital strategy to SEO and conversion
          optimization, we ensure your business stays ahead in a competitive
          market.
        </p>
        <ul className="list-disc ml-6" style={{ listStylePosition: "inside" }}>
          <li>Digital Strategy</li>
          <li>SEO & CRO</li>
          <li>User Testing & Product Management</li>
        </ul>
      </section>

      {/* Centered "Get in touch" Section */}
      <div className="flex items-center justify-center mt-12">
        <p className="text-sm sm:text-xl">
          Need ears for the project?
          <br />
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2  text-white border border-black rounded shadow hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-transform duration-300"
          >
            Get in touch
            <FontAwesomeIcon icon={faEarListen} className="ml-2" />
          </a>
        </p>
      </div>

      {/* <p className="mt-6">
            At <strong>DelPat</strong>, we are committed to helping your business
            grow by leveraging the power of technology. Our expert team is ready
            to deliver solutions that enhance productivity, streamline operations,
            and drive innovation.
          </p> */}
    </div>
  );
};

export default WhatWeDo;
