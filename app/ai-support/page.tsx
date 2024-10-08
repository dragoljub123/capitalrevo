import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import AiPageM from "../components/AiPageM";

export const metadata: Metadata = {
  title: "Ai Support | CapitalRevo",
  description:
    "AI trading systems effortlessly perform complex technical analyses across multiple markets",
  alternates: {
    canonical: "https://capitalrevo.com/ai-support",
  },
};

export default function AiSupport() {
  return (
    <div className="mx-auto bg-[#191A1E]">
      <Navbar />
      <h2 className=" hidden md:block  pt-32 text-white text-4xl text-center font-bold mb-4 ">
        CapitalRevo AI support
      </h2>
      <div className="hidden md:flex  justify-center ">
        <hr className="border-t-[1px] border-[#990033] w-[50%] my-2 " />
      </div>
      <h3 className="hidden md:block  text-2xl mt-6 text-white font-bold text-center">
        Leave out the guessing from your trading success!
      </h3>
      <div className=" hidden md:flex md:justify-center  pt-10 ">
        <div className="max-w-screen-xl flex justify-center text-white  h-[470px] ">
          {/* Leva strana */}

          <div className="px-4 xl:px-10  ">
            <h3 className="text-xl mb-4 font-bold text-[#990033] ">
              AI - Your Fast Track to Profitable Trading
            </h3>

            {/* Prvi paragraf */}
            <div className="mb-4">
              <p className="text-sm">
                Unlock the power of CapitalRevo&apos;s AI-powered trading
                platform and seize opportunities in the ever-changing foreign
                exchange markets.
              </p>
            </div>

            {/* Drugi paragraf */}
            <div className="mb-4">
              <p className="text-sm">
                With CapitalRevo, you can capitalize on price fluctuations in
                one of the world&apos;s most dynamic arenas.
              </p>
            </div>

            {/* Treći paragraf */}
            <div className="mb-4">
              <p className="text-sm">
                Our web trader and mobile app leverage cutting-edge machine
                learning technology to trade across a wide spectrum of major,
                minor, and exotic currency pairs.
              </p>
            </div>

            {/* Četvrti paragraf */}
            <div className="mb-4">
              <p className="text-sm">
                Simply sign up, deposit your funds, and let CapitalRevo&apos;s
                AI handle the heavy lifting—automating analysis, risk
                management, and trade execution seamlessly.
              </p>
            </div>

            {/* Peti paragraf */}
            <div className="mb-4">
              <p className="text-sm">
                With AI in charge, you&apos;ll act on emerging opportunities in
                real-time, tapping into the trillions of dollars traded daily on
                this highly liquid market.
              </p>
            </div>
          </div>

          {/* Desna strana */}
          <div className="w-1/2 px-4 xl:px-10">
            <Image
              src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
              alt="Opis slike"
              width={500} // prilagodi širinu
              height={500} // prilagodi visinu
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex  justify-center ">
        <hr className="border-t-[1px] border-[#990033] w-[50%] my-4 " />
      </div>
      <div className=" hidden md:flex md:justify-center  pt-10">
        <div className="max-w-screen-xl flex justify-center text-white ">
          <div className="w-full p-4 xl:p-10">
            <Image
              src="/HP AI Image 2.png" // zameni sa putanjom do tvoje slike
              alt="Opis slike"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="text-white text-xs md:text-sm p-4 xl:p-10 ">
            <p className="mb-6">
              <strong>A Revolutionary AI Trading Bot</strong>
              <br />
              CapitalRevo&apos;s AI-driven bot is built with groundbreaking deep
              learning technology, delivering an exceptional trade win rate. Our
              proprietary blend of machine learning and natural language
              processing models sets a new standard in the evolution of
              AI-powered trading.
            </p>

            <p className="mb-6">
              <strong>AI That Thinks Like You</strong>
              <br />
              Harnessing the latest deep neural networks, CapitalRevo&apos;s AI
              algorithms mimic the human brain, continuously learning from
              trades, user behavior, and vast datasets. This allows it to
              anticipate market movements with ever-increasing accuracy.
            </p>

            <p className="mb-6">
              <strong>Big Data Meets Precision Trading</strong>
              <br />
              With the ability to process massive datasets, CapitalRevo&apos;s
              AI scours both traditional and alternative data sources from
              around the globe. Whether it&apos;s economic trends or specific
              asset-class insights, our AI forex bot analyzes it all to deliver
              smarter, faster trades.
            </p>

            <p className="mb-6">
              <strong>Mastering Risk Management</strong>
              <br />
              Our AI doesn&apos;t just trade—it protects. Using sophisticated
              mathematical models, the system continuously refines risk
              parameters, balancing potential gains with effective risk
              mitigation. The result? Optimized profits with minimized exposure.
            </p>

            <p className="mb-4">
              <strong>Smart, Data-Driven Decisions</strong>
              <br />
              CapitalRevo&apos;s AI evaluates a wealth of data from global
              markets in multiple languages, from real-time news updates to
              historical price trends. Combining technical indicators and deep
              analysis, it ensures every trade is executed at just the right
              moment.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center ">
        <hr className="border-t-[1px] border-[#990033] w-[50%] my-4 " />
      </div>
      <div className="hidden md:flex md:justify-center pt-10">
        <div className="max-w-screen-xl flex justify-center text-white">
          {/* Deo sa tekstom */}
          <div className=" p-4 xl:p-10">
            {/* Naslov */}
            <h1 className="text-[#990033] text-3xl font-bold ">
              Why Choose AI for Forex Trading?
            </h1>

            {/* Mali naslov */}
            <h2 className="text-white text-2xl font-bold my-4">
              With AI at the helm, you&apos;ll benefit from:
            </h2>

            {/* Paragrafi sa tekstom */}
            <p className="text-white text-sm  my-4">
              <strong>Lightning-fast execution:</strong> Never miss a trading
              opportunity
            </p>
            <p className="text-white text-sm my-4">
              <strong>Efficiency and speed:</strong> Save time and cut
              operational costs
            </p>
            <p className="text-white text-sm my-4">
              <strong>Advanced data processing:</strong> Analyze multiple
              sources in seconds
            </p>
            <p className="text-white text-sm my-4">
              <strong>Automated risk management:</strong> Assess and mitigate
              exposure with ease
            </p>
            <p className="text-white text-sm my-4">
              <strong>Enhanced pattern recognition:</strong> Spot emerging
              trends faster than ever
            </p>
            <p className="text-white text-sm my-4">
              <strong>Emotion-free decisions:</strong> Pure logic, no emotional
              bias
            </p>
            <p className="text-white text-sm my-4">
              <strong>Scalability:</strong> Handle a high volume of forex trades
              simultaneously
            </p>

            <p className="text-[#990033] text-xl font-bold my-8">
              Ready to redefine your trading experience? <br />
              Let CapitalRevo&apos;s AI put you on the fast track to success.
            </p>

            {/* Dugme */}
            <div className="mt-10 flex justify-center">
              <Link href="/accounts">
                <button className="bg-white text-navcolor py-2 px-4 rounded shadow hover:bg-gray-100 transition">
                  Let&apos;s Begin
                </button>
              </Link>
            </div>
          </div>

          {/* Deo sa slikom */}
          <div className="w-1/2 p-4 xl:p-10 flex justify-center items-center">
            <Image
              src="/HP AI Image 3.png" // zameni sa putanjom do tvoje slike
              alt="Opis slike"
              width={500} // prilagodi širinu
              height={500} // prilagodi visinu
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-center bg-[#191A1E] ">
        <AiPageM />
      </div>
    </div>
  );
}
