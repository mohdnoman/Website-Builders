import React from "react";

const DiscountBatch = ({ offer }) => {
  return (
    <div className="bg-[#F2F4F7] rounded-lg px-2">
      <div className="text-[#074786]">{offer}% off</div>
    </div>
  );
};

export default DiscountBatch;
