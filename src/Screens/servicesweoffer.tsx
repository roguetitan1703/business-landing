import React from "react";

const servicesArray = [
  {
    name: "Custom Software Development",
    description:
      "Design and development of bespoke software solutions tailored to your business needs, offering full lifecycle management.",
    icon: "gear", // Font Awesome icon class for gear
  },
  {
    name: "Mobile & Web Application Development",
    description:
      "End-to-end mobile application development for iOS and Android platforms, alongside responsive, scalable, and performance-optimized web applications.",
    icon: "mobile", // Font Awesome icon class for mobile
  },
  {
    name: "Website Design & Development",
    description:
      "Professional website design and development, creating user-friendly, visually appealing websites, optimized for SEO and performance.",
    icon: "laptop", // Font Awesome icon class for laptop
  },
  {
    name: "UX/UI Design",
    description:
      "Intuitive and engaging user interfaces (UI) and user experience (UX) optimization for mobile apps and web platforms.",
    icon: "palette", // Font Awesome icon class for palette
  },
  {
    name: "Artificial Intelligence Solutions",
    description:
      "AI-powered tools and applications for business automation, insights, and improved decision-making. AI integration into existing systems to enhance operational efficiency and competitiveness.",
    icon: "robot", // Font Awesome icon class for robot
  },
  {
    name: "Cloud Solutions & Hosting",
    description:
      "Reliable cloud hosting services for websites, mobile applications, and software solutions, with scalable cloud infrastructure to support your growing business.",
    icon: "cloud", // Font Awesome icon class for cloud
  },
  {
    name: "IT Consultancy & System Integration",
    description:
      "Strategic IT consultancy and system integration services to ensure seamless connectivity between your business systems and technologies.",
    icon: "network-wired", // Font Awesome icon class for network-wired
  },
  {
    name: "E-commerce Development",
    description:
      "Development of e-commerce platforms for online businesses, managing online stores, payments, and logistics.",
    icon: "shopping-cart", // Font Awesome icon class for shopping-cart
  },
  {
    name: "Emerging Technologies & Innovation",
    description:
      "Focus on AI, machine learning, and emerging operating systems, bringing state-of-the-art solutions to your business.",
    icon: "lightbulb", // Font Awesome icon class for lightbulb
  },
];

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="mb-4">
        At **DelPat**, we offer a wide range of services to meet the diverse
        needs of businesses across industries:
      </p>
      <div className="grid grid-cols-4 gap-4">
        {servicesArray.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center justify-center p-4 rounded-md bg-white text-black shadow-md hover:shadow-lg" // Added flexbox and shadow styles
          >
            <i className="text-3xl mb-2 fas fa-{service.icon}"></i>{" "}
            {/* Font Awesome icon */}
            <h5 className="text-xl font-semibold mb-4">{service.name}</h5>
            <div className="list-disc list-inside mb-4">
              {service.description}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6">
        At **DelPat**, we are committed to helping your business grow by
        leveraging the power of technology. Our expert team is ready to deliver
        solutions that enhance productivity, streamline operations, and drive
        innovation.
      </p>
    </div>
  );
};

export default OurServices;
