import React from "react";

const GlowingDivider = () => {
  return (
    <div className="flex justify-center my-16">
      <div className="w-40 h-1 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 animate-pulse"></div>
    </div>
  );
};

export default GlowingDivider;
