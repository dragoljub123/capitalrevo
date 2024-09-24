"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TradingViewAdvancedChartWidget from "../components/TradingViewAdvancedChartWidget";
import TradingViewSymbolOverviewWidget from "../components/TradingViewSymbolOverviewWidget";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("advancedWidget");

  return (
    <div className="mx-5 mt-20 lg:flex lg:justify-center mb-10">
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
        <div className="relative w-full min-h-[500px] flex justify-center">
          {activeTab === "image" && (
            <Image
              src="/Screenapp.svg"
              alt="trade"
              width={640}
              height={390}
              style={{ objectFit: "contain" }}
            />
          )}
          {activeTab === "advancedWidget" && (
            <div className="h-[500px] w-[380px] lg:w-[640px]">
              <TradingViewAdvancedChartWidget />
            </div>
          )}
          {activeTab === "symbolOverviewWidget" && (
            <div className="h-[500px] md:w-[640px]">
              <TradingViewSymbolOverviewWidget />
            </div>
          )}
          {activeTab === "paymentMethods" && (
            <div className="w-[640px] flex justify-center space-x-4">
              {[
                "/Visa_2021.svg",
                "/Mastercard-logo.svg",
                "/Maestro.svg",
                "/apple-pay-logo.svg",
                "/Google_Pay_Logo.svg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20"
                >
                  <Image
                    src={src}
                    alt={`payment-method-${index}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
