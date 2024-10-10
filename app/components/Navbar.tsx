"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import SingUpbutton from "../components/SingUpbutton";
import Logindugme from "../components/Logindugme";

export const Navbar = () => {
  const navigation = [
    { title: "About Us", href: "/about-us" },
    { title: "Trading Platform", href: "/trading-platform" },
    { title: "AI Support", href: "/ai-support" },
    { title: "Accounts", href: "/accounts" },
    { title: "Education", href: "/education" },
    { title: "News", href: "/news" },
    { title: "Contact Us", href: "/contact-us" },
  ];
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
    <div className="fixed mx-auto w-full h-12 sm:h-16 z-50 bg-navcolor">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-10 xl:px-10 h-full">
        <Logo title="Capitalrevo" className="text-black" />
        <div className="hidden lg:flex lg:items-center gap-10 lg:gap-3 xl:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-xs xl:text-xs hover:text-customBlue text-white"
            >
              {item.title}
            </Link>
          ))}
          <Logindugme>Login</Logindugme>
          <SingUpbutton>Sign Up</SingUpbutton>
        </div>

        <div className="fixed right-0 px-4 lg:hidden">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {showLinks && (
            <div className="fixed top-0 left-0 w-full h-fit bg-navcolor text-white p-4 shadow-lg transition-transform transform translate-x-0 z-50">
              <div className="flex justify-between">
                <Logo title="Capitalrevo" className="text-black" />
                <button
                  onClick={toggleLinks}
                  className="text-white text-3xl focus:outline-none mb-4"
                >
                  &times;
                </button>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block mb-4 hover:text-customBlue p-1 text-sm"
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
