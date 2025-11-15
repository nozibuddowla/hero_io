import React from "react";

const Title = ({title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 mb-5 lg:mb-10 px-4 md:px-8 lg:px-12">
      <h3 className="text-[#001931] text-2xl md:text-5xl font-bold leading-10 md:leading-14 mb-4">
        {title}
      </h3>
      <p className="text-[#627382] text-base md:text-xl leading-5 md:leading-8 ">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
