import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import Smalcard from "./components/Smalcard";
import { Navbar } from "./components/Navbar";
import Paketi from "./components/Paketi";
import capitalrevomobplatform from "@/public/capitalrevomobplatform.png";
import NewsBreakLogo from "@/public/NewsBreakLogo.png";
import DigitalJournal from "@/public/DigitalJournal.png";
import katman from "@/public/katman.png";
import ContactForm from "@/app/components/ContactForm";
import trustpilotlogo from "@/app/images/trustpilot-logo.png";
import CustomerCard from "./components/CustomerCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utilitis/interface";
import CompareAccountsButton from "./components/CompareAccountsButton";
import { Paket } from "@/app/utilitis/interface";
import TradingViewWidgetNews from "./components/TradingViewWidgetNews";
import TradingViewWidgetNews2 from "./components/TradingViewWidgetNews2";
import TradingViewWidgetNews3 from "./components/TradingViewWidgetNews3";
import TabsComponent from "./components/TabsComponent";
import GPayLogo from "./components/GPayLogo";
import ApplePayLogo from "./components/ApplePayLogo";
import Strategygetintouch from "@/public/strategygetintouch.svg";
import AibanerC from "./components/AibanerC";
import AibanerM from "./components/AibanerM";
import DailyNewsWidget from "./components/DailyNewsWidget";
import { Metadata } from "next";

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

      <div className="pozadina  ">
        <div className=" max-w-sirina mx-auto ">
          <div className=" pt-10 mx-auto flex flex-col lg:flex-row ">
            <div className=" max-w-screen-xl mx-auto flex flex-col justify-between px-4 lg:px-28   h-full ">
              <h1 className="pt-10 pb-10 text-center text-4xl text-white font-bold md:text-5xl lg:mt-10   lg:text-left lg:w-[500px] xl:w-[700px]  lg:pb-5  ">
                Empower Your Trading Journey with CapitalRevo
              </h1>
              <p className="text-white text-center  text-sm lg:mt-2 lg:mb- lg:text-left ">
                Start trading with as little as $200 and leverage our expert
                tools and resources.
              </p>
              <div className="flex flex-col justify-center  items-center md:flex md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start  lg:items-start lg:gap-4 pt-2 md:pb-10 md:pt-10 ">
                <Link
                  className="flex justify-center items-center px-4 py-3 gap-2  w-48 h-12 bg-transparent rounded-md shadow-xs text-white border border-white border-1"
                  href="https://platform.capitalrevo.com/login"
                >
                  Get Started Now
                </Link>
                <div className="flex justify-center items-center mt-4 sm:mt-2 lg:-mt-2">
                  <Image
                    src={trustpilotlogo}
                    alt="slika"
                    className="max-h-screen object-contain"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-end xl:mr-20 xl:mt-10 md:px-48 lg:px-0">
              <Image
                src={capitalrevomobplatform}
                alt="capitalrevo platform"
                className="object-contain "
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-20  mt-8 lg:mt-0 lg:pl-20 xl:pl-32 md:pl-28">
            <p className="text-white flex justify-center lg:justify-start items-center">
              As featured in
            </p>
            <div className="flex justify-center lg:justify-start lg:items-center gap-6 md:gap-8 lg:gap-20">
              <Image
                src={NewsBreakLogo}
                alt="NewsBreak Logo"
                className="w-[95px] lg:w-[200px] h-auto"
              />
              <Image
                src={DigitalJournal}
                alt="Digital Journal Logo"
                className="w-[115px] lg:w-[200px] h-auto"
              />
              <Image
                src={katman}
                alt="Katman Logo"
                className="w-[75px] lg:w-[100px] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-14 z-10">
          <TradingViewWidget />
        </div>
      </div>
      <DailyNewsWidget />
      <div className="crafy " id="Accounts">
        <div className=" mx-auto flex items-center justify-center ">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h2 className="text-4xl py-4 lg:py-2 text-white font-bold mb-2 text-center lg:text-4xl ">
              Choose the Right Account for You
            </h2>
            <p className=" mb-4 text-center   text-white">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-between items-center ">
        <div className=" lg:flex  lg:gap-10 lg:justify-center lg:-mt-20 lg:p-0 ">
          <div className="-mt-36 lg:mt-0 ">
            <Paketi
              title={paketi[0]?.title}
              imageSrc="\Dot.png"
              description={paketi[0]?.description}
              listItems={paketi[0]?.listItems}
            />
          </div>
          <Paketi
            title={paketi[4]?.title}
            imageSrc="\Dot.png"
            description={paketi[4]?.description}
            listItems={paketi[4]?.listItems}
          />
          <Paketi
            title={paketi[1]?.title}
            imageSrc="\Dot.png"
            description={paketi[1]?.description}
            listItems={paketi[1]?.listItems}
          />
        </div>
        <div className="  lg:flex lg:justify-center lg:gap-5 lg:m-10 lg:p-0">
          <Paketi
            title={paketi[2]?.title}
            imageSrc="\Dot.png"
            description={paketi[2]?.description}
            listItems={paketi[2]?.listItems}
          />
          <Paketi
            title={paketi[3]?.title}
            imageSrc="\Dot.png"
            description={paketi[3]?.description}
            listItems={paketi[3]?.listItems}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className=" flex justify-center items-center">
          <CompareAccountsButton>Compare Accounts</CompareAccountsButton>
        </div>
      </div>
      <div className=" pt-0 " id="TradingPlatform">
        <div className=" lg:flex lg:justify-evenly lg:text-left">
          <div className=" md:pl-10">
            <h3 className="  naslovboja2 text-center text-4xl  font-bold p-4 md:text-left">
              Innovative Trading Platform
            </h3>
            <p className=" text-sm  p-4 tetx-center text-gray-700">
              Experience the power of integrated trading tools with real-time
              data, customizable <br /> charts, and mobile trading.
            </p>
          </div>
        </div>

        <TabsComponent />
      </div>

      <div className=" hidden md:flex md:justify-center bg-[#191A1E] ">
        <AibanerC />
      </div>
      <div className="flex md:hidden justify-center bg-[#191A1E] ">
        <AibanerM />
      </div>
      <div className=" hidden m-10  lg:flex lg:justify-center lg:items-center ">
        <div className="max-w-screen-xl  flex flex-col justify-between  sm:flex sm:flex-row lg:px-10">
          <div className="">
            <h2 className="text-2xl  text-blue-500 font-black  lg:text-4xl ">
              CapitalRevo Education Center
            </h2>
            <p className=" mb-1  text-xl  ">
              Access dozens of trading lessons for all levels!
            </p>
            <h3 className="text-blue-500 font-bold text-2xl pt-12 ">
              Unlimited access to our trading lesson library
            </h3>
            <p className=" text-lg pr-20 ">
              Embark on a comprehensive learning journey with hundreds of
              lessons catering to all skill levels, meticulously organized into
              courses for effortless progress through the material.
            </p>
            <div className="mt-4 mb-10 flex justify-center  ">
              <Link href="/education">
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <Image
            src="/CREdu.PNG"
            alt="educaion"
            width={500}
            height={200}
            className=" object-contain  border-blue-500 border-[4px] rounded-xl max-h-[300px] "
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:hidden">
        <div className="max-w-screen-xl flex flex-col justify-between sm:flex sm:flex-row px-10">
          <div>
            <h2 className="text-2xl text-center  text-blue-500 font-black lg:text-4xl">
              CapitalRevo Education Center
            </h2>
            <p className="mb-1 text-center  text-lg">
              Access dozens of trading lessons for all levels!
            </p>

            {/* Dodana slika između <p> i <h3> */}
            <div className=" flex justify-center my-4">
              <Link href="/education">
                <Image
                  src="/CREdu.PNG"
                  alt="education"
                  width={300}
                  height={150}
                  className="object-contain border-blue-500 border-[4px] rounded-xl"
                />
              </Link>
            </div>

            <h3 className="text-blue-500 font-bold text-center text-2xl pt-5">
              Unlimited access to our trading lesson library
            </h3>
            <p className="text-sm text-center sm:pr-20">
              Embark on a comprehensive learning journey with hundreds of
              lessons catering to all skill levels, meticulously organized into
              courses for effortless progress through the material.
            </p>
            <div className="mt-4 mb-10 flex justify-center ">
              <Link href="/education">
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-0">
        <div
          className=" mx-auto flex items-center justify-center "
          id="education"
        >
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h2 className="text-2xl py-4 text-black font-bold mb-2 mt-2 text-center lg:text-4xl ">
              Learn to Trade with Confidence
            </h2>
            <p className=" mb-4 text-center text-sm text-gray-700">
              Access webinars, eBooks, market analysis, and trading strategies
              to enhance your <br /> trading knowledge and skills.
            </p>
          </div>
        </div>
      </div>
      <div className="m-10  lg:flex lg:justify-evenly lg:items-center">
        <div className="max-w-sirina flex flex-col gap-10  sm:flex sm:flex-row">
          <span className="flex flex-col items-center text-center ">
            <Image src="/oblacic.png" alt="webinars8" width={48} height={48} />
            <p className="text-center font-bold px-6 ">Webinars</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image src="/gormic.png" alt="webinars9" width={48} height={48} />
            <p className="text-center font-bold px-6">eBooks</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image src="/gormic.png" alt="webinars10" width={48} height={48} />
            <p className="text-center font-bold px-6">Market Analysis</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image
              src="/strategy.png"
              alt="webinars11"
              width={48}
              height={48}
            />
            <p className="text-center font-bold px-6 ">Trading Strategies</p>
          </span>
        </div>
      </div>

      <div
        className="pt-10 pl-10  mx-auto mt-10 md:pl-20 lg:flex lg:justify-between lg:pl-10  lg:items-center max-w-screen-xl"
        id="News"
      >
        <div className=" ">
          <h3 className="text-2xl py-2 text-black font-bold mb-6 mt-6  lg:text-4xl  ">
            Stay Informed
          </h3>
          <p className=" mb-4  text-sm ">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <Link href="/news">
          <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white lg:mr-10">
            Read More News
          </button>
        </Link>
      </div>
      <div className="   mt-10 flex justify-center ">
        <div className="max-w-screen-xl flex">
          <div className=" hidden lg:block ">
            <TradingViewWidgetNews />
          </div>
          <div className=" hidden md:block lg:hidden ">
            <TradingViewWidgetNews3 />
          </div>
          <div className=" block md:hidden ml-10">
            <TradingViewWidgetNews2 />
          </div>
        </div>
      </div>
      <div
        className="mx-auto flex flex-col justify-center items-center mt-20 max-w-sirina lg:px-20 lg:flex lg:flex-row lg:justify-between"
        id="whatourclientssay"
      >
        <div className=" ">
          <h3 className=" text-3xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl lg:pl-5 ">
            What Our Clients Say
          </h3>
        </div>
        <div className="flex-col justify-center items-center ">
          <h2 className=" text-xl lg:p-0 lg:text-3xl ">
            CapitalRevo transformed my <br /> trading experience! The platform
            is <br /> intuitive and the support is <br /> excellent.
          </h2>
          <div className=" mb-10 lg:p-0 mt-10 text-sm ">
            <CustomerCard customers={customers} />
          </div>
        </div>
      </div>
      <div className="sivkasta ">
        <div className="pt-10 max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h3 className="text-2xl py-4 text-black font-bold pb-6 pt-6 text-center lg:text-4xl ">
            Calculate Your Potential Earnings
          </h3>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div className=" flex flex-col justify-center items-center  ">
            <p className=" p-10 mb-5">
              Use our trading calculator to see <br />
              your potential profits based on your <br /> trading activities.
            </p>
            <Link href="https://platform.capitalrevo.com/register?demo=false">
              <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white">
                Try It Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <Image
              src="/iphone13mini.png"
              alt="webinars"
              width={425}
              height={425}
              className=" object-contain "
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center ">
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
        <h3 className="text-2xl   py-4 text-black font-bold pb-20 pt-20 text-center lg:text-4xl ">
          Secure Payment Options
        </h3>
      </div>
      <div className="sivkasta">
        <div className="flex justify-center items-center pb-20">
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
        className=" pl-10 lg:pl-0 pt-10 lg:flex lg:justify-evenly"
        id="AboutUs"
      >
        <div className="max-w-sirina md:flex">
          <div className="my-10">
            <h2 className="text-3xl p-4 font-bold ">About Us</h2>
            <p className="p-4  lg:w-[400px] ">
              With over 15 years in the industry, CapitalRevo is dedicated to
              providing traders with the best-in-class tools and support.
            </p>

            <p className="p-4">
              Our mission is to enable access to world-class trading <br />
              opportunities for everyone.
            </p>
            <Link href="/about-us" className="p-4">
              <button className="px-4 py-3 gap-2 w-60 h-14 bg-[#3A3A3A] rounded-lg shadow-xs text-white text-[18px]">
                Learn More
              </button>
            </Link>
          </div>
          <div className="my-10">
            <Smalcard
              imageSrc1="/oblacici.png"
              title="Our Mission"
              text="To empower traders with cutting-edge tools, unparalleled support,and
            the knowledge to succeed in the competitive world of online trading."
            />
            <div className="mt-2">
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
      <div className="pt-5 mb-20" id="ContactUs">
        <h3 className="text-2xl py-4 text-black font-bold mb-0 mt-20 text-center lg:text-4xl">
          Get in Touch
        </h3>
        <div className="flex justify-center">
          <div className="max-w-sirina">
            <div className="text-center mt-10 mb-10 lg:flex lg:justify-evenly lg:items-center lg:gap-10 ">
              <div className="flex flex-col items-center text-center">
                <Image src="/coverta.png" alt="mail" width={43} height={43} />
                <h3 className="font-bold pb-2 pt-5">Email</h3>
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
                <h3 className="font-bold pb-2 pt-5">Office</h3>
                <p>Come say hello at our office HQ.</p>
                <p className="text-dugmeplava pt-2">
                  London, 18 King William St, EC4N 7BP, United Kingdom <br />
                  Rodney Bay, Rodney Village, Gros Islet, 1111, St. Lucia
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/phonecall.png"
                  alt="phone"
                  width={43}
                  height={43}
                />
                <h3 className="font-bold pb-2 pt-5">Phone</h3>
                <p>Mon-Fri from 8am to 5pm.</p>
                <p className="text-dugmeplava pt-2">
                  <br />
                  +447441938990
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
