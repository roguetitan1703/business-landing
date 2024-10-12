import React from "react";

const Footer = () => {
  const scrollTogit = () => {
    const footElement = document.getElementById("git");
    if (footElement) {
      footElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer id="foot" className="bg-slate-200 text-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Section: Company Info */}
          <div className="flex flex-col space-y-2">
            <p className="mb-3 font-extrabold text-3xl text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text bg-300% animate-gradient">
              Delpat
            </p>
            <div className="flex flex-col">
              <p className="font-bold mb-1">Contact Us</p>
              <a href="tel:+919685890401" className="">
                (+91) 9685890401
              </a>
              <a href="mailto:sales@delpat.com" className="text-sm">
                delpatllp@gmail.com
              </a>
            </div>
            <div>
              <p className="mt-5 text-sm">The Office</p>
              <p> Lorem Ispium 303 Floor 4</p>
              <p className="text-sm">411038 Kothrud</p>
              <p className="text-sm">Pune, IN</p>
            </div>
          </div>

          {/* Center Section: Quick Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <a href="/" className="hover:text-black">
              Homepage
            </a>
            <a href="/what-we-do" className="hover:text-black ">
              What We Do
            </a>
            <a href="/our-services" className="hover:text-black ">
              Our Services
            </a>
            <button
              onClick={scrollTogit}
              className="rounded-md flex flex-row items-center px-2 py-1 ring-black ring-1 focus:ring-black transition-all ease-in-out duration-150 hover:shadow-xl hover:bg-black hover:text-slate-50"
            >
              <p>Get in touch</p>
            </button>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://www.linkedin.com/company/delpat"
              className="hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://www.medium.com/delpat"
              className="hover:text-black"
            >
              Medium
            </a>
            <a
              href="https://www.facebook.com/delpat"
              className="hover:text-black"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/delpat"
              className="hover:text-black"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/delpat"
              className="hover:text-black"
            >
              X
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright Section */}
        <div className="py-2 text-center">
          <p className="text-sm text-gray-900">
            Copyright © 2024 Delpat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
