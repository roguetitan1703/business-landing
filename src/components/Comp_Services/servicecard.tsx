import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      key={service.name}
      className="flex flex-row odd:justify-start even:justify-end"
    >
      <div
        className="flex flex-col py-4 px-6 md:w-[350px] lg:w-[400px] rounded-md border-[#000000] border-1 backdrop-blur-md bg-white/10 md:bg-[#131314]/20 lg:bg-[#131314]/20 text-slate-50 shadow-md hover:shadow-xl transition-all ease-in-out duration-150" // Added flexbox and shadow styles
      >
        <div>
          <FontAwesomeIcon
            icon={service.icon}
            color={service.color}
            size="4x"
          />
        </div>

        <i className="text-3xl mb-4 fas fa-{service.icon}"></i>
        {/* Font Awesome icon */}
        <h5 className="text-xl font-semibold mb-1 uppercase font-body">
          {service.name}
        </h5>
        <hr className="bg-red w-2/3" />
        <div className="list-disc list-inside mt-1 mb-4 font-body">
          {service.description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
