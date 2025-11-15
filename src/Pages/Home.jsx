import Header from "../components/Header";
import States from "../components/States";
import { NavLink } from "react-router";
import AppCard from "../components/AppCard";
import useApps from "../hooks/useApps";
import Title from "../components/Title";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div>
      <Header />
      <States />
      <Title
        title="Trending Apps"
        subtitle="Explore All Trending Apps on the Market developed by us"
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-10 sm:mb-12 lg:mb-16">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 place-items-center sm:place-items-stretch">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
      <div className="text-center  mb-12 sm:mb-16 md:mb-20 px-4">
        <NavLink
          to="/apps"
          className="inline-block bg-[linear-gradient(125deg,#632ee3_0%,#9f62f2_100%)] text-white font-semibold rounded-sm px-10 py-4"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
