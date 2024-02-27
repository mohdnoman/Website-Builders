import React from "react";
import Image from "next/image";
import { UilAngleDown } from "@iconscout/react-unicons";
import Ebatch from "./Ebatch";

const Service = ({
  H1,
  primary,
  mainhighlight,
  num,
  rating,
  comment,
  stars,
}) => {
  return (
    <div className="block col-span-1 gap-y-5 md:gap-y-8 md:flex mt-6">
      <div className="flex justify-center">
        
        <div className="max-w-80 relative">
         
          <div className="bg-[#FFFFFF] rounded-full text-[#626E79] absolute left-0 top-6">{num}</div>
          <Image
            src="/images/computer.png"
            alt="computer"
            width={150}
            height={103}
            className="object-cover mt-12" 
          />
        </div>
      </div>

      <div className="mx-5 max-w-80">
        <div>
          <p className="text-[#4B5665] font-bold inline-block">{H1}</p>
          <p className="inline-block text-[#4B5665] ">-{primary}</p>
        </div>
        <div className="text-[#4B5665] ">
          <p className="text-[#4B5665] font-bold  mt-2 mb-4">Main highlights</p>
          {mainhighlight}
        </div>

        <div className="flex text-[#1B88F4]">
          <p>show more</p>
          <UilAngleDown />
        </div>
      </div>

      <div>
        <div>
          <Ebatch rating={rating} comment={comment} stars={stars} />
        </div>
        <div>
          <button className="bg-[#1B88F4] text-white md:w-48 w-full mt-3 md:mt-44 py-2 rounded-xl">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
