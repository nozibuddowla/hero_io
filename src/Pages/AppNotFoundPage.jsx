import React from 'react';
import appError from "../assets/App-Error.png";


const AppNotFoundPage = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">App Not Found</h1>
            <div className="py-6">
              <img src={appError} alt="app details error" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppNotFoundPage;