import React, { useEffect, useRef } from "react";

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

export default GlowingText;
