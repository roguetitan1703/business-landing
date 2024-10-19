import React, { useState } from "react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollTrigger from "react-scroll-trigger";

// Example data for Array1 and Array2
const array1 = [
  {
    title: "Project 1",
    description: "Innovative web design.",
    image: "https://via.placeholder.com/300", // example image
  },
  {
    title: "Project 2",
    description: "Cutting-edge AI system.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3",
    description: "Mobile app development.",
    image: "https://via.placeholder.com/300",
  },
];

const array2 = [
  {
    title: "Service 1",
    description: "Expert consultancy services.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Service 2",
    description: "Tailored software solutions.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Service 3",
    description: "Cloud-based systems.",
    image: "https://via.placeholder.com/300",
  },
];

const WhatWeDo = () => {
  const [autoplayDirection1, setAutoplayDirection1] = useState(true);
  const [autoplayDirection2, setAutoplayDirection2] = useState(true);

  // Trigger when scroll enters array1 section
  const onEnterArray1 = () => setAutoplayDirection1(false);
  const onExitArray1 = () => setAutoplayDirection1(true);

  // Trigger when scroll enters array2 section
  const onEnterArray2 = () => setAutoplayDirection2(false);
  const onExitArray2 = () => setAutoplayDirection2(true);

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">What We Do</h1>

      {/* Create Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create</h2>
        <p>
          We design innovative digital experiences that move people and elevate
          brands. Our approach blends creativity and technology to deliver
          solutions that are both functional and aesthetically compelling.
        </p>
      </section>

      {/* Array1 Carousel */}
      <ScrollTrigger onEnter={onEnterArray1} onExit={onExitArray1}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            reverseDirection: autoplayDirection1,
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {array1.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-800 rounded-lg">
                <img src={item.image} alt={item.title} className="mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollTrigger>

      {/* Build Section */}
      <section className="mb-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Build</h2>
        <p>
          Leveraging cutting-edge technologies, we build scalable, customized
          solutions that adapt to your evolving business needs. Our approach is
          platform-agnostic and future-proof.
        </p>
      </section>

      {/* Array2 Carousel */}
      <ScrollTrigger onEnter={onEnterArray2} onExit={onExitArray2}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            reverseDirection: autoplayDirection2,
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {array2.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-800 rounded-lg">
                <img src={item.image} alt={item.title} className="mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollTrigger>
      <section className="mb-8">
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
      <div className="mt-6">
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
