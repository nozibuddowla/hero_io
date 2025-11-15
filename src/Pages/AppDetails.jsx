import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import Loader from "../components/Loader";
import AppErrorPage from "./AppErrorPage";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

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
      maximumFractionDigits: 1,
    });

    return formatter.format(number);
  };

  const reverseRatings = [...ratings].reverse();

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 my-20">
      <div className="grid items-start md:grid-cols-12 gap-10 pb-10 border-b-2 border-[#627382] ">
        <div className="col-span-1 md:col-span-3">
          <img
            src={image}
            alt={title}
            className="max-w-80 w-full object-contain h-80"
          />
        </div>
        <div className="col-span-1 md:col-span-9">
          <div>
            <h2 className="text-[#001931] text-3xl font-bold leading-10 mb-2">
              {title}
            </h2>
            <p className="text-[#627382] text-xl font-bold leading-8 pb-7 border-b-2 border-[#627382] ">
              Developed by{" "}
              <span className="bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent">
                {" "}
                {companyName}{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-6 my-7">
            <div className="space-y-2">
              <img src={downloadIcon} alt="review icon" />
              <p className="text-[#001931] leading-6">Downloads</p>
              <p className="text-[#001931] text-4xl font-extrabold leading-10">
                {formatCompactNumber(downloads)}
              </p>
            </div>
            <div className="space-y-2">
              <img src={ratingIcon} alt="review icon" />
              <p className="text-[#001931] leading-6">Average Ratings</p>
              <p className="text-[#001931] text-4xl font-extrabold leading-10">
                {ratingAvg}
              </p>
            </div>
            <div className="space-y-2">
              <img src={reviewIcon} alt="review icon" />
              <p className="text-[#001931] leading-6">Total Review</p>
              <p className="text-[#001931] text-4xl font-extrabold leading-10">
                {formatCompactNumber(reviews)}
              </p>
            </div>
          </div>
          <button className="text-x text-white font-semibold leading-6 px-5 py-3.5 rounded-sm bg-[#00D390]">
            Install Now ({size} MB){" "}
          </button>
        </div>
      </div>
      <div className="my-10 border-b-2 border-[#627382] pb-10">
        <h3 className="text-[#001931] text-2xl font-semibold leading-8 mb-6">
          Ratings
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={reverseRatings}
            layout="vertical"
            margin={{ left: 20 }}
          >
            <XAxis dataKey="count" type="number" />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
              radius={[0, 4, 4, 0]}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-6">
        <h3 className="text-[#001931] text-2xl font-semibold leading-8">
          Description
        </h3>
        <p className="text-[#627382] text-xl leading-8"> {description} </p>
      </div>
    </div>
  );
};

export default AppDetails;
