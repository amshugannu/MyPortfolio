"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href.replace("#", "")} // Remove # if present
      spy={true}                 // Make link active when section is in view
      smooth={true}              // Smooth scrolling
      offset={-80}               // Adjust offset for fixed navbar height
      duration={500}             // Scroll duration in ms
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
      activeClass="text-white font-semibold" // Styles when active
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
