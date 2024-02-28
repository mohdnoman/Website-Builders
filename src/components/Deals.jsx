import React from "react";
import Deal from "./Deal";

const Deals = () => {
  const Deals = [
    {
      heading: "Webbuilder 1",
      price: 39.96,
      description: "Computer  Modern clasic with wix support",
    },
    {
      heading: "Webbuilder 1",
      price: 39.96,
      description: "Computer  Modern clasic with wix support",
    },
    {
      heading: "Webbuilder 1",
      price: 39.96,
      description: "Computer  Modern clasic with wix support",
    },
  ];
  return (
    <>
      <div>
        <div>
          <h1 className="text-[#2C384A] text-2xl">
            Related deals you might like
          </h1>
        </div>
        <div className="md:flex block gap-3">
          {Deals.map(({ heading, price, description }) => (
            <Deal heading={heading} price={price} description={description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Deals;
