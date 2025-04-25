import React from "react";

const SectionDivider = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-16">
      <div className="border-t border-gray-700 w-1/4 mr-4"></div>
      <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">
        {title}
      </span>
      <div className="border-t border-gray-700 w-1/4 ml-4"></div>
    </div>
  );
};

export default SectionDivider;
