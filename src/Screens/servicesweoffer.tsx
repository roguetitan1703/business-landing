import React from "react";
import { servicesArray } from "../devdata/constants";

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
