import React from "react";
import { Navbar } from "../components/Navbar";
import TradingViewWidgetNews from "../components/TradingViewWidgetNews";
import TradingViewEventsWidget from "../components/TradingViewEventsWidget";
import TradingViewWidgetNews2 from "../components/TradingViewWidgetNews2";
import TradingViewEventsWidget2 from "../components/TradingViewEventsWidget2";
import { Metadata } from "next";
import DailyNewsWidget from "../components/DailyNewsWidget";

export const metadata: Metadata = {
  title: "News | CapitalRevo",
  description:
    "Discover the latest updates and insights from Capital Revo. Stay ahead with news on industry trends, innovations, and company announcements.",
  alternates: {
    canonical: "https://capitalrevo.com/news",
  },
};

export default function News() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-20 pb-10 flex-row justify-center items-center">
          <h1 className=" naslovboja2 text-center text-4xl font-bold mt-10">
            Stay Updated with the Latest Market News
          </h1>
          <div className="flex justify-center ">
            <p className="text-center text-[#475467]  p-4 max-w-[900px] ">
              Keeping up with market news is essential for every trader. At
              CapitalRevo, we provide you with real-time news and analysis to
              keep you informed of every market movement, ensuring you&apos;re
              always ready to make your next trade.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 pl-4 mx-auto  md:pl-20 lg:flex-row lg:justify-between lg:pl-28  lg:items-center max-w-sirina">
        <div className=" ">
          <h3 className="text-2xl py-2 text-black font-bold mb-6  lg:text-4xl  ">
            Latest News
          </h3>
          <p className=" mb-4  text-sm max-w-[600px]">
            Our integrated news feed covers breaking stories across forex,
            stocks, commodities, and more. Whether you&apos;re trading
            currencies or looking for stock market analysis, we&apos;ve got you
            covered.
          </p>
        </div>

        <div className="max-w-sirina ">
          <div className=" hidden md:block  ">
            <TradingViewWidgetNews />
          </div>
          <div className=" block md:hidden ">
            <TradingViewWidgetNews2 />
          </div>
        </div>
      </div>

      <div className=" pl-4 mx-auto mt-10 md:pl-20 lg:flex-row lg:justify-between lg:pl-28  lg:items-center max-w-sirina pb-20">
        <div className=" ">
          <h3 className="text-2xl py-2 text-black font-bold mb-6 mt-6  lg:text-4xl  ">
            Expert Commentary
          </h3>
          <p className=" mb-4  text-sm max-w-[600px]">
            Our team of financial analysts breaks down the news into actionable
            insights. Get detailed explanations on how market events can affect
            your portfolio, and make well-informed decisions.
          </p>
        </div>

        <div className="max-w-sirina ">
          <div className="hidden md:block ">
            <TradingViewEventsWidget />
          </div>
          <div className=" block md:hidden ">
            <TradingViewEventsWidget2 />
          </div>
        </div>
      </div>
    </div>
  );
}
