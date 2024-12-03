import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Movies
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/" className="hover:underline me-4 md:me-6">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="movies/popular" className="hover:underline me-4 md:me-6">
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to="movies/top" className="hover:underline me-4 md:me-6">
              Top
            </NavLink>
          </li>
          <li>
            <NavLink to="movies/upcoming" className="hover:underline">
              Upcoming
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
