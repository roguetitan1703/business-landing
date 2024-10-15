// Floating Sidebar Component
import React, { useEffect, useState, useRef } from "react";
import { FeaturesList } from "../../devdata/constants";

const FloatingSidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= 970 && scrollPosition <= 4150) {
        console.log("Scroll Position:", scrollPosition);
        setScrollPosition(scrollPosition - 720);
      } else if (scrollPosition < 970) {
        setScrollPosition(970 - 720);
      } else if (scrollPosition > 4150) {
        setScrollPosition(4150 - 720);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="absolute px-6 py-8 bg-gray-800 text-white w-64"
      style={{ top: scrollPosition }}
    >
      <h3 className="text-xl font-bold mb-6">Services We Offer</h3>
      <ul className="space-y-4">
        {FeaturesList.map((service, index) => (
          <li
            key={service.name}
            className={`text-lg ${
              scrollPosition >= index * 650 &&
              scrollPosition < (index + 1) * 650
                ? "text-yellow-300"
                : "text-white"
            }`}
          >
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingSidebar;
