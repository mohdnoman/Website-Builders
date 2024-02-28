import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="w-full h-[42px] md:h-[64px] bg-[#212731]">
      <div className="container py-2 sm:pt-3  pl-5 md:py-5 md:pl-64 flex gap-10 ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UilSearch color="gray" size="20" />
          </div>
          <input
            type="text"
            className="md:pl-10 md:pr-3 rounded-md outline-none h-6 md:h-8"
          />
        </div>

        <div className="md:hidden ml-10 absolute right-3">
          <UilBars color="white" size="30" />
        </div>

        <div className="flex gap-8 mt-1 ">
          <div className="text-gray-400 hidden md:block">Categories</div>
          <div className="text-gray-400 hidden md:block">Website builders</div>
          <div className="text-gray-400 hidden md:block">Today&apos;s deals</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
