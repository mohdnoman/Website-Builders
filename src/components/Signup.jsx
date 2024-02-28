import React from "react";

const Signup = () => {
  return (
    <div className="md:flex block mt-10 pt-5 pb-7">
      <div className="max-w-[400px]">
        <h1 className="text-[#5C6874] text-3xl">
          Sign up and get exclusive special deals
        </h1>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        <input type="text" className="h-10 md:w-[268px] bg-slate-200 outline-none rounded-l-lg" />
        <button className="h-10 bg-[#1B88F4] rounded-r-lg text-[#FFFFFF] px-2 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
