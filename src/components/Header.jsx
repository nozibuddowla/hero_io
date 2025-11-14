import React from "react";
import googlePlay from "../assets/googlePlay.png";
import appleStore from "../assets/appleStore.png";
import hero from "../assets/hero.png";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto  mt-10 md:mt-16 lg:mt-20 px-5 lg:px-10 xl:px-16 2xl:px-20 ">
      <h1 className="flex flex-col justify-center items-center text-3xl md:text-5xl lg:text-7xl font-semibold leading-10 md:leading-14 lg:leading-20 text-[#001931] ">
        <span>We Build</span>
        <span>
          <strong className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            Productive 
          </strong>
          Apps
        </span>
      </h1>
      <p className="text-center text-[#627382] text-base md:text-lg lg:text-xl leading-relaxed mt-6 max-w-5xl mx-auto px-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-5 lg:my-10 text-[#001931] text-xl font-semibold leading-6 ">
        <a
          className="flex items-center gap-2.5 px-6 py-3 border-2 border-[#d2d2d2] rounded-sm "
          href="https://play.google.com/store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={googlePlay} alt="google play store" />
          <span>Google Play</span>
        </a>
        <a
          className="flex items-center gap-2.5 px-6 py-3 border-2 border-[#d2d2d2] rounded-sm "
          href="https://play.google.com/store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appleStore} alt="apple store" />
          <span>App Store</span>
        </a>
      </div>
      <div className="flex justify-center items-center relative">
        <img
          src={hero}
          alt="hero"
          className="max-w-3xl w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
