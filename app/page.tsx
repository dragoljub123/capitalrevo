import Image from "next/image";
import { Navbar } from "./components/Navbar";
import TradingViewWidget from "./components/TradingViewWidget";
import Smalcard from "./components/Smalcard";
import Paketi from "./components/Paketi";
import Marketwatch from "@/public/morning.svg";
import MorningStar from "@/public/whitemorningstarlogo.png";
import Buisnisinsider from "@/public/whitebuisnisinsiderlogo.png";
import katman from "@/public/katman.png";
import ContactForm from "@/app/components/ContactForm";
import trustpilotlogo from "@/app/images/stars-45.svg";
import trustpilotlogo2 from "@/app/images/trustpilot-1.svg";
import CustomerCard from "./components/CustomerCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utilitis/interface";
import { Paket } from "@/app/utilitis/interface";
import TradingViewWidgetNews from "./components/TradingViewWidgetNews";
import TradingViewWidgetNews2 from "./components/TradingViewWidgetNews2";
import TradingViewWidgetNews3 from "./components/TradingViewWidgetNews3";
import GPayLogo from "./components/GPayLogo";
import ApplePayLogo from "./components/ApplePayLogo";
import Strategygetintouch from "@/public/strategygetintouch.svg";
import AibanerC from "./components/AibanerC";
import AibanerM from "./components/AibanerM";
import DailyNewsWidget from "./components/DailyNewsWidget";
import { Metadata } from "next";
import AccountExpand from "./components/AccountExpand";

export const metadata: Metadata = {
  title: "CapitalRevo - Trade Online with a Leading Trading Broker",
  description:
    "Discover the leading online trading platform at CapitalRevo. Trade forex, stocks, commodities, and more with a trusted and regulated broker.",
  alternates: {
    canonical: "https://capitalrevo.com",
  },
};

async function getPosts() {
  const query = `*[_type == 'post'] {
  title,
    excerpt
}`;
  const data = await client.fetch(query);
  return data;
}

async function getPaketi() {
  const query = `*[_type == 'paketi'] {
  title,
    description,
    listItems
 
}`;
  const datap = await client.fetch(query);
  return datap;
}

export const revalidate = 300;

