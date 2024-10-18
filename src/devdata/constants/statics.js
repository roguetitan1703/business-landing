import { Design, Strategy, Development, Support, Elasticity } from "../assets";
import {
  faLightbulb,
  faGear,
  faMobile,
  faLaptop,
  faPalette,
  faRobot,
  faCloud,
  faNetworkWired,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
export const FeaturesList = [
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

export const words = ["Design", "Build", "Plan", "Execute"]; // List of words to cycle through

export const dummyChars = [
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
export const servicesArray = [
  {
    name: "Custom Software",
    description:
      "Bespoke software developed to your business needs, offering full lifecycle management.",
    icon: faGear, // Font Awesome icon class for gear
    color: "#276ec2", // Blue
  },
  {
    name: "Mobile & Web Application Development",
    description:
      "Complete application development for iOS and Android platforms, alongside responsiveness, scalablability and security.",
    icon: faMobile, // Font Awesome icon class for mobile
    color: "#810dc0", // Teal
  },
  {
    name: "Website Design & Development",
    description:
      "Creating user-friendly, visually appealing websites, optimized for SEO and performance.",
    icon: faLaptop, // Font Awesome icon class for laptop
    color: "#F5A623", // Orange
  },
  {
    name: "UX/UI Design",
    description:
      "Intuitive and engaging designs, optimization for mobile apps and web platforms.",
    icon: faPalette, // Font Awesome icon class for palette
    color: "#BD10E0", // Purple
  },
  {
    name: "Artificial Intelligence",
    description:
      "AI-powered tools and applications integration into existing or new systems for business automation, insights, and improved decision-making.",
    icon: faRobot, // Font Awesome icon class for robot
    color: "#D0021B", // Red
  },
  {
    name: "Cloud Solutions",
    description:
      "Reliable cloud hosting services for websites, mobile applications, and APIs.",
    icon: faCloud, // Font Awesome icon class for cloud
    color: "#4CAF50", // Green
  },
  {
    name: "IT Consultancy & System Integration",
    description:
      "Seamlessly connecting your business systems and technologies, never miss out on a better way to do something.",
    icon: faNetworkWired, // Font Awesome icon class for network-wired
    color: "#FFC107", // Amber
  },
  {
    name: "E-commerce Development",
    description:
      "Managing online stores, payments, and logistics for  online businesses of any scale.",
    icon: faShoppingCart, // Font Awesome icon class for shopping-cart
    color: "#E91E63", // Pink
  },
  {
    name: "Emerging Technologies & Innovation",
    description:
      "Focus on AI, machine learning, and emerging operating systems, bringing state-of-the-art solutions to your business.",
    icon: faLightbulb, // Font Awesome icon class for lightbulb
    color: "#3F51B5", // Indigo
  },
];
