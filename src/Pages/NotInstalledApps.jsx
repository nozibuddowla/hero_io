import React from "react";
import appError from "../assets/App-Error.png";
import { NavLink } from "react-router";

const NotInstalledApps = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="max-w-2xl w-full flex flex-col justify-center items-center space-y-8 py-10">
        <div className="max-w-2xl w-full flex flex-col justify-center items-center space-y-8">
          <img src={appError} alt="error-404" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001931]">
            OOPS!! No installed apps found.
          </h2>
          <p className="text-xl sm:text-lg text-[#627382] text-center">
            The App you are requesting is not installed on our system. please install apps!
          </p>
          <NavLink
            to="/apps"
            className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white"
          >
            Go Back!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotInstalledApps;
