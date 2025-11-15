import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import Loader from "../components/Loader";
import AppErrorPage from "./AppErrorPage";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { Check } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <AppErrorPage />;
  }

  const app = apps.find((item) => item.id === Number(id));

  if (!app) {
    return <AppErrorPage />;
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  const formatCompactNumber = (number) => {
    if (number === null) return number;

    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });

    return formatter.format(number);
  };

  const handleInstall = () => {
    setIsInstalled(true);
    toast.success(
      <div className="flex items-center gap-3">
        <div>
          <h4 className="font-semibold text-gray-900">
            Successfully Installed!
          </h4>
          <p className="text-sm text-gray-600">{title} is ready to use</p>
        </div>
      </div>,
      {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const reverseRatings = [...ratings].reverse();

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 my-10 sm:my-16 md:my-20">
      {/* Main Content Grid */}
      <div className="grid items-start grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-10 border-b-2 border-[#627382]">
        {/* App Image */}
        <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start">
          <img
            src={image}
            alt={title}
            className="w-full max-w-72 sm:max-w-80 md:max-w-full object-contain h-60 sm:h-72 md:h-80"
          />
        </div>

        {/* App Info */}
        <div className="col-span-1 md:col-span-9 space-y-6">
          {/* Title and Company */}
          <div>
            <h2 className="text-[#001931] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-3">
              {title}
            </h2>
            <p className="text-[#627382] text-base sm:text-lg md:text-xl font-bold leading-relaxed pb-5 sm:pb-6 md:pb-7 border-b-2 border-[#627382]">
              Developed by
              <span className="bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent">
                {" "}
                {companyName}
              </span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Downloads */}
            <div className="space-y-2">
              <img
                src={downloadIcon}
                alt="download icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-[#001931] text-sm sm:text-base leading-6">
                Downloads
              </p>
              <p className="text-[#001931] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                {formatCompactNumber(downloads)}
                {downloads > 1000 ? "+" : ""}
              </p>
            </div>

            {/* Ratings */}
            <div className="space-y-2">
              <img
                src={ratingIcon}
                alt="rating icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-[#001931] text-sm sm:text-base leading-6">
                Average Ratings
              </p>
              <p className="text-[#001931] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                {ratingAvg}
              </p>
            </div>

            {/* Reviews */}
            <div className="space-y-2">
              <img
                src={reviewIcon}
                alt="review icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-[#001931] text-sm sm:text-base leading-6">
                Total Review
              </p>
              <p className="text-[#001931] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                {formatCompactNumber(reviews)}
              </p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`w-full sm:w-auto text-base sm:text-lg md:text-xl font-semibold leading-6 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
              isInstalled
                ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                : "bg-[#00D390] hover:bg-[#00BD7E] text-white active:scale-95"
            }`}
          >
            {isInstalled ? (
              <>
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                <span>Installed</span>
              </>
            ) : (
              <span>Install Now ({size} MB)</span>
            )}
          </button>
        </div>
      </div>

      {/* Ratings Chart Section */}
      <div className="my-8 sm:my-10 md:my-12 border-b-2 border-[#627382] pb-8 sm:pb-10">
        <h3 className="text-[#001931] text-xl sm:text-2xl md:text-3xl font-semibold leading-8 mb-4 sm:mb-6">
          Ratings
        </h3>
        {/* Wrapper div with responsive height */}
        <div className="w-full h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={reverseRatings} layout="vertical">
              <XAxis dataKey="count" type="number" tick={{ fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Bar dataKey="count" fill="#ff8811" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-4 sm:space-y-6">
        <h3 className="text-[#001931] text-xl sm:text-2xl md:text-3xl font-semibold leading-8">
          Description
        </h3>
        <p className="text-[#627382] text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
