import React from "react";

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-10 sm:mb-12 lg:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 place-items-center sm:place-items-stretch">
        {Array.from({ length: count }).map((__, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-md"
          >
            <div className="skeleton h-52 w-full"></div>

            <div className="p-4 sm:p-5 space-y-4">
              <div className="skeleton w-32 h-12"></div>
              <div className="flex justify-between items-center gap-2 pt-2">
                <div className="skeleton w-10 h-6"></div>
                <div className="skeleton w-10 h-6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
