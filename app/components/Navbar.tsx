"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import SingUpbutton from "../components/SingUpbutton";
import Logindugme from "../components/Logindugme";
import "../globals.css";

export const Navbar = () => {
  const navigation = [
    { title: "About Us", href: "#AboutUs" },
    { title: "Accounts", href: "#Accounts" },
    { title: "Trading Platform", href: "#TradingPlatform" },
    { title: "Education", href: "#Education" },
    { title: "News", href: "#News" },
    { title: "Contact Us", href: "#ContactUs" },
  ];
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
    <div className="fixed mx-auto w-full h-10 sm:h-16 z-50 bg-navcolor lg:relative ">
      <div className="  max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Capitalrevo" className="text-black " />
        <div className="hidden lg:flex lg:items-center gap-10 text-xs   lg:text-md">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm hover:text-customBlue text-white"
            >
              {item.title}
            </Link>
          ))}
          <Logindugme>Login</Logindugme>
          <SingUpbutton>Sign Up</SingUpbutton>
        </div>

        <div className=" fixed right-0 px-4 lg:hidden">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {showLinks && (
            <div className=" fixed top-0 right-0 w-64 h-full bg-navcolor text-white p-4 shadow-lg transition-transform transform translate-x-0 z-50">
              <button
                onClick={toggleLinks}
                className="text-white text-2xl focus:outline-none mb-4"
              >
                &times;
              </button>
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block mb-4 hover:text-customBlue"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}
              <Logindugme>Login</Logindugme>
              <SingUpbutton>Sign Up</SingUpbutton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
