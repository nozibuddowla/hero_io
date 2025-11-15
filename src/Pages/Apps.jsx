import React from "react";
import Title from "../components/Title";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div>
      <Title
        title="Our All Applications"
        subtitle="Explore All Apps on the Market developed by us. We code for Millions"
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-5 my-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">
            <span className="text-[#001931] text-2xl font-semibold leading-8">
              ({apps.length}) products found
            </span>
          </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="search Apps" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 place-items-center sm:place-items-stretch">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
