import React from "react";
import { Link } from "react-router-dom";
import Carts from "./Carts";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  return (
    <div className="w-full flex justify-between h-20 bg-gradient-to-r from-slate-500 to-neutral-600">
      <div className="flex text-yellow-100 ml-3 py-4 px-2 mx-3 ">
        <Link
          to={"/"}
          className="px-3 text-lg uppercase hover:text-2xl hover:font-bold"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="px-3 text-lg uppercase hover:text-2xl hover:font-bold"
        >
          About Us
        </Link>
        <Link
          to={"/contacts"}
          className="px-3 text-lg uppercase hover:text-2xl hover:font-bold"
        >
          Contacts
        </Link>
        <Link
          to={"/products"}
          className="px-3 text-lg uppercase hover:text-2xl hover:font-bold"
        >
          Products
        </Link>
      </div>
      <div className="flex px-4 py-2">
        <h1 className="text-4xl px-2 font-bold text-yellow-50 ">CheloyTec</h1>
      </div>
      <div className="button">
        <Link
          to={"/login"}
          className="
       signup btn btn-outline-light ms-2"
        >
          <li>
            <i className="fa fa-sign-in me-1"></i>Login
          </li>
        </Link>
        <Link
          to={"/register"}
          className="
       signup btn btn-outline-light ms-2"
        >
          <li>
            <i className="fa fa-user-plus me-1"></i>Register
          </li>
        </Link>
        <Link
          to={"/cart"}
          className="
       signup btn btn-outline-light ms-2"
        >
          <li>
            <i className="fa fa-shopping-cart me-1"></i>Cart ()
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
