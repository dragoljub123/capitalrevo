import React from "react";
import goldexpertlogo2 from "../images/goldexpertlogo2.png";
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
    <div className="  bg-black">
      <footer className="lg:flex  justify-between  border-b-[1px] mb-5">
        <div className="flex-col justify-center items-center">
          <Link href={"/"}>
            <Image src={glogo} alt="slika" className=" w-full" />
          </Link>
          <p className="text-sm text-white">
            Empower Your Trading Journey with CapitalRevo
          </p>
        </div>

        <ul className="  text-white  lg:gap-7">
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

        <div className="social-icons flex gap-4  justify-center items-center my-4 text-white">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </footer>
      <p className=" text-center ">2024 CapitalRevo. All rights reserved</p>
    </div>
  );
};
