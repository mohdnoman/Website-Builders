import React from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-center md:justify-between py-24 pl-10 md:pl-0 bg-[#212731] mt-10">
      <div className="flex flex-col text-[#FFFFFF] md:w-auto w-full md:mx-10 mb-6 md:mb-0">
        <h1 className="text-lg">Categories</h1>
        <ul className="text-[#B6BDC4]">
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>

      <div className="flex flex-col text-[#FFFFFF] md:w-auto w-full md:mx-10 mb-6 md:mb-0">
        <h1 className="text-lg">Contact</h1>
        <ul className="text-[#B6BDC4]">
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>

      <div className="flex text-[#D1D6DA] md:w-auto w-full md:mx-10">
        <p>United States</p>
        <UilAngleDown />
      </div>
    </div>
  );
};

export default Footer;
