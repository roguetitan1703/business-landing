// Floating Sidebar Component
import React, { useEffect, useState, useRef } from "react";
import { FeaturesList } from "../../devdata/constants";
const FloatingSidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= 848 && scrollPosition <= 2332) {
        console.log("Scroll Position:", scrollPosition);
        setScrollPosition(scrollPosition - 720);
      } else if (scrollPosition < 848) {
        setScrollPosition(848 - 720);
      } else if (scrollPosition > 2332) {
        setScrollPosition(2332 - 720);
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
      className="absolute px-6 py-8 bg-[#131314] text-white w-64"
      style={{ top: scrollPosition }}
    >
      <h3 className="text-xl font-bold mb-6">Services We Offer</h3>
      <ul className="space-y-4">
        {FeaturesList.map((service, index) => (
          <li
            key={service.name}
            className={`text-lg ${
              scrollPosition >= index * 330 &&
              scrollPosition < (index + 1) * 330
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
