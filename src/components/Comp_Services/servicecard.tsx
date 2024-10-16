import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      key={service.name}
      className="flex flex-row odd:justify-start even:justify-end"
    >
      <div
        className="flex flex-col p-4 w-1/3 rounded-xl bg-[#131314] text-slate-50 shadow-md border border-white border-0 hover:shadow-xl transition-all ease-in-out duration-150" // Added flexbox and shadow styles
      >
        <i className="text-3xl mb-2 fas fa-{service.icon}"></i>
        {/* Font Awesome icon */}
        <h5 className="text-xl font-semibold mb-4">{service.name}</h5>
        <div className="list-disc list-inside mb-4">{service.description}</div>
        <FontAwesomeIcon icon={service.icon} className="ml-2" />
      </div>
    </div>
  );
};

export default ServiceCard;
