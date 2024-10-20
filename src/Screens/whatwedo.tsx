import React, { useState, useEffect } from "react";
import "./swiper.css"; // Ensure you have the relevant styles in this file
import { array1, array2 } from "../devdata/constants"; // Your data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarListen } from "@fortawesome/free-solid-svg-icons";
let last = 0;
const WhatWeDo = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const slideCount1 = array1.length;
  const slideCount2 = array2.length;
  // Autoplay durations
  const autoplayInterval = 10000; // Common interval for both arrays
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (isScrollingDown) {
        setCurrentIndex1((prev) => (prev + 1) % slideCount1); // Move right
        setCurrentIndex2((prev) => -(prev + 1) % slideCount1);
      } else {
        setCurrentIndex1((prev) => (prev - 1 + slideCount1) % slideCount1); // Move left
        setCurrentIndex2((prev) => -(prev - 1 + slideCount2) % slideCount2);
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isScrollingDown]);

  // Scroll event handler to adjust autoplay direction
  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    // Set direction based on scroll movement
    const scrollDifference = currentScrollTop - last;

    if (scrollDifference > 0) {
      setIsScrollingDown(true); // Scrolling down
      last = last > window.scrollY ? window.scrollY : last;
    } else if (scrollDifference < 0) {
      setIsScrollingDown(false); // Scrolling up
      last = last < window.scrollY ? window.scrollY : last;
    }

    // Update current index based on scroll
    setCurrentIndex1((prev) => {
      const newIndex = prev + scrollDifference;
      return (newIndex + slideCount1) % (slideCount1 / 2); // Loop back
    });
    setCurrentIndex2((prev) => {
      const newIndex = prev + scrollDifference;
      return -((newIndex + slideCount2) % (slideCount2 / 2)); // Loop back
    });
  };
  const handlestopscroll = () => {
    last = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handlestopscroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handlestopscroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 text-white">
      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">What We Do 🚀✨</h1>
        <p className="text-base sm:text-lg">
          We are committed to transforming ideas into reality through innovative
          solutions.
        </p>
      </section>

      {/* Create Section */}
      <section className="mb-8 text-right w-2/3 justify-self-end">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Create</h2>
        <p>
          We design innovative digital experiences that move people and elevate
          brands. Our approach blends creativity and technology to deliver
          solutions that are both functional and aesthetically compelling.
        </p>
      </section>

      {/* Array1 Carousel (Autoplay Left to Right) */}
      <div className="swiper-container">
        <div
          className="swiper-wrapper"
          style={{
            transform: `translateX(${currentIndex1 * 200}%)`,
            transition: "linear 120s",
          }}
        >
          {array1.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <div className="p-4 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 object-cover w-full h-48 sm:h-64"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Build Section */}
      <section className="mb-8 text-right w-2/3 justify-self-end">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Build</h2>
        <p>
          Leveraging cutting-edge technologies, we build scalable, customized
          solutions that adapt to your evolving business needs. Our approach is
          platform-agnostic and future-proof.
        </p>
      </section>

      {/* Array2 Carousel (Autoplay Right to Left) */}
      <div className="swiper-container">
        <div
          className="swiper-wrapper"
          style={{
            transform: `translateX(${currentIndex2 * 200}%)`,
            transition: "linear 120s",
          }}
        >
          {array2.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <div className="p-4 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 object-cover w-full h-48 sm:h-64"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default WhatWeDo;
