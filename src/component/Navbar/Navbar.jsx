import "./Navbar.css";
import logo3 from "../Assets/logo3.png";
import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar({ setshowAccount }) {
  const cart = useSelector((state) => state.cart.cart);

  const [showHiddenMenu, setshowHiddenMenu] = useState(false);

  return (
    <div className="navbar flex justify-between px-10 -md:px-7 -xsm:px-4 py-3 -xsm:py-2 nav-bg relative z-30  ">
      <div
        className={`${
          showHiddenMenu ? " top-12" : "-top-72"
        } hidden-menu fixed -z-10 transition-all  w-full p-8  right-0  nav-bg flex  justify-center items-center`}
      >
        <ul className="nav-menu text-lg flex flex-col items-center gap-12">
          <NavLink to={""}>
            <li onClick={() => setshowHiddenMenu(false)}>Home</li>
          </NavLink>
          <NavLink to={"/Product"}>
            <li onClick={() => setshowHiddenMenu(false)}>Product</li>
          </NavLink>
          <NavLink>
            <li
              onClick={() => {
                setshowAccount(true);
                setshowHiddenMenu(false);
              }}
            >
              Contact
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="nav-logo flex items-center justify-center gap-2">
        <img src={logo3} alt="error" className=" w-14 -xsm:w-9" />
        <p className="text-2xl -xsm:text-xl font-bold">BAZAR</p>
      </div>

      <ul className="nav-menu text-lg flex items-center gap-12 -md:hidden">
        <NavLink to={""}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/Product"}>
          <li>Product</li>
        </NavLink>
        <NavLink>
          <li onClick={() => setshowAccount(true)}>Contact</li>
        </NavLink>
      </ul>
      <div className="nav-login-cart flex items-center gap-3 ">
        <div className="relative">
          <NavLink to={"/cart"}>
            <HiMiniShoppingCart className="text-3xl -xsm:text-3xl transition-all hover:scale-105 " />
            <div className="nav-cart text-xs count w-4 absolute -top-2 -right-2 h-4 flex justify-center items-center bg-red-600 text-white rounded-full">
              {cart.length}
            </div>
          </NavLink>
        </div>
        <TiThMenu
          style={{ transform: showHiddenMenu ? "rotate(180deg)" : "" }}
          className="hidden -md:flex -xsm:text-2xl text-3xl transition-all"
          onClick={() => setshowHiddenMenu((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default Navbar;
