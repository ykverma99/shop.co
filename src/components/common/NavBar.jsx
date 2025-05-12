import React, { useRef, useState } from "react";
import { IoIosSearch, IoMdLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiLockPasswordLine, RiShoppingBag2Line } from "react-icons/ri";
import { logout } from "../../features/authSlice";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const inputref = useRef(null);
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchIcon = () => {
    inputref.current?.focus();
  };

  const handleUser = () => {
    if (!isAuthenticate) {
      navigate("/auth/login");
      return;
    }
    setIsMenu((prev) => !prev);
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
        <Link to={"/cart"} className="h-6 w-6 cursor-pointer">
          <IoCartOutline className="h-full w-full object-cover" />
        </Link>
        <div className="relative">
          <div onClick={handleUser} className="h-6 w-6 cursor-pointer">
            <FaRegUserCircle className="h-full w-full object-cover" />
          </div>
          {isMenu ? (
            <div className="absolute flex flex-col gap-3 right-0 top-10 bg-white shadow-2xl border border-gray-200 rounded-lg w-52 p-3 transition duration-300  ease-in-out">
              <div className="flex items-center gap-2 cursor-pointer">
                <RiLockPasswordLine />
                <p>Change Password</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <RiShoppingBag2Line />
                <Link to={"/order"}>Check Order</Link>
              </div>
              <div
                onClick={() => {
                  dispatch(logout());
                  setIsMenu((prev) => !prev);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <IoMdLogOut />
                <p>Log Out</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
