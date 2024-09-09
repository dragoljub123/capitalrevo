"use client";
import React from "react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TradingViewAdvancedChartWidget from "../components/TradingViewAdvancedChartWidget";
import TradingViewSymbolOverviewWidget from "../components/TradingViewSymbolOverviewWidget";
import Getintouch from "@/public/Getintouch.png";

export default function TradingPlatform() {
  const [activeTab, setActiveTab] = useState("advancedWidget");
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

      <div className="mx-5 mt-20 lg:flex lg:justify-center  mb-10">
        <div className="max-w-sirina md:flex">
          <div className="md:pl-0 md:pr-40">
            <div className="p-10 lg:p-0 lg:border-l-[4px] lg:border-gray-300">
              <div className="flex text-sm gap-2 md:flex md:flex-col md:gap-0">
                <div
                  className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500 cursor-pointer"
                  onClick={() => setActiveTab("advancedWidget")}
                >
                  <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                    Real-time data
                  </p>
                </div>
                <div
                  className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500 cursor-pointer"
                  onClick={() => setActiveTab("symbolOverviewWidget")}
                >
                  <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                    Customizable charts
                  </p>
                </div>
              </div>
              <div className="flex text-sm gap-2 mt-4 md:flex md:flex-col md:gap-0 md:mt-0">
                <div
                  className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500 cursor-pointer"
                  onClick={() => setActiveTab("image")}
                >
                  <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                    Mobile trading
                  </p>
                </div>
                <div
                  className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500 cursor-pointer"
                  onClick={() => setActiveTab("paymentMethods")}
                >
                  <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                    Secure transactions
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 flex justify-center items-center lg:p-0 lg:py-10">
              <Link href="https://platform.capitalrevo.com/login">
                <button className="px-4 py-3 gap-2 w-48 h-14 bg-[#1200FF] rounded-xl shadow-xs text-white">
                  Explore the Platform
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full">
            {activeTab === "image" && (
              <Image
                src="/monitor.png"
                alt="trade"
                width={600}
                height={600}
                style={{ width: "auto", height: "auto" }}
              />
            )}
            {activeTab === "advancedWidget" && (
              <div className="w-[640px] h-[400px]">
                <TradingViewAdvancedChartWidget />
              </div>
            )}
            {activeTab === "symbolOverviewWidget" && (
              <div className="w-[640px] ">
                <TradingViewSymbolOverviewWidget />
              </div>
            )}
            {activeTab === "paymentMethods" && (
              <div className=" ml-32">
                <div className=" flex    space-x-12">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
                    <Image
                      src="/visa.png"
                      alt="visa"
                      fill
                      sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
                    <Image
                      src="/master2.png"
                      alt="master2"
                      fill
                      sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
                    <Image
                      src="/master.png"
                      alt="master"
                      fill
                      sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
                    <Image
                      src="/apay.png"
                      alt="applepay"
                      fill
                      sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
                    <Image
                      src="/gpay.png"
                      alt="gpay"
                      fill
                      sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F4] hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center">
        <Image
          src={Getintouch}
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
