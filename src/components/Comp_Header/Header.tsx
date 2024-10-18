import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHome,
  faInfoCircle,
  faPhone,
  faHammer,
  faBars, // Hamburger icon for mobile
  faTimes, // Close icon for mobile
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../devdata/assets/logo.svg";

// Reusable HeaderLink component
const HeaderLink = ({ linkName, linkUrl, fn, icon }) => {
  return (
    <div>
      <a
        onClick={fn || console.log("Navigating...")}
        href={linkUrl}
        className="relative text-sm font-bold cursor-pointer transition-transform ease-in-out duration-300 group"
      >
        <span className=" z-10">
          <FontAwesomeIcon icon={icon} className="ml-3" /> {linkName}
        </span>
      </a>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <div className="flex flex-row justify-center items-center text-white bg-black relative w-full">
      <div className="py-3 px-4 w-full max-w-7xl flex flex-row justify-between items-center">
        {/* Logo Section */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={logo}
            alt="thebestteam"
            className="h-8 md:h-10 animate-pulse transition ease-in-out duration-300" // Adjusted for smaller screens
          />
          <p className="text-lg md:text-2xl font-semibold ml-2">Delpat</p>{" "}
          {/* Responsive font size */}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="lg:hidden cursor-pointer text-xl md:text-2xl absolute top-3 right-5" // Make responsive
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-row justify-between items-center space-x-6">
          <HeaderLink linkName="Home" linkUrl="/" icon={faHome} />
          <HeaderLink
            linkName="What We Do"
            linkUrl="/what-we-do"
            icon={faInfoCircle}
          />
          <HeaderLink
            linkName="Our Services"
            linkUrl="/our-services"
            icon={faHammer}
          />
          <HeaderLink linkName="Contact" linkUrl="/contact" icon={faPhone} />

          {/* Keep the Get a Quote button with the hover effect */}
          <a
            href="/contact"
            className="relative group flex cursor-pointer flex-row items-center bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 rounded-full shadow-xl text-black text-md font-bold hover:ring-blue-500 hover:ring-2 transition-all ease-in-out duration-300"
          >
            <div className="relative z-10 mr-2 group-hover:mr-4 transition-all ease-in-out duration-300">
              Get a Quote
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="relative z-10" />
            {/* Bubble effect */}
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 w-half bg-black p-4 flex flex-col items-center space-y-2">
            <HeaderLink linkName="Home" linkUrl="/" icon={faHome} />
            <HeaderLink
              linkName="What We Do"
              linkUrl="/what-we-do"
              icon={faInfoCircle}
            />
            <HeaderLink
              linkName="Our Services"
              linkUrl="/our-services"
              icon={faHammer}
            />
            <HeaderLink linkName="Contact" linkUrl="/contact" icon={faPhone} />

            {/* Keep the Get a Quote button with hover effect */}
            <a
              href="/contact"
              className="group flex cursor-pointer flex-row items-center bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 rounded-full shadow-xl text-black text-md font-bold hover:ring-blue-500 hover:ring-2 transition-all ease-in-out duration-300"
            >
              <div className="mr-2 group-hover:mr-4 transition-all ease-in-out duration-300">
                Get a Quote
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
              {/* Bubble effect */}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
