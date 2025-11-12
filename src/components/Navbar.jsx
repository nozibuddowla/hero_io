import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const navLinksArr = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];
  return (
    <div className="bg-[#ffffff] shadow-md">
      <div className="navbar max-w-[1440px] mx-auto px-6 py-3 justify-between items-center">
        <div className="navbar-start">
          <Link tol="/" className="flex items-center gap-1">
            <img className="w-10 h-10" src={logoImg} alt="Hero.IO logo" />
            <span className="font-bold bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center gap-8">
          {navLinksArr.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[#000000e6] hover:text-indigo-600 transition font-medium leading-[152%] ${
                  isActive
                    ? "border-b-2 border-purple-600 bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent pb-1"
                    : ""
                }`
              }
            >
              {" "}
              {link.name}{" "}
            </NavLink>
          ))}
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4"
            >
              {navLinksArr.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[#000000e6] font-medium leading-[152%] ${
                      isActive
                        ? "border-b-2 border-purple-600 bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent pb-1"
                        : ""
                    }`
                  }
                >
                  {" "}
                  {link.name}{" "}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <a
              href="https://github.com/nozibuddowla"
              target="_blank"
              rel="noopener noreferrer"
              role="btn"
              className="bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] flex items-center gap-2.5 py-3 px-4 rounded-sm"
            >
              <div className="bg-white p-1 rounded-full ">
                {" "}
                <Github color="#8E24AA" size={20} />{" "}
              </div>
              <span className="text-white font-semibold leading-5">
                Contribute
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
