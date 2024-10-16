import React from "react";
import { servicesArray } from "../devdata/constants";
import { ServiceCard } from "../components/Comp_Services";

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
            <ServiceCard service={service} />
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
