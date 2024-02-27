import React from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { UilInfoCircle } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-xl md:text-4xl pt-5 text-[#2C384A] pb-3">
          Best Website builders in the US
        </h1>
        <hr className="h-1.5 " />
      </div>

      <div className="flex justify-items-center gap-4 py-3 relative">
        <UilCheckCircle color="#4B5665" />
        <div className="text-[#4B5665]">Last Updated - February 22, 2020</div>
        <UilInfoCircle color="#4B5665" />
        <div className="text-[#4B5665]">Advertising Disclosure</div>
        <div className="hidden  absolute right-0 col-auto lg:flex text-[#4B5665]">
          Top Relevant
          <UilAngleDown color="#4B5665" />
        </div>
      </div>
      <hr className="h-1.5 " />

      <div className="md:flex col-span-2 text-[#4B5665] gap-2 md:gap-10 mt-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-10">
          <div>Tools</div>
          <div>AWS Builder</div>
          <div>Start Build</div>
          <div>Build Supplies</div>
          <div>Tooling</div>
          <div>BlueHosting</div>
        </div>
      </div>

      <div className="flex flex-wrap text-[#4B5665] mt-4">
        <div className="flex items-center">
          <div>Home</div>
          <UilAngleRightB className="ml-2" />
        </div>
        <div className="flex items-center  mt-2">
          <div>Hosting for all</div>
          <UilAngleRightB className="ml-2" />
        </div>
        <div className="flex items-center  mt-2">
          <div>Hosting</div>
          <UilAngleRightB className="ml-2" />
        </div>
        <div className="flex items-center  mt-2">
          <div>Hosting6</div>
          <UilAngleRightB className="ml-2" />
        </div>
        <div className="flex items-center  mt-2">
          <div>Hosting5</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
