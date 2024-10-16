import React, { useEffect, useState } from "react";
import SlotCounter from "react-slot-counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Comp_Hero/hero.css";

const words = ["Design", "Build", "Plan", "Execute"]; // List of words to cycle through

const dummyChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // State to track the current word
  const [displayWord, setDisplayWord] = useState(words[0]); // Word displayed in the UI
  const [isChanging, setIsChanging] = useState(false); // State to track if we are changing words

  // Effect to cycle through the words every 1.5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Check if we are currently changing words
      if (!isChanging) {
        // Start changing words
        setIsChanging(true);

        // // Show random letters before switching to the new word
        // const randomLetters = Array.from(
        //   { length: words[currentWordIndex].length },
        //   () => String.fromCharCode(Math.floor(Math.random() * 26) + 97) // Generate random lowercase letters
        // ).join("");

        // setDisplayWord(randomLetters); // Display random letters

        // Set timeout to switch to the actual word
        const nextIndex = (currentWordIndex + 1) % words.length;
        setCurrentWordIndex(nextIndex);
        setDisplayWord(words[nextIndex]); // Set new word after random letters
        setIsChanging(false); // Allow changing again
      }
    }, 5000); // 1.5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentWordIndex, isChanging]); // Dependencies include currentWordIndex and isChanging

  const SlotAnimatorText = (text) => {
    return (
      <SlotCounter
        value={displayWord}
        duration={0.7}
        dummyCharacters={dummyChars}
        dummyCharacterCount={52}
        hasInfiniteList={true}
      />
    );
  };
  return (
    <div className="text-slate-50 relative">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8 z-0">
        <div className="max-w-3xl text-center sm:text-left z-0 fade-in-up">
          {/* Adjust font size for responsiveness */}
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold">
            The only{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text bg-300% animate-gradient">
              Tech-Team
            </span>{" "}
            you'll ever need.
          </h1>
        </div>

        <div className="max-w-3xl flex flex-col sm:flex-row justify-between items-start mt-12 z-0">
          <p className="text-xl fade-in-up" style={{ animationDelay: "0.1s" }}>
            to {<SlotAnimatorText text={displayWord} />} your next idea into
            Reality {/* Show the current or changing word */}
          </p>
          <p
            onClick={() => window.scrollTo({ top: 6250, behavior: "smooth" })}
            className="flex items-center group z-10 cursor-pointer mt-8 sm:mt-0 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-full flex flex-row items-center px-4 py-2 bg-gradient-to-l hover:bg-none from-cyan-400 to-purple-500 hover:ring-white hover:ring-1 hover:scale-105 transition-transform ease-in-out duration-150">
              <span className="mr-1 text-transparent text-nowrap bg-clip-text bg-white group-hover:bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:text-transparent">
                Get in touch
              </span>
              <span className="inline-block transform transition-transform duration-300 ease-in-out -translate-x-2 group-hover:translate-x-2">
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
