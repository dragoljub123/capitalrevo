import Image from "next/image";
import Smalcard from "./components/Smalcard";
import { Navbar } from "./components/Navbar";
import Paketi from "./components/Paketi";
import PopupButton from "./components/PopupButton";
import phoneimg from "@/public/phoneimg.png";
import NewsBreakLogo from "@/public/NewsBreakLogo.png";
import DigitalJournal from "@/public/DigitalJournal.png";
import katman from "@/public/katman.png";
import ContactForm from "@/app/components/ContactForm";
import trustpilotlogo from "@/app/images/trustpilot-logo.png";
import CustomerCard from "./components/CustomerCard";

const customers = [
  {
    name: "Lana Rothers",
    comment:
      "Hear from some of our amazing customers who are automating their finances.",
  },
  { name: "John Doe", comment: "Very satisfied with the product." },
  { name: "Jane Smith", comment: "Excellent support and fast delivery." },
];

export default function Home() {
  return (
    <div className="max-w-sirina mx-auto ">
      <Navbar />
      <div className="pozadina pt-20 ">
        <div className="  ">
          <div className=" mx-auto flex flex-col lg:flex-row ">
            <div className=" max-w-screen-xl mx-auto flex flex-col justify-between px-4 lg:px-20 h-full ">
              <h1 className="pt-20 pb-10 text-center text-4xl text-white font-bold md:text-5xl lg:mt-10  lg:text-left lg:w-[700px] lg:pb-5  ">
                Empower Your Trading Journey with CapitalRevo
              </h1>
              <p className="text-white text-center  text-sm lg:mt-2 lg:mb- lg:text-left ">
                Start trading with as little as $200 and leverage our expert
                tools and resources.
              </p>
              <div className="flex flex-col justify-center  items-center md:flex md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start  lg:items-start lg:gap-4 pb-10 pt-10 ">
                <button className="flex justify-center items-center px-4 py-3 gap-2  w-48 h-12 bg-transparent rounded-md shadow-xs text-white border border-white border-1">
                  Get Started Now
                </button>
                <div className="flex justify-center items-center mt-4 sm:mt-2 lg:-mt-2">
                  <Image
                    src={trustpilotlogo}
                    alt="slika"
                    className="max-h-screen object-contain"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-end xl:mr-20">
              <Image src={phoneimg} alt="slika" className="object-contain " />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-20 pb-20 mt-8 lg:mt-0 lg:pl-40 md:pl-28">
            <p className="text-white flex justify-center lg:justify-start">
              As featured in
            </p>
            <div className="flex  justify-center lg:justify-start gap-10 lg:gap-20 ">
              <Image
                src={NewsBreakLogo}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[120px]"
              />
              <Image
                src={DigitalJournal}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[120px]"
              />
              <Image
                src={katman}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-10 lg:flex lg:justify-evenly" id="AboutUs">
        <div>
          <h1 className="text-3xl p-4 font-bold ">About Us</h1>
          <p className="p-4  lg:w-[400px] ">
            With over 15 years in the industry, CapitalRevo is dedicated to
            providing traders with the best-in-class tools and support.
          </p>

          <p className="p-4">
            Our mission is to enable access to world-class trading <br />
            opportunities for everyone.
          </p>
        </div>
        <div className="">
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
      <div className="crafy " id="Accounts">
        <div className=" mx-auto flex items-center justify-center ">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h1 className="text-4xl py-4 text-white font-bold mb-6 mt-0 lg:mt-6 text-center lg:text-4xl ">
              Choose the Right Account for You
            </h1>
            <p className=" mb-4 text-center text-sm  text-white">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-between items-center ">
        <div className=" lg:flex  lg:gap-10 lg:justify-center lg:-mt-20 lg:p-0 ">
          <div className="-mt-36 md:mt-0 ">
            <Paketi
              title="Basic plan"
              imageSrc="\Dot.png"
              description="$200 - $9,999"
              listItems={[
                "Access to all basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20GB individual data each user",
                "Basic chat and email support",
              ]}
            />
          </div>
          <Paketi
            title="Silver Account"
            imageSrc="\Dot.png"
            description="$10,000 - $24,999"
            listItems={[
              "Access to all basic features",
              "Basic reporting and analytics",
              "Up to 10 individual users",
              "20GB individual data each user",
              "Basic chat and email support",
              "Sessions with Market Analyst",
              "Free Withdrawal Monthly",
            ]}
          />
          <Paketi
            title="Gold Account"
            imageSrc="\Dot.png"
            description="$25,000 - $49,999"
            listItems={[
              "Leverage 1:200",
              "50% lower swaps",
              "Advanced Education",
              "Daily Market Reviews",
              "Trading eBooks",
              "Dedicated Market Analyst",
              "Live Webinars with Senior Trading Strategist",
              "3 Free Withdrawals Monthly",
            ]}
          />
        </div>
        <div className="  lg:flex lg:justify-center lg:gap-5 lg:m-10 lg:p-0">
          <Paketi
            title="Premium Account"
            imageSrc="\Dot.png"
            description="$100,000+"
            listItems={[
              "Leverage 1:300",
              "75% lower swaps",
              "Advanced Education",
              "Spreads as low as 1.9",
              "Daily Market Reviews",
              "3 Risk-free trades",
              "Unlimited Free Withdrawals",
              "Dedicated Senior Account Manager",
              "Market Analyst",
              "Live Webinars with Senior Trading Strategist",
              "Special offers",
            ]}
          />
          <Paketi
            title="VIP Account"
            imageSrc="\Dot.png"
            description="$250,000+"
            listItems={[
              "Leverage 1:400",
              "Swap-free",
              "Spreads as low as 1.5",
              "Daily Market Reviews",
              "3 Risk-free trades",
              "Unlimited Free Withdrawals",
              "Dedicated Senior Account Manager",
              "Market Analyst",
              "Live Webinars with Senior Trading Strategist",
              "Special offers",
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-20">
        <button className=" flex justify-center items-center px-4 py-3 gap-2 w-60 h-14 bg-black rounded-xl shadow-xs text-white text-[18px]">
          Compare Accounts
        </button>
      </div>
      <div className=" pt-10 " id="TradingPlatform">
        <div className=" lg:flex lg:justify-evenly lg:text-left">
          <div className="   ">
            <h2 className=" text-center text-4xl  font-bold p-4">
              Innovative Trading Platform
            </h2>
            <p className=" text-sm  p-4 tetx-center">
              Experience the power of integrated trading tools with real-time
              data, customizable <br /> charts, and mobile trading.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:flex lg:justify-evenly">
          <div>
            <div className="  p-10 lg:p-0 lg:border-l-[4px] lg: border-gray-300">
              <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                <p className="ml-4 mb-10 ">Real-time data</p>
              </div>
              <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                <p className="ml-4 mb-10 ">Customizable charts</p>
              </div>
              <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                <p className="ml-4 mb-10 ">Mobile trading</p>
              </div>
              <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                <p className="ml-4 mb-10 ">Secure transactions</p>
              </div>
            </div>
            <div className="p-10 flex justify-center items-center">
              <button className=" px-4 py-3 gap-2 w-48 h-14 bg-[#1200FF] rounded-xl shadow-xs text-white">
                Explore the Platform
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/monitor.png" alt="trade" width={900} height={600} />
          </div>
        </div>
      </div>
      <div
        className=" pt-5 mx-auto flex items-center justify-center "
        id="Education"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
            Learn to Trade with Confidence
          </h1>
          <p className=" mb-4 text-center text-sm ">
            Access webinars, eBooks, market analysis, and trading strategies to
            enhance your <br /> trading knowledge and skills.
          </p>
        </div>
      </div>
      <div className="m-10 lg:flex lg:justify-evenly lg:items-center">
        <span className="flex flex-col items-center text-center">
          <Image src="/oblacic.png" alt="webinars" width={48} height={48} />
          <p className="text-center font-bold p-4">Webinars</p>
        </span>
        <span className="flex flex-col items-center text-center">
          <Image src="/gormic.png" alt="webinars" width={48} height={48} />
          <p className="text-center font-bold p-4">eBooks</p>
        </span>
        <span className="flex flex-col items-center text-center">
          <Image src="/gormic.png" alt="webinars" width={48} height={48} />
          <p className="text-center font-bold p-4">Market Analysis</p>
        </span>
        <span className="flex flex-col items-center text-center">
          <Image src="/strategy.png" alt="webinars" width={48} height={48} />
          <p className="text-center font-bold p-4">Trading Strategies</p>
        </span>
      </div>

      <div
        className=" pt-10 pl-4 mx-auto mt-20  lg:flex lg:justify-between lg:items-center"
        id="News"
      >
        <div className=" ">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl ">
            Stay Informed
          </h1>
          <p className=" mb-4  text-sm ">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white lg:mr-20">
          Read More News
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-10 lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden ">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src="/slikakartica.png"
              alt="webinars"
              width={335}
              height={440}
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image src="/strelica.png" alt="webinars" width={20} height={20} />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars"
            width={120}
            height={44}
          />
        </div>
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src="/slikakartica.png"
              alt="webinars"
              width={335}
              height={440}
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image src="/strelica.png" alt="webinars" width={20} height={20} />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars"
            width={120}
            height={44}
          />
        </div>
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src="/slikakartica.png"
              alt="webinars"
              width={335}
              height={440}
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image src="/strelica.png" alt="webinars" width={20} height={20} />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars"
            width={120}
            height={44}
          />
        </div>
      </div>
      <div className=" mx-auto flex flex-col  justify-center items-center  mt-20  lg:flex lg:flex-row lg:justify-between ">
        <div className=" ">
          <h1 className=" text-3xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl ">
            What Our Clients Say
          </h1>
        </div>
        <div className="flex-col justify-center items-center ">
          <h2 className=" text-xl p-4 lg:p-0 lg:text-3xl ">
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
          <h1 className="text-2xl py-4 text-black font-bold pb-6 pt-6 text-center lg:text-4xl ">
            Calculate Your Potential Earnings
          </h1>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div className=" flex flex-col justify-center items-center  ">
            <p className=" p-10 mb-5">
              Use our trading calculator to see <br />
              your potential profits based on your <br /> trading activities.
            </p>
            <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white">
              Try It Now
            </button>
          </div>
          <div className="md:flex md:justify-center  md:items-center">
            <Image
              src="/iphone13mini.png"
              alt="webinars"
              width={425}
              height={425}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center">
        <Image src="/Getintouch.png" alt="webinars" width={1440} height={400} />
      </div>
      <div className="bg-[#F4F4F4] flex justify-center items-center md:hidden lg:hidden">
        <Image
          src="/Getintouchmob.png"
          alt="webinars"
          width={380}
          height={672}
        />
      </div>
      <div className="sivkasta ">
        <h1 className="text-2xl   py-4 text-black font-bold pb-20 pt-20 text-center lg:text-4xl ">
          Secure Payment Options
        </h1>
        <div className="flex justify-evenly items-center pb-20 space-x-4 sm:space-x-2">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
            <Image
              src="/visa.png"
              alt="visa"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
            <Image
              src="/master2.png"
              alt="master2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
            <Image
              src="/master.png"
              alt="master"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
            <Image
              src="/apay.png"
              alt="apay"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
            <Image
              src="/gpay.png"
              alt="gpay"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="pt-5 mb-20" id="ContactUs">
        <h2 className="text-2xl py-4 text-black font-bold mb-0 mt-20 text-center lg:text-4xl">
          Get in Touch
        </h2>
        <div className="text-center mt-10 mb-10 lg:flex lg:justify-evenly lg:items-center lg:gap-10">
          <div className="flex flex-col items-center text-center">
            <Image src="/coverta.png" alt="mail" width={43} height={43} />
            <h3 className="font-bold pb-2 pt-5">Email</h3>
            <p>Our friendly team is here to help.</p>
            <p className="text-dugmeplava pt-2">
              <br />
              hi@untitledui.com
              <br />
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/location.png" alt="location" width={43} height={43} />
            <h3 className="font-bold pb-2 pt-5">Office</h3>
            <p>Come say hello at our office HQ.</p>
            <p className="text-dugmeplava pt-2">
              100 Smith Street <br />
              Collingwood VIC 3066 AU
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/phonecall.png" alt="phone" width={43} height={43} />
            <h3 className="font-bold pb-2 pt-5">Phone</h3>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p className="text-dugmeplava pt-2">
              <br />
              +1 (555) 000-0000
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
