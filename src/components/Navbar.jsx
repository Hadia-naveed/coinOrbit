import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from "../assets/cryptocurrency.png";
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <ul className="space-y-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 ${
              isActive
                ? "bg-black text-white font-semibold"
                : "hover:bg-white hover:text-black"
            }`
          }
          onClick={() => setMenuOpen(false)} // Close on link click
        >
          <AiFillHome size={18} />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/currencies"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 ${
              isActive
                ? "bg-black text-white font-semibold"
                : "hover:bg-white hover:text-black"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          <FaBitcoin size={18} />
          Crypto Currencies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/details"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 ${
              isActive
                ? "bg-black text-white font-semibold"
                : "hover:bg-white hover:text-black"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          <GiCardExchange size={18} />
         Coins Details
        </NavLink>
      </li>

    </ul>
  );

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="bg-[#0a0139] text-white h-screen w-56 shadow-lg p-4 flex-shrink-0 hidden md:block fixed">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <img src={image} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-xl">coinOrbit</span>
        </div>
        {navLinks}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-[#5b0893] text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={image} alt="logo" className="w-8 h-8" />
          <span className="font-bold text-lg">coinOrbit</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#5b0893] text-white px-4 py-3 space-y-2">
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
