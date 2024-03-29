import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-white border-gray-200 border-b py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to={"/"}
                className={` ${location.pathname === "/" ? "text-blue-700" : "text-gray-900" } block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:p-0 "
                aria-current="page`}
              >
                Table
              </Link>
            </li>
            <li>
              <Link
                to={"/chart"}
                className={` ${location.pathname === "/chart" ? "text-blue-700" : "text-gray-900" } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
              >
                Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
