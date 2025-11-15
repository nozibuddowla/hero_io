import React from "react";
import { NavLink } from "react-router";
import error_404 from "../assets/error-404.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl w-full flex flex-col justify-center items-center space-y-8">
        <img src={error_404} alt="error-404" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>

        {/* Illustration */}
        <div className="flex justify-center py-8">
          <svg
            className="w-64 h-64 sm:w-80 sm:h-80"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lost person illustration */}
            <circle cx="250" cy="250" r="200" fill="#F3F4F6" />
            <circle cx="250" cy="200" r="60" fill="#9F62F2" opacity="0.2" />
            <path
              d="M250 260 L250 340 M220 300 L280 300 M230 340 L230 380 M270 340 L270 380"
              stroke="#632EE3"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="240" cy="190" r="8" fill="#632EE3" />
            <circle cx="260" cy="190" r="8" fill="#632EE3" />
            <path
              d="M235 210 Q250 220 265 210"
              stroke="#632EE3"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Question marks */}
            <text x="150" y="150" fontSize="40" fill="#9F62F2" opacity="0.5">
              ?
            </text>
            <text x="330" y="180" fontSize="35" fill="#632EE3" opacity="0.4">
              ?
            </text>
            <text x="180" y="300" fontSize="30" fill="#9F62F2" opacity="0.3">
              ?
            </text>
          </svg>
        </div>
        <NavLink to="/apps" className="btn btn-primary">
          Go to Apps page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
