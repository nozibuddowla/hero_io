import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const navLinksArr = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <div>
      <footer className="bg-[#001931] text-gray-300 py-12">
        {/* Main grid */}
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <NavLink to="/" className="flex items-center gap-2">
              <img className="w-10 h-10" src={logoImg} alt="Hero.IO logo" />
              <span className="font-bold text-white text-lg">HERO.IO</span>
            </NavLink>
            <p className="text-gray-400 text-sm mt-2">
              Building modern web apps with React and TailwindCSS.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>

            {navLinksArr.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium leading-[152%] hover:text-indigo-400 transition ${
                    isActive ? "text-indigo-400" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Social / Github */}
          <nav className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-white mb-2">Connect with us</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/nozibuddowla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={24}
                  className="hover:text-indigo-400 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nozibuddowla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={24}
                  className="hover:text-indigo-400 transition"
                />
              </a>
              <a
                href="https://www.facebook.com/nozibuddowla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={24}
                  className="hover:text-indigo-400 transition"
                />
              </a>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright */}
        <aside className="mt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <NavLink to="/">HERO.IO</NavLink>.
          All rights reserved.
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
