import { Download } from "lucide-react";
import { Rating } from "react-simple-star-rating";

const InstalledApp = ({ app, onUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  const formatCompactNumber = (number) => {
    if (number === null) return number;

    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });

    return formatter.format(number);
  };

  const handleUninstallClick = () => {
    if (onUninstall) {
      onUninstall(id);
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group relative w-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-1 p-4 sm:p-5 md:p-6"
    >
      <figure className="col-span-1 md:col-span-2 relative w-full h-24 sm:h-28 md:h-32 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      <div className="col-span-1 md:col-span-8 lg:col-span-9 flex flex-col space-y-3 sm:space-y-4">
        <h3 className="text-[#001931] text-lg sm:text-xl md:text-2xl font-medium leading-tight group-hover:text-purple-600 transition-colors duration-200">
          {" "}
          {title}{" "}
        </h3>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[#00D390] text-sm sm:text-base">
            <Download />{" "}
            <span className="font-medium">
              {formatCompactNumber(downloads)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Rating
              initialValue={ratingAvg ? ratingAvg / 5 : 0}
              allowFraction={true}
              readonly={true}
              iconsCount={1}
              size={16}
              fillColor="#FF8811"
              emptyColor="#e4e5e9"
              className="flex items-center"
            />
            <span className=" text-[#FF8811]">{ratingAvg || "N/A"}</span>
          </div>
          <span className="text-[#627382] ">
            {" "}
            {size ? `${size} MB` : "N/A"}{" "}
          </span>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-end md:justify-center">
        <button
          onClick={handleUninstallClick}
          className="w-full md:w-auto rounded-sm bg-[#00d390] hover:bg-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-5 font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
        >
          Uninstall
        </button>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500 ring-opacity-0 group-hover:ring-opacity-100 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default InstalledApp;
