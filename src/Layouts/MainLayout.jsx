import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import NavigationLoader from "../components/NavigationLoader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NavigationLoader />
      <main
        className={`flex-1 ${
          navigation.state === "loading" ? "opacity-70" : ""
        } transition-opacity duration-200`}
      >
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
