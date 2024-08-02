import Image from "next/image";
import { Navbar } from "../components/Navbar";
import trustpilotlogo from "@/app/images/trustpilot-logo.png";
import licence from "../images/licence 1.png";
import safety from "../images/safety 1.png";
import star from "../images/1Star.png";
import investImg from "../images/Untitled-12 1.png";
import earthImg from "../images/earth.png";
import sealImg from "../images/seal-variant.png";
import faceAgentImg from "../images/face-agent.png";
import cashImg from "../images/cash-multiple.png";
import schoolImg from "../images/school-outline.png";
import chartImg from "../images/chart-bar.png";

export default function AboutUs() {
  return (
    <div className="max-w-sirina mx-auto ">
      <div className="  ">
        <Navbar />
        <div className="aboutuspozadina">
          <div className="slideUpAnimacija inset-0 flex items-center text-left text-white p-10 md:p-10 lg:pl-32 lg:pt-24">
            <div className="max-w-lg">
              <h1 className="text-2xl text-white font-bold lg:text-5xl lg:mt-10 lg:ml-0">
                Global Leading Online
                <br /> Trading Provider
              </h1>
              <p className="text-sm md:text-lg mt-8">
                Capital Revo is a leading global online trading provider,
                offering trading with Forex and CFDs, indices, precious metals,
                energy, and cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
        <div className="sivkasta pt-20 pb-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-32">
          <h2 className="text-4xl font-bold mb-4">
            Capital Revo - A Trusted Broker
          </h2>
          <p className="text-sm w-full sm:w-3/4 md:w-2/3 lg:w-3/5">
            As a strong proponent of transparency, we establish the highest
            standards of safety for our clients' funds. For this reason, client
            funds are kept in major international banks and are fully segregated
            from the company's own funds.
          </p>
        </div>
        <div className="crafy ">
          <div className="flex flex-col md:flex-row md:space-x-4 p-8 m-8 lg:m-0 ">
            <div className="bg-white flex-1 mb-8 md:mb-0 border-[1px] border-gray-300 shadow-lg rounded-xl  p-8">
              <Image src={licence} alt="Licences and regulation" className="" />
              <h3 className="py-4 text-blue-800 font-bold">
                Licences and regulation
              </h3>
              <p className="text-sm text-gray-700 pt-2 pb-5">
                We offer Contracts for Difference (CFDs) on 6 asset classes:
                Forex, Shares, Spot Indices, Futures, Spot Metals and Spot
                Energy. We provide our clients with access to top-tier liquidity
                and advanced trade execution with no dealing desk intervention.{" "}
              </p>
            </div>
            <div className="bg-white flex-1 mb-8 md:mb-0 border-[1px] border-gray-300 shadow-lg rounded-xl  p-8">
              <Image
                src={safety}
                alt="Reliability, security and speed"
                className=""
              />
              <h3 className="py-4 text-blue-800 font-bold">
                Reliability, security and speed
              </h3>
              <p className="text-sm text-gray-700 pt-2 pb-5">
                We offer Contracts for Difference (CFDs) on 6 asset classes:
                Forex, Shares, Spot Indices, Futures, Spot Metals and Spot
                Energy. We provide our clients with access to top-tier liquidity
                and advanced trade execution with no dealing desk intervention.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pl-4 mt-4 sm:mt-0">
            <Image
              src={trustpilotlogo}
              alt="slika"
              className="max-h-screen object-contain"
            />
          </div>
        </div>

        <div className="about_investmentBox  ">
          <div className="investmentBox flex flex-col lg:flex-row items-center rounded-lg shadow-lg border-[1px] bg-white">
            <div className="investmentBox_content p-4">
              <h3 className="text-2xl font-bold mb-4">Certified Investment</h3>
              <p className="body-large mb-4">
                Deposits to trading accounts can be made in most national
                currencies. Additionally, if you want to protect your capital
                from currency fluctuation, you can have multiple trading
                accounts in different currencies at the same time.
              </p>
              <a href="https://client.kwakolmarkets.com/register">
                <button className="button bg-blue-500 text-white py-2 px-4 rounded">
                  Start trading
                </button>
              </a>
            </div>
            <div className="investmentBox_image">
              <Image
                src={investImg}
                alt="Investment"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="sivkasta  about_trade pt-20 pb-20">
          <div className="about_tradeContent text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Trade With Capital Revo
            </h2>
            <p className="body-large mb-10">
              Our strong dedication to state-of-the-art software and quality
              assurance means that our clients receive the best, most
              transparent trading experience.
            </p>
          </div>

          <div className="about_tradeBoxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image
                src={earthImg}
                alt="Global Presence"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image
                src={sealImg}
                alt="Award Winning Technology"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Award Winning Technology
              </h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image
                src={faceAgentImg}
                alt="Top-notch customer service"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Top-notch customer service
              </h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image
                src={cashImg}
                alt="Flexible Deposit Options"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Flexible Deposit Options
              </h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image
                src={schoolImg}
                alt="Education"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
            <div className="about_tradeBox flex flex-col items-center text-center p-6 rounded-lg shadow-lg border-[1px] bg-white">
              <Image src={chartImg} alt="Analysis" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p>
                Capital Group is now a global organization with regulated
                trading companies offering.
              </p>
            </div>
          </div>

          <div className="about_tradeButton text-center mt-8">
            <a href="https://client.kwakolmarkets.com/register">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                Start trading
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
