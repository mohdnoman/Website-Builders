import React from "react";
import { UilTrophy, UilDollarAlt } from "@iconscout/react-unicons";

const Pbatch = ({ type = "" }) => {
  const renderBadge = () => {
    switch (type) {
      case "choice":
        return (
          <div className="bg-[#FF7724] rounded-r-md py-2 flex px-2">
            <UilTrophy color="#FFFFFF" />
            <p className="text-[#FFFFFF]">Best Choice</p>
          </div>
        );
      case "value":
        return (
          <div className="bg-[#FF7724] rounded-r-md py-2 flex px-2">
            <UilDollarAlt color="#FFFFFF" />
            <p className="text-[#FFFFFF]">Best Value</p>
          </div>
        );
      default:
        return null;
    }
  };

  return renderBadge();
};

export default Pbatch;
