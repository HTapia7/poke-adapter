"use client"
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main Navigation"
      className="bg-white shadow-md dark:bg-gray-900"
    >
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            PokeNav
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          id="navbar-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col items-center mt-4 space-y-4 md:space-y-0 md:space-x-6 md:mt-0 md:flex-row">
            <li>
              <Link
                href="/"
                className="font-medium text-gray-800 transition dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/generation"
                className="font-medium text-gray-800 transition dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                Generation
              </Link>
            </li>
            <li>
              <Link
                href="/type"
                className="font-medium text-gray-800 transition dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                Types
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
