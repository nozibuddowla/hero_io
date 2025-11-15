import React from "react";
import logoImg from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="min-h-screen flex justify-center items-center">
        <span className="text-5xl font-black">
          L <img className="inline w-16 h-16 animate-spin" src={logoImg} alt="Loading..." /> ading
        </span>
      </div>
    </div>
  );
};

export default Loader;
