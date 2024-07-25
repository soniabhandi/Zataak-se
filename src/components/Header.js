import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Add these imports for the hamburger menu icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1240px] py-[17px] p-4 flex items-center mx-auto justify-between">
        <div className="text-xl font-bold">FlatLogic</div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="/"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <span>Home</span>
            <MdOutlineArrowDropDown />
          </a>
          <a
            href="/pages"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <span>Pages</span>
            <MdOutlineArrowDropDown />
          </a>
          <a
            href="/shop"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <span>Shop</span>
            <MdOutlineArrowDropDown />
          </a>
          <a
            href="/blog"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <span>Blog</span>
            <MdOutlineArrowDropDown />
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <IoSearchOutline className="text-xl" />
          <GoPerson className="text-xl" />
          <MdOutlineShoppingCart className="text-xl" />
        </div>
      </div>
      <div
        className={`md:hidden duration-300 text-gray-700 font-normal bg-white fixed top-[69px] w-full h-screen ${
          menuOpen ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="/pages" className="hover:text-gray-900">
            Pages
          </a>
          <a href="/shop" className="hover:text-gray-900">
            Shop
          </a>
          <a href="/blog" className="hover:text-gray-900">
            Blog
          </a>
        </nav>
        <div className="flex justify-center gap-4 mt-4">
          <IoSearchOutline className="text-xl" />
          <GoPerson className="text-xl" />
          <MdOutlineShoppingCart className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
