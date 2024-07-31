import React from "react";

import Image from "next/image";
import "../globals.css";
import glogo from "../images/crlogo.png";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { link } from "fs";

export const FooterHome: React.FC = () => {
  return (
    <div className=" max-w-sirina mx-auto bg-black  ">
      <div className="lg:flex  justify-between  border-b-[1px] mb-5">
        <div className="flex-col justify-center items-center">
          <Link href={"/"}>
            <Image src={glogo} alt="slika" className=" w-full" />
          </Link>
          <p className="text-sm text-white">
            Empower Your Trading Journey with CapitalRevo
          </p>
          <div className="social-icons flex gap-4   my-4 text-white">
            <a
              className="hover:bg-tirkizna transition duration-300 hover:rounded-full"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="hover:bg-tirkizna transition duration-300"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:bg-tirkizna transition duration-300 hover:rounded-full"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="lg:flex">
          <ul className="  text-white  lg:gap-7">
            <li>
              <p className="font-bold mb-4 ">Quick Links</p>
            </li>
            <li>
              <a href="\">Home </a>
            </li>
            <li>
              <a href="\Accounts">Accounts</a>
            </li>
            <li>
              <a href="\AboutUS">Trading Platform</a>
            </li>
            <li>
              <a href="\Education">Education</a>
            </li>
            <li>
              <a href="\FAQs">News</a>
            </li>
          </ul>
          <ul className="  text-white  lg:gap-7">
            <li>
              <p className="font-bold mb-4 ">Company</p>
            </li>
            <li>
              <a href="\">About Us </a>
            </li>
            <li>
              <a href="\Accounts">Contact Us</a>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <p className=" text-center text-white">© 2024, CapitalRevo</p>
        <div className=" text-white">
          <a className="" href="#">
            Privacy Policy
          </a>

          <a href="#">Terms of Service</a>

          <a href="#">Risk Disclaimer</a>
        </div>
      </div>
    </div>
  );
};
