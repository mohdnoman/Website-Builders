import React from "react";
import { UilStar, UilInfoCircle } from "@iconscout/react-unicons";

const Ebatch = ({ rating = 5, comment = "Excellent", stars = 5 }) => {
  // Calculate the integer part of stars
  const integerStars = Math.floor(stars);
  // Calculate the fractional part of stars
  const fractionalStars = stars - integerStars;
  // Create an array of length 'integerStars' to render the full stars
  const fullStarsArray = new Array(integerStars).fill(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full md:w-40 h-[220] bg-[#F3F9FF] rounded-b-xl gap-2">
      <div className="absolute  right-11 top-0 text-[#BABEC3]">
        <UilInfoCircle size={15} />
      </div>
      <p className="text-[#074786] text-3xl pt-2">{rating}</p>
      <p>{comment}</p>
      {/* Render full stars */}
      <div className="flex pb-3">
        {fullStarsArray.map((_, i) => (
          <UilStar key={i} color={"#FFB80F"} background={"#FFB80F"} />
        ))}
        {/* Render fractional star if applicable */}
        {fractionalStars > 0 && (
          <UilStar color={"#BABEC3"} style={{ opacity: fractionalStars }} />
        )}
      </div>
    </div>
  );
};

export default Ebatch;
