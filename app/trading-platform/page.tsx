"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Strategygetintouch from "@/public/strategygetintouch.svg";
import WidgetsCalculators from "../components/WidgetsCalculators";
import Link from "next/link";
<<<<<<< HEAD
import MobileWidgetsCalculators from "../components/MobileWidgetsCalculators";
=======

import MobileWidgetsCalculators from "../components/MobileWidgetsCalculators";


>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
export default function TradingPlatform() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-10 md:pt-20 pb-5 flex-row justify-center items-center">
          <h1 className=" text-[#00dbfe] text-center text-4xl font-bold mt-10">
            Trade with Confidence on the CapitalRevo Platform
          </h1>
          <div className="flex justify-center ">
            <p className="text-center text-[#475467] p-4 max-w-[900px] ">
              At CapitalRevo, we pride ourselves on offering a platform designed
              for both novice and experienced traders. Our trading platform
              provides real-time data, advanced charting tools, and an intuitive
              user interface to make trading as seamless as possible.
            </p>
          </div>
        </div>
        <div className="flex relative justify-center pb-5">
<<<<<<< HEAD
          <div className="relative ">
=======
            <div className="relative ">
>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
            <Link href="https://platform.capitalrevo.com/login">
              <h2 className="  absolute top-1/2 p-4 w-fit h-fit bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800 ">
                Real-time data
              </h2>
<<<<<<< HEAD
            </Link>
            <img
              src="/Screenapp.svg"
              alt="CapitalRevo Trading platform"
              width={600}
              height={390}
              style={{ objectFit: "contain" }}
            />{" "}
            <div className="absolute top-2/3 right-0  w-fit h-fit p-2 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white">
              <Link href="https://platform.capitalrevo.com/login">
                <h2 className="text-xs md:text-xl font-black text-gray-800 p-2 md:px-10">
                  Trading Platform
                </h2>
              </Link>
            </div>
            <Link href="https://platform.capitalrevo.com/login">
              <h2 className=" absolute top-10 right-0 w-fit h-fit p-4 bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800">
                Customizable charts
              </h2>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="dektop-widgets">
        <div className="max-w-screen-xl mx-auto">
          <h2 className=" text-[#00dbfe] text-center text-3xl font-black pt-10 pb-2">
=======
              </Link>
              <img
                src="/Screenapp.svg"
                alt="CapitalRevo Trading platform"
                width={600}
                height={390}
                style={{ objectFit: "contain" }}
              />
              
              <div className="absolute top-2/3 right-0  w-fit h-fit p-2 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white">
              <Link href="https://platform.capitalrevo.com/login">
                  <h2 className="text-xs md:text-xl font-black text-gray-800 p-2 md:px-10">
                    Trading Platform
                  </h2>
                </Link>
              </div>
              <Link href="https://platform.capitalrevo.com/login">
              <h2 className=" absolute top-10 right-0 w-fit h-fit p-4 bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800">
                Customizable charts
              </h2>
              </Link>
            </div>
          </div>
      </div>

      

      <div className="dektop-widgets">
        <div className="max-w-screen-xl mx-auto">
          <h2 className=" text-center text-3xl font-bold pt-10 pb-2">
>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
            CapitalRevo Trading Tools!
          </h2>
          <p className="text-center text-[#475467] px-14 pb-2">
            Tools designed to help you make SMART DECISIONS!
          </p>
          <div className="hidden md:block">
            <WidgetsCalculators />
          </div>
          <div className="block md:hidden">
            <MobileWidgetsCalculators />
          </div>
        </div>
<<<<<<< HEAD
      </div>{" "}
=======
      </div>


>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
      <div className="hidden md:block lg:flex max-w-screen-xl mx-auto xl:px-10">
        <Image
          src={Strategygetintouch}
          alt="Get the capitalrevo app"
          width={1440}
          height={400}
          className=" object-contain "
        />
      </div>
<<<<<<< HEAD
      <div className="flex justify-center items-center md:hidden lg:hidden w-full h-screen relative">
        {" "}
        {/* Postavi relative */}
        <Image
          src="/TradeOngo.svg"
          alt="Get the capitalrevo app for ios or android"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>{" "}
=======
      <div className="flex justify-center items-center md:hidden lg:hidden w-full h-screen relative"> {/* Postavi relative */}
    <Image
        src="/TradeOngo.svg"
        alt="Get the capitalrevo app for ios or android"
        layout="fill" 
        objectFit="cover" 
        className="object-cover" 
    />
</div>

>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
    </div>
  );
}
