"use client";

import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import "../globals.css";
import { useState } from "react";

import SingUpbutton from "../components/SingUpbutton";
import Logindugme from "../components/Logindugme";

export const Navbar = () => {
  const navigation = [
    { title: "About Us", href: "/AboutUS" },
    { title: "Accounts", href: "/Accounts" },
    { title: "Trading Platform", href: "/Trading Platform" },
    { title: "Education", href: "/Education" },
    { title: "News", href: "/News" },
    { title: "Contact Us", href: "/Contact Us" },
  ];
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="w-full h-16 z-50 bg-navcolor">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Capitalrevo" className="text-black" />
        <div className="hidden lg:inline-flex items-center gap-10 ">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm hover:text-zlatna text-white  "
            >
              {item.title}
            </Link>
          ))}
          <Logindugme>Login</Logindugme>
          <SingUpbutton>Sign Up</SingUpbutton>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {showLinks && (
            <div className="fixed top-0 right-0 w-64 h-full bg-navcolor text-white p-4 shadow-lg transition-transform transform translate-x-0 z-50">
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
                  className="block mb-4 hover:text-zlatna"
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
