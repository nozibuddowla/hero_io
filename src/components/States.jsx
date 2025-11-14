import React from "react";

const States = () => {
  return (
    <div className=" bg-[linear-gradient(125deg,#632ee3_0%,#9f62f2_100%)] text-white p-10 md:p-14 lg:p-20">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-10 xl:leading-14 mb-5 lg:mb-7 xl:mb-10 text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-0 md:gap-6 space-y-6 md:space-y-0 ">
          <div className="text-center space-y-4">
            <p className="leading-6 text-base">Total Downloads</p>
            <p className="text-6xl font-extrabold">29.6M</p>
            <p className="leading-6 text-base">21% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p className="leading-6 text-base">Total Reviews</p>
            <p className="text-6xl font-extrabold">906K</p>
            <p className="leading-6 text-base">46% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p className="leading-6 text-base">Active Apps</p>
            <p className="text-6xl font-extrabold">132+</p>
            <p className="leading-6 text-base">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
