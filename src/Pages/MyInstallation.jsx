import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Title from "../components/Title.jsx";
import Loader from "../components/Loader.jsx";
import NotInstalledApps from "../Pages/NotInstalledApps.jsx";
import InstalledApp from "../components/InstalledApp.jsx";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const loadInstalledApps = async () => {
      setLoading(true);
      try {
        const installList = JSON.parse(localStorage.getItem("installList"));
        setInstalledApps(Array.isArray(installList) ? installList : []);
      } catch (err) {
        console.error(`Failed to load installed apps: ${err}`);
        setInstalledApps([]);
      } finally {
        setLoading(false);
      }
    };

    loadInstalledApps();
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  })();

  const handleUninstall = (appId) => {
    try {
      const newInstallList = installedApps.filter((item) => item.id !== appId);
      localStorage.setItem("installList", JSON.stringify(newInstallList));
      setInstalledApps(newInstallList);
      toast.success(
        <div className="flex items-center gap-3">
          <div>
            <h4 className="font-semibold text-gray-900">
              App uninstalled Successfully!
            </h4>
          </div>
        </div>,
        {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } catch (err) {
      console.error(`Uninstall failed: ${err}`);
      toast.error(
        <div className="flex items-center gap-3">
          <div>
            <h4 className="font-semibold text-gray-900">
              Failed to uninstall. Try again.
            </h4>
          </div>
        </div>,
        {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  return (
    <div>
      <Title
        title="Your Installed Apps"
        subtitle="Explore All Trending Apps on the Market developed by us"
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-5 my-20">
        {loading ? (
          <Loader />
        ) : installedApps.length === 0 ? (
          <NotInstalledApps />
        ) : (
          <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className=" flex flex-wrap items-center text-xl sm:text-2xl font-bold text-[#001931]">
                {installedApps.length}{" "}
                {installedApps.length === 1 ? "App" : "Apps "} Found
              </h1>
              <div className="w-full sm:w-auto">
                <select
                  className="select w-full sm:w-48 md:w-56 px-4 py-2.5 border border-[#d2d2d2] rounded-sm bg-white text-[#627382] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="none">Sort by Downloads</option>
                  <option value="download-asc">Low -&gt; High</option>
                  <option value="download-desc">High -&gt; Low</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {sortedItem.map((app) => (
                <InstalledApp
                  key={app.id}
                  app={app}
                  onUninstall={handleUninstall}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInstallation;
