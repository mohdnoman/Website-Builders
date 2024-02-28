import React from "react";
import Image from "next/image";
import { UilAngleDown, UilCheckCircle } from "@iconscout/react-unicons";
import DiscountBatch from "./DiscountBatch";
import Ebatch from "./Ebatch";
import Pbatch from "./Pbatch";

const Service = ({
  H1,
  primary,
  mainhighlight,
  serviceName,
  num,
  rating,
  comment,
  batchtype,
  stars,
  l1,
  l2,
}) => {
  const renderMainHighlights = () => {
    if (l1 && l2) {
      return (
        <div>
          <div className="inline-block w-20 rounded-xl mt-1">
            <DiscountBatch offer={20} />
          </div>
          <p className="text-[#4B5665] font-bold mt-2 mb-4">Main highlights</p>
          <div className="pl-3 bg-[#FFF4ED] rounded-lg py-4 ml-4">
            <ul>
              {l1.map(({ rate, name }, index) => (
                <li key={index} className="flex gap-1">
                  <div className="bg-[#FFFFFF] text-lg text-[#1B88F4] rounded-lg mb-1 px-0.5">
                    {rate}
                  </div>
                  <div className="text-[#4B5665]">{name}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#2C384A] my-2 text-lg">Why we love it</h3>
            <ul>
              {l2.map(({ name }, index) => (
                <li key={index} className="flex gap-1 mb-1">
                  <UilCheckCircle color={"#0855A1"} opacity={0.5} />
                  <p className="text-[#4B5665]">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-[#4B5665] ">
          <p className="text-[#4B5665] font-bold mt-2 mb-4">Main highlights</p>
          {mainhighlight}
        </div>
      );
    }
  };

  return (
    <div className="block col-span-1 gap-y-5 md:gap-y-8 md:flex mt-6 ">
      <div className="relative md:flex block py-12 w-full">
        <div className="absolute left-0 top-0">
          <Pbatch type={batchtype} />
        </div>

        <div className="flex justify-center relative">
          <div className="max-w-80 relative">
            <div className="bg-[#FFFFFF] rounded-full border-[1px] border-[#626E79] text-[#626E79] absolute left-0 top-0 w-8 h-8 flex items-center justify-center ">
              {num}
            </div>

            <Image
              src="/images/computer.png"
              alt="computer"
              width={150}
              height={103}
              className="object-cover mt-12"
            />
            <p className="text-[#626E79] mt-2 md:mt-10 ml-10">{serviceName}</p>
          </div>
        </div>

        <div className="mx-5 max-w-80">
          <div>
            <p className="text-[#4B5665] font-bold inline-block">{H1}</p>
            <p className="inline-block text-[#4B5665] ">-{primary}</p>
          </div>

          {renderMainHighlights()}

          <div className="flex text-[#1B88F4]">
            <p>show more</p>
            <UilAngleDown />
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <Ebatch rating={rating} comment={comment} stars={stars} />
          </div>
          <div className="sm:self-end ">
            <button className="bg-[#1B88F4] text-white md:w-48 w-full mt-3 md:mt-44 py-2 rounded-xl">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
