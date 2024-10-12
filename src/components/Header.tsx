import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../devdata/assets/logo.svg";

const HeaderLink = ({ linkName, linkUrl, fn }) => {
  return (
    <a
      onClick={fn || console.log("Jata hu bhau")}
      href={linkUrl}
      className="text-sm font-bold hover:opacity-75 mr-7 cursor-pointer"
    >
      {linkName}
    </a>
  );
};

const Header = () => {
  const scrollToFoot = () => {
    const footElement = document.getElementById("foot");
    if (footElement) {
      footElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTogit = () => {
    const footElement = document.getElementById("git");
    if (footElement) {
      footElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-row justify-center items-center text-white bg-black">
      <div className="py-3 pt-5 px-4 w-full max-w-7xl flex flex-grow flex-row justify-between items-center">
        {/* Logo Section */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={logo}
            alt="thebestteam"
            className="h-10 animate-pulse transition ease-in-out duration-300"
          />
          <p className="text-2xl font-semi-bold ml-2">Delpat</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-row justify-between items-center space-x-4">
          <HeaderLink
            linkName="What We Do"
            linkUrl="/what-we-do"
            fn={undefined}
          />
          <HeaderLink
            linkName="Our Services"
            linkUrl="/our-services"
            fn={undefined}
          />
          <HeaderLink
            fn={scrollToFoot}
            linkName="Contact"
            linkUrl={undefined}
          />
          <button
            onClick={scrollTogit}
            className="group flex cursor-pointer flex-row items-center bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg shadow-xl text-black text-md font-bold hover:ring-blue-500 hover:ring-2 transition-all ease-in-out duration-150"
          >
            <div className="mr-2 group-hover:mr-4 transition-all ease-in-out duration-150">
              Get a Quote
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </button>
        </div>

        {/* Mobile Menu Button (visible on smaller screens) */}
        {/* <div className="lg:hidden">
          <button
            onClick={scrollToFoot}
            className="bg-purple-500 px-3 py-2 rounded-md text-white hover:bg-blue-500 transition ease-in-out duration-200"
          >
            Menu
          </button>
        </div> */}
      </div>

      {/* Mobile Dropdown Menu (can be further expanded into a drawer or modal) */}
      <div className="lg:hidden mt-2 w-full bg-black p-4 flex flex-col items-center space-y-2">
        <HeaderLink
          linkName="What We Do"
          linkUrl="/what-we-do"
          fn={undefined}
        />
        <HeaderLink
          linkName="Our Services"
          linkUrl="/our-services"
          fn={undefined}
        />
        <HeaderLink fn={scrollToFoot} linkName="Contact" linkUrl={undefined} />
        <button
          onClick={() => window.scrollTo({ top: 6250, behavior: "smooth" })}
          className="group flex cursor-pointer flex-row items-center bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg shadow-xl text-black text-md font-bold hover:ring-blue-500 hover:ring-2 transition-all ease-in-out duration-150"
        >
          <div className="mr-2 group-hover:mr-4 transition-all ease-in-out duration-150">
            Get a Quote
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
