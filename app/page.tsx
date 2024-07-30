import Image from "next/image";

import Smalcard from "./components/Smalcard";
import Stars from "@/app/images/1Star.png";

import { Navbar } from "./components/Navbar";
import SmallcardThree from "./components/SmallcardThree";
import BigCard3 from "./components/BigCard3";
import moneyrise2 from "@/public/moneyrise2.png";
import devojka from "@/public/devojka.png";
import PopupButton from "./components/PopupButton";

export default function Home() {
  return (
    <div>
      <div className="pozadina  ">
        <Navbar />
        <div className="my-40 slideUpAnimacija ">
          <div className="flex items-center justify-center   ">
            <Image
              src={Stars}
              alt="slika"
              className="max-h-screen object-contain"
            />
            <p className="text-white text-xs">
              {" "}
              &nbsp; RATED 4.8/5 on TRUSTPILOT&nbsp;{" "}
            </p>
          </div>
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
              <h1 className="text-2xl  text-white font-bold mb-6 mt-6 text-center lg:text-4xl">
                Earn Passive Income with
                <br></br>
                <span className="zlatnozuta flex items-center justify-center ">
                  AI Trading Robots
                </span>
              </h1>
              <p className="text-white mb-4 text-center ">
                Automated Trading Solutions for Gold, NASDAQ, Bitcoin, and Forex
                Markets
              </p>
              <PopupButton />
            </div>
          </div>
        </div>
      </div>

      <div className=" justify-center flex flex-col sm:flex-row  items-center py-20 gap-28 ">
        <div className=" flex flex-col items-center z-30">
          <BigCard3
            title2=" Gold"
            title=" AI Robot"
            imageSrc="\Group 125.png"
            description="Prioritizes gold trading, leveraging market downturns to 
           capitalize on opportunities.Utilizes advanced technical
            analysis to identify potential buying or selling moments."
          />
        </div>
        <div className=" flex flex-col items-center z-40">
          <BigCard3
            title2=" Forex "
            title="AI Robot"
            imageSrc="\Currency Exchange.png"
            description="Analyzes currency markets and executes trades with precision . Employs various strategies such as technical analysis and news-based trading to maximize profits."
          />
        </div>
      </div>
      <div className=" pozadinaboja bg-gradijent-pozadina">
        <div className="  flex flex-col  justify-between items-center  ">
          <div className=" my-10 w-fit border-b border-white flex flex-col  justify-between items-center">
            <h2 className=" text-4xl p-2  text-white font-bold">
              How it Works
            </h2>
            <p className="text-white text-sm m-4">
              Discover how our trading robots use AI algorithms to <br></br>{" "}
              analyze market trends and execute trades automatically
            </p>
          </div>
        </div>
        <div className=" belitekst  justify-center my-20 gap-10 flex flex-col sm:flex-row items-center">
          <SmallcardThree
            imageurlnumber="\one.png"
            imageUrl="\Financial Growth.png"
            title=" Market Analysis"
            description="Our robots continuously monitor the markets 24/7, using advanced algorithms to analyze data and identify trading opportunities."
            number="1"
          />
          <SmallcardThree
            imageurlnumber="\two.png"
            imageUrl="\Safety Box.png"
            title=" Automated Execution"
            description="Once a favorable condition is detected, the robot executes trades automatically, ensuring swift and accurate order placement."
            number="2"
          />
          <SmallcardThree
            imageurlnumber="\three.png"
            imageUrl="\Risk.png"
            title=" Risk Management"
            description="The robots are designed to maximize your returns by implementing proven trading strategies and minimizing risks through precise execution."
            number="3"
          />
        </div>
      </div>

      <div className=" mx-auto flex items-center justify-center ">
        <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
            Your Funds are
            <span className="zlatnozuta  "> Insured & Secure</span>
          </h1>
          <p className=" mb-4 text-center text-sm ">
            Trade with confidence knowing your funds are protected by real
            estate
          </p>
        </div>
      </div>
      <div className="sm:flex-row lg:flex  lg:justify-evenly">
        <Smalcard
          imageSrc1="/Money Bag.png"
          title="Insured Funds "
          text="Your funds are secured by 80% real estate collateral, ensuring both insurance and security on our trading robot platform."
        />
        <Smalcard
          imageSrc1="\Secure.png"
          title="Regulated and Secure "
          text="We adhere to strict regulatory standards and employ robust security measures to safeguard your assets."
        />
      </div>

      <div className=" nevidljivo-mob m-10 flex justify-center">
        <img src="\Section 6.png" alt="reviewcustomer" className="  " />
      </div>

      <div className="m-4 flex flex-col justify-center items-center lg:hidden md:hidden xl:hidden">
        <h1 className="text-2xl font-bold mb-6 mt-6 lg:text-4xl text-center">
          Happy Customers
        </h1>
        <p className="text-center mb-4 text-sm">
          Read the testimonials from our happy clients
        </p>
        <Image src={devojka} alt="slika" className="mb-4 w-2/3" />
      </div>

      <div className="pozadinaboja2 flex  justify-center items-center">
        <div className=" pozadina2 mb-10 mt-10">
          <div className="text-center lg:text-left lg:ml-16 lg:mt-36">
            <h1 className="text-2xl  text-white font-bold mb-6 mt-6  lg:text-4xl  ">
              Start Earning
              <span className="zlatnozuta">
                Passive <br></br>Income
              </span>
              <span>Today</span>
            </h1>
            <p className="text-white mb-4 ">
              Empower your financial future with our AI trading<br></br> robots
              and start earning passive income today.
            </p>
            <PopupButton />
          </div>
          <div className="">
            <Image
              src={moneyrise2}
              alt="slika"
              className="lg:hidden md:hidden xl:hidden mt-4 mb-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
