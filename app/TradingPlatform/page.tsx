"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Strategygetintouch from "@/public/strategygetintouch.svg";
import TabsComponent from "../components/TabsComponent";

export default function TradingPlatform() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-20 pb-10 flex-row justify-center items-center">
          <h1 className=" naslovboja2 text-center text-4xl font-bold mt-10">
            Trade with Confidence on the CapitalRevo Platform
          </h1>
          <div className="flex justify-center ">
            <p className="text-center text-[#475467] mt-10 p-4 max-w-[900px] ">
              At CapitalRevo, we pride ourselves on offering a platform designed
              for both novice and experienced traders. Our trading platform
              provides real-time data, advanced charting tools, and an intuitive
              user interface to make trading as seamless as possible.
            </p>
          </div>
        </div>
      </div>

      <TabsComponent />

      <div className="bg-[#F4F4F4] hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center">
        <Image
          src={Strategygetintouch}
          alt="webinars1"
          width={1440}
          height={400}
          className=" object-contain "
        />
      </div>
      <div className="bg-[#F4F4F4] flex justify-center items-center md:hidden lg:hidden">
        <Image
          src="/Getintouchmob.png"
          alt="webinars"
          width={380}
          height={672}
          className=" object-contain "
        />
      </div>
    </div>
  );
}
