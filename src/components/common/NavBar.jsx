import React, { useRef } from "react";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const inputref = useRef(null);

  const handleSearchIcon = () => {
    inputref.current?.focus();
  };
  return (
    <nav className="grid grid-cols-3 w-full h-20 border-b border-gray-200 gap-4">
      {/* left side Nav */}
      <NavLink to={"/"} className={"flex items-center justify-center"}>
        <h2 className="text-2xl font-bold">Shop.CO</h2>
      </NavLink>
      {/* center nav of NavLInks */}
      <div className="space-x-10  flex items-center justify-center">
        <NavLink
          className={({ isActive }) =>
            `font-semibold hover:text-primary transition duration-300 ease-in-out ${
              isActive ? "underline underline-offset-3  text-primary " : ""
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold hover:text-primary transition duration-300 ease-in-out ${
              isActive ? "underline underline-offset-3  text-primary " : ""
            }`
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold hover:text-primary transition duration-300 ease-in-out ${
              isActive ? "underline underline-offset-3  text-primary " : ""
            }`
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold hover:text-primary transition duration-300 ease-in-out ${
              isActive ? "underline underline-offset-3  text-primary " : ""
            }`
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
      {/* right navbar */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex px-2 items-center border border-gray-300 rounded bg-gray-100 h-8 w-60">
          <input
            type="text"
            placeholder="What are you looking for?"
            ref={inputref}
            className="placeholder:text-sm w-[90%] outline-0"
          />
          <IoIosSearch className="cursor-text" onClick={handleSearchIcon} />
        </div>
        <div className="h-6 w-6 cursor-pointer">
          <IoIosHeartEmpty className="h-full w-full object-cover" />
        </div>
        <Link to={"/cart"} className="h-6 w-6 cursor-pointer">
          <IoCartOutline className="h-full w-full object-cover" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
