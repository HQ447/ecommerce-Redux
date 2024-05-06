import "./Navbar.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar({ setshowAccount }) {
  const cart = useSelector((state) => state.cart.cart);

  const [showHiddenMenu, setshowHiddenMenu] = useState(false);

  return (
    <div className="navbar flex justify-between px-10 -md:px-7 -xsm:px-4 py-3 nav-bg relative z-30  ">
      <div
        className={`${
          showHiddenMenu ? " top-16" : "-top-72"
        } hidden-menu fixed -z-10 transition-all  w-full p-8  right-0  nav-bg flex  justify-center items-center`}
      >
        <ul className="nav-menu text-lg flex flex-col items-center gap-12">
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
      </div>

      <div className="nav-logo flex items-center gap-2">
        <img src={logo} alt="" className=" w-12" />
        <p className="text-2xl font-bold">SHOPPER</p>
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
      <div className="nav-login-cart flex items-center gap-2 ">
        <div className="relative">
          <NavLink to={"/cart"}>
            <HiMiniShoppingCart className="text-3xl transition-all hover:scale-105 " />
            <div className="nav-cart text-xs count w-4 absolute -top-2 -right-2 h-4 flex justify-center items-center bg-red-600 text-white rounded-full">
              {cart.length}
            </div>
          </NavLink>
        </div>
        <TiThMenu
          className="hidden -md:flex  text-3xl"
          onClick={() => setshowHiddenMenu((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default Navbar;
