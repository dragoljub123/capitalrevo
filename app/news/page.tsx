import React from "react";
import { Navbar } from "../components/Navbar";
import TradingViewWidgetNews from "../components/TradingViewWidgetNews";
import TradingViewEventsWidget from "../components/TradingViewEventsWidget";
import TradingViewWidgetNews2 from "../components/TradingViewWidgetNews2";
import TradingViewEventsWidget2 from "../components/TradingViewEventsWidget2";
import { Metadata } from "next";
import DailyNewsWidget from "../components/DailyNewsWidget";
import TradingViewWidgetNews3 from "../components/TradingViewWidgetNews3";
import EconomicCalendar from "../components/EconomicCalendar";
import DailySignals from "../components/DailySignals";
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
        <div className="pt-20 pb-5 flex flex-col items-center">
          <h1 className="text-[#00dbfe] font-black text-center text-4xl md:mt-10">
            Stay Updated with the Latest Market News
          </h1>
          <p className="text-center text-[#475467] p-4 max-w-[900px]">
            Keeping up with market news is essential for every trader. At
            CapitalRevo, we provide you with real-time news and analysis to keep
            you informed of every market movement, ensuring you&apos;re always
            ready to make your next trade.
          </p>
        </div>
      </div>
      <DailyNewsWidget />
      <div className="max-w-screen-xl mx-auto xl:px-20">
        <div className=" pb-5 flex flex-col items-center">
          <h2 className="text-[#00dbfe] text-center text-4xl font-black mt-6">
            Daily Signals
          </h2>
        </div>
        <div className="max-w-screen-xl ">
          <DailySignals />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="pt-5 pb-5 flex flex-col items-center">
          <h2 className="text-[#00dbfe] text-center text-4xl font-black mt-6">
            Economic Calendar
          </h2>
          <p className="text-center text-[#475467] p-4 max-w-[900px]">
            Economic Calendar covers financial events and indicators from all
            over the world. It&apos;s automatically updated when new data is
            released. All events, interest rate, prices & inflation, labour
            market, GDP growth, foreign trade, government, business confidence,
            consumer sentiment, housing market.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 sm:px-0">
          <EconomicCalendar />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="pt-5 pb-5 flex flex-col items-center">
          <h2 className="text-[#00dbfe] text-center text-4xl font-black mt-6">
            Latest News
          </h2>
          <p className="text-center text-[#475467] p-4 max-w-[900px]">
            Our integrated news feed covers breaking stories across forex,
            stocks, commodities, and more. Whether you&apos;re trading
            currencies or looking for stock market analysis, we&apos;ve got you
            covered.
          </p>
          <div className="max-w-screen-xl text-center">
            <div className="hidden lg:block">
              <TradingViewWidgetNews />
            </div>
            <div className="hidden md:block lg:hidden text-center">
              <TradingViewWidgetNews3 />
            </div>
            <div className="block md:hidden text-center">
              <TradingViewWidgetNews2 />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="pt-5 pb-5 flex flex-col items-center">
          <h2 className="text-[#00dbfe] text-center text-4xl font-black mt-6">
            Expert Commentary
          </h2>
          <p className="text-center text-[#475467] p-4 max-w-[900px]">
            Our team of financial analysts breaks down the news into actionable
            insights. Get detailed explanations on how market events can affect
            your portfolio, and make well-informed decisions.
          </p>
          <div className="max-w-screen-xl">
            <div className="hidden lg:block">
              <TradingViewEventsWidget />
            </div>
            <div className="block lg:hidden">
              <TradingViewEventsWidget2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
