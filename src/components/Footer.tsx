import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:items-center lg:px-8">
        <div className="container mx-auto flex justify-between">
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
                info@delpat.in
              </a>
            </div>
            <div className="">
              <p className="mt-5 text-sm">The Office</p>
              <p> Lorem Ispium 303 Floor 4</p>
              <p className="text-sm">411038 Kothrud</p>
              <p className="text-sm">Pune, IN</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="/" className="">
              Homepage
            </a>
            <a href="/" className="">
              What We Do
            </a>
            <a href="/" className="">
              Our Services
            </a>
            <a href="/" className="">
              Contact
            </a>
            <div className="rounded-md flex flex-row items-center px-2 py-1 ring-black ring-1 focus:ring-black transition-all ease-in-out duration-150 hover:shadow-xl hover:bg-black hover:text-slate-50">
              <a href="#" className="">
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://www.linkedin.com/company/delpat"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.medium.com/delpat"
              className="hover:text-gray-300"
            >
              Medium
            </a>
            <a
              href="https://www.facebook.com/delpat"
              className="hover:text-gray-300"
            >
              Facebook
            </a>
            <a
              href="https://www.facebook.com/delpat"
              className="hover:text-gray-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/delpat"
              className="hover:text-gray-300"
            >
              X
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8" />
        <div className="py-2 ">
          <p className="text-sm text-gray-900">
            Copyright © 2024 Delpat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
