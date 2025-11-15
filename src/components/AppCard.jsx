import { Download } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Rating } from "react-simple-star-rating";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  const formatCompactNumber = (number) => {
    if (number === null) return number;

    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    });

    return formatter.format(number);
  };

  return (
    <Link to={`/app/${id}`} className="card bg-base-100 max-w-80 shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-80 overflow-hidden px-5 sm:px-10 pt-10">
        <img src={image} alt={title} className="w-80 sm:w-full object-contain" />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-2.5 py-1.5  rounded-sm">
            <Download /> {formatCompactNumber(downloads)}
          </span>
          <span className="flex items-center gap-2 bg-[#FFF0E1]  px-2.5 py-1.5  rounded-sm">
            <Rating
              initialValue={ratingAvg / 5}
              allowFraction={true}
              readonly={true}
              iconsCount={1}
              size={20}
              fillColor="#FF8811"
              emptyColor="#e4e5e9"
            />
            <span className="text-[#FF8811]">{ratingAvg}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
