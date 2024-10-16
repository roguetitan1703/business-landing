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
    <div className="bg-[url('devdata/assets/bg1.png')]">
      <div className="max-w-7xl mx-auto p-6 text-white">
        <div className="text-slate-50 relative">
          <div className="relative mx-auto max-w-screen-xl px-4 py-16 lg:items-center ">
            <div className="text-center">
              {/* Adjust font size for responsiveness */}
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold">
                Services We Offer
              </h1>
            </div>

            <div className="text-center flex flex-col sm:flex-row justify-center mt-12 ">
              <p className="text-xl">
                to help you keep up with the diverse needs of businesses accross
                industries.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-5 pb-16 px-6">
          {servicesArray.map((service) => (
            <div
              key={service.name}
              className="flex flex-row odd:justify-start even:justify-end"
            >
              <div
                className="flex flex-col p-4 w-1/3 rounded-xl bg-[#131314] text-slate-50 shadow-md border border-white border-0 hover:shadow-xl transition-all ease-in-out duration-150" // Added flexbox and shadow styles
              >
                <i className="text-3xl mb-2 fas fa-{service.icon}"></i>{" "}
                {/* Font Awesome icon */}
                <h5 className="text-xl font-semibold mb-4">{service.name}</h5>
                <div className="list-disc list-inside mb-4">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6">
          At <strong>DelPat</strong>, we are committed to helping your business
          grow by leveraging the power of technology. Our expert team is ready
          to deliver solutions that enhance productivity, streamline operations,
          and drive innovation.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