export default async function Home() {
  const posts: Post[] = await getPosts();
  const customers = posts.map((post) => ({
    name: post.title,

    comment: post.excerpt,
  }));
  const paketi: Paket[] = await getPaketi();

  return (
    <div className=" mx-auto ">
      <Navbar />

      <div className="bg-gradient-to-r from-[#48d4ea] to-[#061b1e]">
        <div className=" max-w-screen-xl mx-auto ">
          <div className=" pt-10 mx-auto flex flex-col lg:flex-row ">
            <div className=" max-w-screen-xl mx-auto flex flex-col justify-between   px-10 h-full ">
              <h1 className="pt-10 pb-2 text-center text-4xl text-white font-bold md:text-5xl lg:mt-10   lg:text-left lg:w-[500px] xl:w-[700px]  lg:pb-5  ">
                Empower Your Trading Journey with CapitalRevo
              </h1>
              <p className="text-white text-center lg:pr-20 lg:text-xl lg:-mt-3 lg:text-left ">
                <span className=" inline-block">Start</span> trading with as
                little as $200 and leverage our expert tools and resources.
              </p>

              <div className="flex flex-col justify-center  items-center md:flex md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start  lg:items-start lg:gap-4 pt-4 md:pb-10 md:pt-10 lg:pt-20 ">
                <Link
                  className="flex justify-center items-center text-lg px-4 py-3 gap-2  w-48 h-12 bg-white rounded-lg shadow-xs text-gary-700 border border-white border-1 font-bold hover:bg-[#4ba2af] "
                  href="https://platform.capitalrevo.com/login"
                >
                  Get Started Now
                </Link>
                <div className="flex-row justify-center items-center mt-4 sm:mt-2 lg:-mt-4 ">
                  <p className="text-xs font-black text-white text-center py-1">
                    Rated 4.3
                  </p>
                  <Image
                    src={trustpilotlogo}
                    alt="slika"
                    className="w-[116px] h-auto"
                  />{" "}
                  <Image
                    src={trustpilotlogo2}
                    alt="slika"
                    className="w-[100px] h-auto"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-end xl:mr-10 xl:mt-10 md:px-48 lg:px-0 smooth-bounce lg:pt-10 xl:pt-0">
              <Image
                src="/capitalrevomobplatformm.png"
                alt="capitalrevo platform"
                width={500}
                height={510}
                className="object-cover "
                style={{ width: "63%" }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-10  mt-8 lg:mt-0   lg:pl-10">
            <p className="text-white text-xl flex justify-center lg:items-center lg:mt-2 ">
              As featured in :
            </p>
            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10 flex-wrap">
              <a
                href="https://www.marketwatch.com/press-release/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data-92832702"
                target="_blank"
              >
                <Image
                  src={Marketwatch}
                  alt="MarketWatch Logo"
                  className="w-[100px] md:w-[130px] lg:w-[180px] h-auto"
                />
              </a>
              <a
                href="https://www.morningstar.com/news/globe-newswire/9236437/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data"
                target="_blank"
              >
                <Image
                  src={MorningStar}
                  alt="Morning Star Logo"
                  className="w-[65px] md:w-[75px] lg:w-[110px] h-auto"
                />
              </a>
              <a
                href="https://markets.businessinsider.com/news/stocks/capital-revo-announces-its-cutting-edge-solutions-to-protect-client-data-1033797567"
                target="_blank"
              >
                <Image
                  src={Buisnisinsider}
                  alt="Business Insider Logo"
                  className="w-[65px] md:w-[75px] lg:w-[90px] h-auto"
                />
              </a>
              <a
                href="https://finance.yahoo.com/news/capital-revo-announces-cutting-edge-145400195.html"
                target="_blank"
              >
                <Image
                  src={katman}
                  alt="Yahoo!Finance Logo"
                  className="w-[65px] md:w-[75px] lg:w-[90px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-14 z-10 ">
          <TradingViewWidget />
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[1280px]  md:px-10 pb-5">
          <div className="md:flex items-center justify-between p-2 md:p-4 lg:p-8  xl:h-[160px] bg-gradient-to-r from-[#24616b] to-[#061b1e] md:rounded-lg mt-5">
            {/* Left Side Heading */}
            <h2 className=" w-full p-2  text-xl xl:text-3xl font-black text-white md:w-1/2 ">
              Trade Forex, Indices, Stocks and more with the world&apos;s No. 1
              broker
            </h2>

            {/* Right Side Button */}
            <Link href="https://platform.capitalrevo.com/login">
              <button className="bg-white  font-bold py-2 px-4 rounded-lg shadow hover:bg-[#00dbfe] text-sm xl:text-lg transition w-full md:w-38 h-12 xl:w-48 xl:h-12 ">
                Trade like a Pro
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex items-center justify-center ">
        <div className=" crafy md:rounded-lg" id="Accounts">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h2 className="text-4xl py-2 lg:py-2 text-white font-bold mb-2 text-center lg:text-4xl ">
              Choose the Right Account for You
            </h2>
            <p className="  text-lg text-center font-bold  text-white">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mb-5">
        <div className="max-w-screen-xl grid grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-center gap-4 -mt-36 lg:p-0">
          <div className="pakets-container">
            <Paketi
              title={paketi[0]?.title}
              imageSrc="\Dot.png"
              description={paketi[0]?.description}
              listItems={paketi[0]?.listItems}
            />
          </div>
          <div className="pakets-container">
            <Paketi
              title={paketi[4]?.title}
              imageSrc="\Dot.png"
              description={paketi[4]?.description}
              listItems={paketi[4]?.listItems}
            />
          </div>
          <div className="pakets-container">
            <Paketi
              title={paketi[1]?.title}
              imageSrc="\Dot.png"
              description={paketi[1]?.description}
              listItems={paketi[1]?.listItems}
            />
          </div>
          <div className="pakets-container">
            <Paketi
              title={paketi[2]?.title}
              imageSrc="\Dot.png"
              description={paketi[2]?.description}
              listItems={paketi[2]?.listItems}
            />
          </div>
          <div className="pakets-container">
            <Paketi
              title={paketi[3]?.title}
              imageSrc="\Dot.png"
              description={paketi[3]?.description}
              listItems={paketi[3]?.listItems}
            />
          </div>
        </div>
      </div>
      <div className="-mt-[180px] lg:hidden">
        <AccountExpand />
      </div>
      <div className="flex justify-center">
        <div className="max-w-screen-xl px-10 pt-5 pb-5 ">
          <h3 className=" text-3xl  text-[#00dbfe] font-black mb-6   lg:text-4xl text-center">
            What Our Clients Say
          </h3>

          <div className="  lg:p-0  mt-10 lg:mt-0 flex justify-center">
            <CustomerCard customers={customers} />
          </div>
        </div>
      </div>
      <div className=" mx-auto flex items-center justify-center ">
        <div className=" pt-0 " id="TradingPlatform">
          <div className=" lg:flex-row lg:justify-evenly lg:text-left">
            <div className=" md:pl-10 ">
              <h3 className="  text-[#00dbfe] text-center text-4xl  font-bold p-4 md:text-left lg:text-center">
                Innovative Trading Platform
              </h3>
              <p className="text-sm md:text-lg mt-2 md:mt-0 mb-5 text-gray-600 text-center">
                Experience the power of integrated trading tools with real-time
                data, customizable charts, and mobile trading.
              </p>
            </div>
            <div className="flex relative justify-center">
              <div className="relative ">
                <Link href="https://platform.capitalrevo.com/login">
                  <h2 className="  absolute top-1/2 p-2 md:p-6 w-fit h-fit bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white text-xs  md:text-xl font-black text-gray-800 ">
                    Real-time data
                  </h2>
                </Link>
                <Image
                  src="/Screenapp.svg"
                  alt="trade"
                  width={600}
                  height={390}
                  style={{ objectFit: "contain" }}
                />
                {/* Kockasti div koji je 30% preko slike */}
                <div className="absolute top-2/3 right-0  w-fit h-fit p-2 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white rounded-lg">
                  <Link href="https://platform.capitalrevo.com/login">
                    <h2 className="text-xs md:text-xl font-black text-gray-800 p-2 md:p-4 ">
                      Trading Platform
                    </h2>
                  </Link>
                </div>

                <Link href="https://platform.capitalrevo.com/login">
                  <h2 className=" absolute top-10 right-0 w-fit h-fit p-2 md:p-6 bg-white/50 backdrop-blur-sm  hover:bg-white text-xs  md:text-xl font-black text-gray-800 rounded-lg">
                    Customizable charts
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 ">
        <img
          src="/mobiletrader7.png"
          alt="trade"
          width={1200}
          height={599}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-gray-50">
        <DailyNewsWidget />
      </div>

      <div className=" hidden md:flex md:justify-center bg-navcolor   ">
        <AibanerC />
      </div>
      <div className="flex md:hidden justify-center bg-[#191A1E] ">
        <AibanerM />
      </div>
      <div className=" hidden m-10  lg:flex lg:justify-center lg:items-center ">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center lg:pt-5">
          <div className=" mb-10 sm:mb-0 mr-36">
            <h2 className="text-2xl text-[#00dbfe] font-black lg:text-4xl xl:-mt-16">
              CapitalRevo Education Center
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg font-bold text-gray-600 pt-5 pb-10 p-4">
              <li>Embark on a comprehensive learning journey</li>
              <li>Hundreds of lessons catering to all skill levels</li>
              <li>Meticulously organized introductory courses </li>
              <li>eBooks</li>
            </ul>
            <div>
              <Link href="/education">
                <button className="bg-[#00dbfe] text-white font-bold py-2 px-4 rounded shadow hover:bg-[#308390] transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <Link href="/education" className="">
            <Image
              src="/CREdu.PNG"
              alt="education"
              width={550}
              height={400}
              className="border-[#00dbfe] border-[6px] rounded-xl max-h-[350px] w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center lg:hidden">
        <div className="max-w-screen-xl flex flex-col justify-between sm:flex sm:flex-row px-5">
          <div>
            <h2 className=" pt-5 text-2xl  text-[#00dbfe] font-black lg:text-4xl">
              CapitalRevo Education Center
            </h2>
            <p className="mb-1  text-gray-700  text-lg">
              Access dozens of trading lessons for all levels!
            </p>

            <div className=" flex  my-4">
              <Link href="/education">
                <Image
                  src="/CREdu.PNG"
                  alt="education"
                  width={300}
                  height={150}
                  className="object-contain border-navcolor border-[4px] rounded-xl"
                />
              </Link>
            </div>

            <h3 className="text-[#00dbfe] font-bold  text-2xl pt-5">
              Unlimited access to our trading lesson library
            </h3>
            <p className="text-sm lg:text-center text-gray-600 sm:pr-20">
              Embark on a comprehensive learning journey with hundreds of
              lessons catering to all skill levels, meticulously organized into
              courses for effortless progress through the material.
            </p>
            <div className="mt-4 mb-5  ">
              <Link href="/education">
                <button className="bg-[#00dbfe] text-white font-bold px-4 py-3 gap-2 w-48 h-12 rounded-lg shadow hover:bg-[#308390] transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" px-5 lg:px-0  mx-auto lg:mt-10 md:pl-20 lg:flex lg:justify-between lg:pl-10  lg:items-center max-w-screen-xl"
        id="News"
      >
        <div className=" ">
          <h3 className="text-2xl py-2 text-[#00dbfe] font-black    lg:text-4xl  ">
            Stay Informed
          </h3>
          <p className=" mb-4  text-sm text-gray-700 lg:text-lg">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <Link href="/news  ">
          <button className="flex justify-center items-center md:mt-14 px-4 py-3 gap-2 w-48 h-12 bg-[#00dbfe] hover:bg-[#308390] rounded-xl shadow-xs text-white lg:mr-10">
            Read More News
          </button>
        </Link>
      </div>
      <div className="   mt-10 px-5 lg:px-0 lg:flex lg:justify-center  mb-5 ">
        <div className="max-w-screen-xl flex">
          <div className=" hidden lg:block ">
            <TradingViewWidgetNews />
          </div>
          <div className=" hidden md:block lg:hidden md: ">
            <TradingViewWidgetNews3 />
          </div>
          <div className=" block md:hidden ">
            <TradingViewWidgetNews2 />
          </div>
        </div>
      </div>

      <div className="sivkasta ">
        <div className=" max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h3 className="text-2xl py-4 text-[#00dbfe] font-bold md:pb-6 pt-5 text-center lg:text-4xl ">
            Calculate Your Potential Earnings
          </h3>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div className=" flex flex-col justify-center items-center  ">
            <p className=" pb-5 md:p-5 lg:text-lg text-center text-gray-700">
              Use our trading calculator to see <br />
              your potential profits based on your <br /> trading activities.
            </p>
            <Link href="https://platform.capitalrevo.com/register?demo=false">
              <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#00dbfe] hover:bg-[#308390] rounded-xl shadow-xs text-white">
                Try It Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center -mt-10 ">
            <Image
              src="/iphone13mini.png"
              alt="webinars"
              width={425}
              height={425}
              className=" cover "
            />
          </div>
        </div>
      </div>
      <div className=" hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center ">
        <Image
          src={Strategygetintouch}
          alt="webinars1"
          width={1200}
          height={400}
          className=" object-contain "
        />
      </div>
      <div className="bg-[#F4F4F4] flex justify-center items-center md:hidden lg:hidden ">
        <Image
          src="/TradeOngo.svg"
          alt="webinars"
          width={380}
          height={672}
          className=" object-contain "
        />
      </div>

      <div className="sivkasta flex-col justify-center ">
        <h3 className="text-2xl   py-4 text-[#00dbfe] font-bold md:pb-10 pt-5 md:pt-10 text-center lg:text-4xl ">
          Secure Payment Options
        </h3>
      </div>
      <div className="sivkasta">
        <div className="flex justify-center items-center pb-10 lg:pb-5">
          <div className="w-full max-w-[1440px] flex justify-between items-center space-x-8 sm:mx-auto sm:px-20 px-10 lg:px-52">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/Visa_2021.svg"
                  alt="Visa"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/Mastercard-logo.svg"
                  alt="Mastercard"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <Image
                  src="/Maestro.svg"
                  alt="Maestro"
                  fill
                  sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <ApplePayLogo />
              </a>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <a
                href="https://platform.capitalrevo.com/register?demo=false"
                target="_blank"
              >
                <GPayLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" px-5 lg:pl-0 md:pt-10 lg:flex  lg:justify-center "
        id="AboutUs"
      >
        <div className="max-w-screen-xl">
          <div className="md:flex lg:justify-between lg:px-10">
            <div className=" lg:mr-32">
              <h2 className="text-3xl px-4 font-bold text-[#00dbfe] ">
                About Us
              </h2>
              <p className="p-4   text-gray-700 lg:text-lg">
                With over 15 years in the industry, CapitalRevo is dedicated to
                providing traders with the best-in-class tools and support.
              </p>

              <p className="pl-4  text-gray-700 pb-5  lg:text-lg">
                Our mission is to enable access to world-class trading <br />
                opportunities for everyone.
              </p>
              <Link href="/about-us" className="px-4 lg:pl-4 pt-8">
                <button className="px-4 py-3 gap-2 w-60 h-14 bg-[#00dbfe] rounded-lg shadow-xs text-white text-[18px] hover:bg-[#308390]">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="mt-5  lg:-mt-5 lg:text-lg">
              <Smalcard
                imageSrc1="/oblacici.png"
                title="Our Mission"
                text="To empower traders with cutting-edge tools, unparalleled support,and
            the knowledge to succeed in the competitive world of online trading."
              />
              <div className="">
                <Smalcard
                  imageSrc1="/gromicon.png"
                  title="Our History"
                  text="CapitalRevo has been at the forefront of the trading industry for over 
              15 years,helping thousands of traders achieve their financial goals."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-5 lg:pt-0 " id="ContactUs">
        <h3 className="text-2xl py-4 text-[#00dbfe] font-bold mb-0 md:mt-20 text-center lg:text-4xl">
          Get in Touch
        </h3>
      </div>

      <div className="">
        <ContactForm />
      </div>
      <div className="flex justify-center">
        <div className="max-w-sirina">
          <div className="text-center mt-10 mb-10 lg:flex lg:justify-evenly lg:items-center lg:gap-10 ">
            <div className="flex flex-col items-center text-center">
              <Image src="/coverta.png" alt="mail" width={43} height={43} />
              <h3 className="font-black pb-2 pt-5">Email</h3>
              <p>Our friendly team is here to help.</p>
              <p className="text-dugmeplava pt-2">
                <br />
                support@capitalrevo.com
                <br />
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/location.png"
                alt="location"
                width={43}
                height={43}
              />
              <h3 className="font-black pb-2 pt-5">Office</h3>
              <p>Come say hello at our office HQ.</p>
              <p className="text-dugmeplava pt-2">
                London, 18 King William St, EC4N 7BP, United Kingdom <br />
                Rodney Bay, Rodney Village, Gros Islet, 1111, St. Lucia
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/phonecall.png" alt="phone" width={43} height={43} />
              <h3 className="font-black pb-2 pt-5">Phone</h3>
              <p>Mon-Fri from 8am to 5pm.</p>
              <p className="text-dugmeplava pt-2">
                <br />
                +447441906409
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
