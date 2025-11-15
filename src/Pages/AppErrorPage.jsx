import { Link } from "lucide-react";
import React from "react";
import appError from "../assets/App-Error.png";
import { NavLink } from "react-router";

const AppErrorPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">App Details Not Found</h1>
          <div className="py-6">
            <img src={appError} alt="app details error" />
          </div>
          <NavLink to="/apps" className="btn btn-primary">
            Go to Apps page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AppErrorPage;
