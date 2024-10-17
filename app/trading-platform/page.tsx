"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Strategygetintouch from "@/public/strategygetintouch.svg";
import TabsComponent from "../components/TabsComponent";

import CurrencyCalculator from "../components/CurrencyCalculator";
import FibonacciCalculator from "../components/Fibonacci";
import PivotPoint from "../components/PivotPoint";
import CfdCalculator from "../components/CfdCalculator";
import StopLossLimit from "../components/StopLossLimit";
import MarginCalculator from "../components/MarginCalculator";
import PipValue from "../components/PipValue";
import Heatmap from "../components/Heatmap";
import WidgetsCalculators from "../components/WidgetsCalculators";
import Link from "next/link";

import MobileWidgetsCalculators from "../components/MobileWidgetsCalculators";


export default function TradingPlatform() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-10 md:pt-20 pb-5 flex-row justify-center items-center">
          <h1 className=" text-blue-500 text-center text-4xl font-bold mt-10">
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
            <div className="relative ">
              <h2 className="  absolute top-1/2 p-4 w-fit h-fit bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800 ">
                Real-time data
              </h2>
              <img
                src="/Screenapp.svg"
                alt="CapitalRevo Trading platform"
                width={600}
                height={390}
                style={{ objectFit: "contain" }}
              />
              
              <div className="absolute top-2/3 right-0  w-fit h-fit p-2 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white">
                <Link href="/trading-platform">
                  <h2 className="text-xs md:text-xl font-black text-gray-800 p-2 md:px-10">
                    Trading Platform
                  </h2>
                </Link>
              </div>
              <h2 className=" absolute top-10 right-0 w-fit h-fit p-4 bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800">
                Customizable charts
              </h2>
            </div>
          </div>
      </div>

      

      <div className="dektop-widgets">
        <div className="max-w-screen-xl mx-auto">
          <h2 className=" text-center text-3xl font-bold pt-10 pb-2">
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
      </div>


      <div className="hidden md:block lg:flex max-w-screen-xl mx-auto xl:px-10">
        <Image
          src={Strategygetintouch}
          alt="Get the capitalrevo app"
          width={1440}
          height={400}
          className=" object-contain "
        />
      </div>
      <div className="flex justify-center items-center md:hidden lg:hidden">
      <Image
          src="/TradeOngo.svg"
          alt="Get the capitalrevo app for ios or android"
          width={380}
          height={672}
          className=" object-contain "
        />
      </div>
    </div>
  );
}
