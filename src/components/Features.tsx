import React, { useEffect, useRef } from "react";
import {
  Design,
  Strategy,
  Development,
  Support,
  Elasticity,
} from "../devdata/assets";

const FeaturesList = [
  {
    name: "Strategy",
    subhead: "Data-Driven",
    description:
      "Strategic planning guided by data analysis, ensuring targeted solutions.",
    image: Strategy,
    color: "#3498db", // Blue
  },
  {
    name: "Design",
    subhead: "User-Centric",
    description: "Intuitive interfaces crafted with user needs in mind.",
    image: Design,
    color: "#f39c12", // Orange
  },
  {
    name: "Development",
    subhead: "Over the top",
    description:
      "Scalable solutions built using latest technologies, prioritizing security and robustness.",
    image: Development,
    color: "#2ecc71", // Green
  },
  {
    name: "Support",
    subhead: "Dedicated Assistance",
    description:
      "Comprehensive support, ensuring seamless operation and addressing challenges promptly.",
    image: Support,
    color: "#e74c3c", // Red
  },
  {
    name: "Scalability and Robustness",
    subhead: "Future-Proof Solutions",
    description:
      "Scalable infrastructure and robust security, future-proofing your digital presence.",
    image: Elasticity,
    color: "#9b59b6", // Purple
  },
];

const Feature = ({ name, subhead, description, image, color }) => {
  const featureRef = useRef(null); // Create a ref to track visibility
  const [isVisible, setIsVisible] = React.useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={`flex flex-col lg:flex-row even:flex-row odd:flex-row-reverse items-center py-10 lg:py-20 transform transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Adjust image and text layout based on screen size */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <p
          className="text-lg uppercase font-extrabold mb-2"
          style={{ color: color }}
        >
          {subhead}
        </p>
        <GlowingText text={name} glowColor={color} />
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

const BuildFeatures = FeaturesList.map((feature) => (
  <Feature
    key={feature.name} // Add a key prop for efficient rendering
    name={feature.name}
    subhead={feature.subhead}
    description={feature.description}
    image={feature.image}
    color={feature.color}
  />
));

const GlowingText = ({ text, glowColor, delay = 1000 }) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Set a timeout to add the animation with a delay
            setTimeout(() => {
              target.style.animation = `${uniqueKeyframeName} 3s steps(2) forwards`; // Adjusted duration
            }, delay);

            observer.unobserve(entry.target); // Stop observing once the animation has triggered
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  // Generate a unique keyframe name using the text
  const uniqueKeyframeName = `flicker-${text
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  // Define keyframes for the flicker effect dynamically based on glowColor
  const flickerKeyframes = `
    @keyframes ${uniqueKeyframeName} {
      from { 
        text-shadow: 0 0 0px ${glowColor}; 
      }
      0% { 
        text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}; 
      }
      2% { 
        text-shadow: none; 
      }
      3% { 
        text-shadow: 0 0 5px ${glowColor}; 
      }
      5% { 
        text-shadow: none; 
      }
      6% { 
        text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}; 
      }
      8% { 
        text-shadow: 0 0 15px ${glowColor}, 0 0 25px ${glowColor}, 0 0 35px ${glowColor}; 
      }
      9% { 
        text-shadow: 0 0 5px ${glowColor}; 
      }
      10% { 
        text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}; 
      }
      12% { 
        text-shadow: none; 
      }
      20% { 
        text-shadow: 0 0 10px ${glowColor}; 
      }
      50% { 
        text-shadow: none; 
      }
      60% { 
        text-shadow: 0 0 15px ${glowColor}, 0 0 25px ${glowColor}, 0 0 35px ${glowColor}; 
      }
      70% { 
        text-shadow: none; 
      }
      80% { 
        text-shadow: 0 0 10px ${glowColor}; 
      }
      89% { 
        text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}; 
      }
      90% { 
        text-shadow: 0 0 5px ${glowColor}; 
      }
      100% { 
        text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}; 
      }
    }
  `;

  return (
    <div>
      <style>{flickerKeyframes}</style>
      <h3
        ref={textRef} // Attach ref to the text element
        className="text-5xl font-bold mb-3"
        style={{
          textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        }}
      >
        {text}
      </h3>
    </div>
  );
};

const Features = () => {
  const scrollRef = useRef(null); // Ref for the scrollable container

  useEffect(() => {
    // Scroll to the top when the component mounts
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="text-slate-50 relative mx-auto w-full px-4 py-32 sm:px-6 lg:items-center lg:px-8">
      <div
        ref={scrollRef}
        className="overflow-y-auto h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        {BuildFeatures}
      </div>
    </div>
  );
};

export default Features;
