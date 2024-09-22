import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../devdata/assets/logo.svg";

const HeaderLink = ({ linkName, linkUrl }) => {
  return (
    <a href={linkUrl} className="text-sm font-bold hover:opacity-75 mr-7">
      {linkName}
    </a>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center text-white">
      <div className="py-3 pt-5 px-2 max-w-7xl flex flex-grow flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            className="h-10 animate-pulse transition ease-in-out duration-300"
          />
          <p className="text-2xl font-semi-bold">Delpat</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <HeaderLink linkName="What We Do" linkUrl="/" />
          <HeaderLink linkName="Our Services" linkUrl="/" />
          {/* <HeaderLink linkName="Tech Stack" linkUrl="/" /> */}
          <HeaderLink linkName="Contact" linkUrl="/" />
          <div className="group flex flex-row items-center bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg shadow-xl text-black text-md font-bold mr-2 hover:mr-0 hover:ring-blue-500 hover:ring-2 transition-all ease-in-out duration-150">
            <div className="mr-2 group-hover:mr-4 transition-all ease-in-out duration-150">
              Get a Quote
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
