import React, { useState, useEffect } from "react";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { array1, array2 } from "../devdata/constants";

const WhatWeDo = () => {
  const [autoplayDirection1, setAutoplayDirection1] = useState(true);
  const [autoplayDirection2, setAutoplayDirection2] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Trigger to detect scroll and change autoplay directions
  const handleScroll = () => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setAutoplayDirection1(false); // Left to right
      setAutoplayDirection2(true); // Right to left
    } else {
      // Scrolling up
      setAutoplayDirection1(true); // Right to left
      setAutoplayDirection2(false); // Left to right
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      className="mx-auto text-white"
      style={{ marginRight: "auto", marginLeft: "auto" }}
    >
      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">What We Do 🚀✨</h1>
        <p className="text-lg">
          We are committed to transforming ideas into reality through innovative
          solutions.
        </p>
      </section>

      {/* Create Section */}
      <section className="mb-8 text-right">
        <h2 className="text-2xl font-semibold mb-4">Create</h2>
        <p>
          We design innovative digital experiences that move people and elevate
          brands. Our approach blends creativity and technology to deliver
          solutions that are both functional and aesthetically compelling.
        </p>
      </section>

      {/* Array1 Carousel - Full Screen Swiper */}
      <Swiper
        className="swiper-no-swiping w-full"
        noSwiping={true}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        freeMode
        speed={20000}
        autoplay={{
          delay: 0,
          reverseDirection: autoplayDirection1,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {array1.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Build Section */}
      <section className="mb-8 text-right">
        <h2 className="text-2xl font-semibold mb-4">Build</h2>
        <p>
          Leveraging cutting-edge technologies, we build scalable, customized
          solutions that adapt to your evolving business needs. Our approach is
          platform-agnostic and future-proof.
        </p>
      </section>

      {/* Array2 Carousel - Full Screen Swiper */}
      <Swiper
        className="swiper-no-swiping w-full"
        noSwiping={true}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        freeMode
        speed={20000}
        autoplay={{
          delay: 0,
          reverseDirection: autoplayDirection2,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {array2.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grow Section */}
      <section className="mb-8 text-right">
        <h2 className="text-2xl font-semibold mb-4">Grow</h2>
        <p className="mb-4">
          We help businesses grow with tailored strategies that focus on
          long-term success. From digital strategy to SEO and conversion
          optimization, we ensure your business stays ahead in a competitive
          market.
        </p>
        <ul className="list-disc ml-6">
          <li>Digital Strategy</li>
          <li>SEO & CRO</li>
          <li>User Testing & Product Management</li>
        </ul>
      </section>

      {/* Centered "Get in touch" Section */}
      <div className="flex items-center justify-center mt-12">
        <p>
          Need ears for the project?{" "}
          <a href="/contact" className="underline">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
