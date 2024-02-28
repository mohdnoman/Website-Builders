import React from "react";
import Image from "next/image";
import DiscountBatch from "./DiscountBatch";

const Deal = ({ heading, price, description }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="p-12 flex items-center">
        <Image
          src="/images/computer.png"
          alt="computer"
          width={150}
          height={103}
          className="object-cover mt-12"
        />
      </div>

      <div className="flex mx-2 gap-2">
        <div>
          <DiscountBatch offer={20} />
        </div>
        <div className="bg-[#F2F4F7]  text-[#074786] rounded-lg px-1">
          Limited time{" "}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-2">
        <p className="text-[#626E79] font-bold">{heading}</p>
        <p className="text-[#626E79] mt-2">{description}</p>
      </div>

      <div className="flex gap-2 items-end mt-1">
        <div className="text-[#5C6874] text-xl">${price}</div>
        <div className="text-[#9FA9B3] text-sm">$49.99</div>
        <div className="text-[#EF4C5D]">(20% off)</div>
      </div>

      <div>
        <button className="bg-[#1B88F4] text-white mt-2  w-full py-2 rounded-xl">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default Deal;
