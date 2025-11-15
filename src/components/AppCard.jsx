import { Download } from "lucide-react";
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
    <Link
      to={`/app/${id}`}
      className="group relative w-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
    >
      <figure className="relative w-full aspect-video bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      <div className="p-4 sm:p-5 space-y-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200 min-h-12">
          {title}
        </h2>
        <div className="flex justify-between items-center gap-2 pt-2">
          <div className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg group-hover:bg-emerald-100 transition-colors duration-200">
            <Download /> {formatCompactNumber(downloads)}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#FFF0E1] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg group-hover:bg-amber-100 transition-colors duration-200">
            <Rating
              initialValue={ratingAvg / 5}
              allowFraction={true}
              readonly={true}
              iconsCount={1}
              size={16}
              fillColor="#FF8811"
              emptyColor="#e4e5e9"
              className="flex items-center"
            />
            <span className="text-xs sm:text-sm font-semibold text-[#FF8811]">
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500 ring-opacity-0 group-hover:ring-opacity-100 transition-all duration-300 pointer-events-none" />
    </Link>
  );
};

export default AppCard;
