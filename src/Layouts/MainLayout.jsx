import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
