import { NavLink } from 'react-router-dom';
import image from "../assets/cryptocurrency.png";
import { AiFillHome } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaBitcoin } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-[#5b0893] text-white h-screen w-56 shadow-lg p-4 flex-shrink-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-6">
        <img src={image} alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl text-white">coinOrbit</span>
      </div>

      {/* Navigation Links */}
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
          >
            <FaBitcoin size={18} />
            Crypto Currencies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exchange"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 ${
                isActive
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-white hover:text-black"
              }`
            }
          >
            <GiCardExchange size={18} />
            Exchanges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 ${
                isActive
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-white hover:text-black"
              }`
            }
          >
            <IoNewspaperOutline size={18} />
            News
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
