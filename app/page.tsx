import Image from "next/image";
import Smalcard from "./components/Smalcard";
import Stars from "@/app/images/1Star.png";
import { Navbar } from "./components/Navbar";
import Paketi from "./components/Paketi";
import PopupButton from "./components/PopupButton";
import phoneimg from "@/public/phoneimg.png";
import NewsBreakLogo from "@/public/NewsBreakLogo.png";
import DigitalJournal from "@/public/DigitalJournal.png";
import katman from "@/public/katman.png";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <div className="max-w-sirina mx-auto ">
      <div className="pozadina  ">
        <Navbar />
        <div className=" m-32 slideUpAnimacija ">
          <div className=" mx-auto lg:flex    ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between  px-4 lg:px-0 h-full">
              <h1 className="text-2xl  text-white font-bold  text-left lg:text-5xl">
                Empower Your Trading <br />
                Journey with CapitalRevo
              </h1>
              <p className="text-white mt-4 mb-4 text-left ">
                Start trading with as little as $200 and leverage our expert
                tools and resources.
              </p>
              <div className="flex">
                <PopupButton />
                <div className="lg:flex lg:items-center lg:justify-center pl-2  ">
                  <Image
                    src={Stars}
                    alt="slika"
                    className="max-h-screen object-contain"
                  />
                  <p className="text-white text-xs">
                    {" "}
                    &nbsp; RATED 4.2 on TRUSTPILOT&nbsp;{" "}
                  </p>
                </div>
              </div>
            </div>
            <Image src={phoneimg} alt="slika" className="  " />
          </div>
          <div className="lg:flex lg:justify-evenly mb-4">
            <p className="text-white lg:flex">As featured in</p>
            <Image src={NewsBreakLogo} alt="slika" className="  " />
            <Image src={DigitalJournal} alt="slika" className="  " />
            <Image src={katman} alt="slika" className="  " />
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:justify-evenly">
        <div>
          <h1 className="text-3xl p-4 font-bold ">About Us</h1>
          <p className="p-4">
            With over 15 years in the industry, CapitalRevo is dedicated to{" "}
            <br /> providing traders with the best-in-class tools and support.
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
            text="To empower traders with cutting-edge tools, unparalleled support, and the knowledge to succeed in the competitive world of online trading."
          />
          <div className="mt-2">
            <Smalcard
              imageSrc1="/gromicon.png"
              title="Our History"
              text="CapitalRevo has been at the forefront of the trading industry for over 15 years, helping thousands of traders achieve their financial goals."
            />
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:gap-10 lg:justify-center m-10">
        <Paketi
          title="Basic plan"
          imageSrc="\Dot.png"
          description="$200 – $9,999"
          listItems={[
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20GB individual data each user",
            "Basic chat and email support",
          ]}
        />
        <Paketi
          title="Silver Account"
          imageSrc="\Dot.png"
          description="$10,000 – $24,999"
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
          description="$25,000 – $49,999"
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
      <div className="lg:flex lg:justify-center lg:gap-5 m-10">
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

      <div className="   ">
        <div className=" lg:flex lg:justify-evenly ">
          <div className="  flex flex-col  justify-between items-start">
            <h2 className=" text-4xl  font-bold">
              Innovative Trading Platform
            </h2>
            <p className=" text-sm ">
              Experience the power of integrated trading tools with real-time
              data, customizable <br /> charts, and mobile trading.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:flex lg:justify-evenly">
          <div>
            <div className="  border-l-[2px] border-gray-300">
              <p className="ml-4 mb-10">Real-time data</p>
              <p className="ml-4 mb-10">Customizable charts</p>
              <p className="ml-4 mb-10">Mobile trading</p>
              <p className="ml-4 mb-10">Secure transactions</p>
            </div>
            <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-14 bg-[#1200FF] rounded-xl shadow-xs text-white">
              Explore the Platform
            </button>
          </div>
          <div className="">
            <img
              src="./monitor.png"
              alt="trade"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto flex items-center justify-center ">
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
      <div className=" m-10 flex  justify-evenly items-center">
        <span className="text-center">
          <img
            src="./oblacic.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-center">Webinars</p>
        </span>
        <span className="text-center">
          <img
            src="./gormic.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-center">eBooks</p>
        </span>
        <span className="text-center">
          <img
            src="./gormic.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-center">Market Analysis</p>
        </span>
        <span className="">
          <img
            src="./strategy.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-center">Trading Strategies</p>
        </span>
      </div>
      <div className="  m-10 lg:flex lg:justify-evenly lg:items-center">
        <div className=" ">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl ">
            Stay Informed
          </h1>
          <p className=" mb-4  text-sm ">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white">
          Read More News
        </button>
      </div>
      <div className=" mt-20 mb-10 lg:flex lg:justify-evenly lg:items-center">
        <div className=" w-[398px] h-[440px] rounded-xl  overflow-hidden">
          <div className="bg-cover bg-center rounded-t-xl">
            <img
              src="./slikakartica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className="text-sm py-4 text-blue-800">Product</p>
          <div className="  flex justify-between ">
            <h1 className=" text-2xl font-bold">Product review </h1>
            <img
              src="./strelica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className=" text-sm text-gray-700">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>

          <img
            src="./Avatar label group.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className=" w-[398px] h-[440px] rounded-xl overflow-hidden">
          <div className="bg-cover bg-center rounded-t-xl">
            <img
              src="./slikakartica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className="text-sm py-4 text-blue-800">Product</p>
          <div className="  flex justify-between ">
            <h1 className=" text-2xl font-bold">Product review </h1>
            <img
              src="./strelica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className=" text-sm text-gray-700">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>

          <img
            src="./Avatar label group.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className=" w-[398px] h-[440px] rounded-xl overflow-hidden">
          <div className="bg-cover bg-center rounded-t-xl">
            <img
              src="./slikakartica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className="text-sm py-4 text-blue-800">Product</p>
          <div className="  flex justify-between ">
            <h1 className=" text-2xl font-bold">Product review </h1>
            <img
              src="./strelica.png"
              alt="webinars"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className=" text-sm text-gray-700">
            The rise of RESTful APIs has been met by a rise in tools <br /> for
            creating, testing, and managing them.
          </p>

          <img
            src="./Avatar label group.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className=" m-10 lg:flex lg:justify-evenly lg:items-center ">
        <h2 className="text-2xl lg:text-4xl font-bold">What Our Clients Say</h2>
        <div>
          <h2 className="text-2xl ">
            "CapitalRevo transformed my <br /> trading experience! The platform
            is <br /> intuitive and the support is <br /> excellent."
          </h2>
          <div>
            <p className="mt-10 text-sm font-bold">Lana Steiner</p>
            <p className="text-sm">
              Hear from some of our amazing customers who are automating <br />{" "}
              their finances.
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
            Calculate Your Potential Earnings
          </h1>
        </div>
        <div className="lg:flex lg:justify-center">
          <div className=" ">
            <p className="pt-48 mb-5">
              {" "}
              Use our trading calculator to see <br />
              your potential profits based on your <br /> trading activities.
            </p>
            <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white">
              Try It Now
            </button>
          </div>
          <img
            src="./iphone13mini.png"
            alt="webinars"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="mb-10 lg:flex lg:justify-center lg:items-center">
        <img
          src="./Getintouch.png"
          alt="webinars"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <h1 className="text-2xl   py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
        Secure Payment Options
      </h1>
      <div className="flex lg:justify-evenly lg:items-center ">
        <img
          src="./visa.png"
          alt="visa"
          style={{ width: "auto", height: "auto" }}
        />

        <img
          src="./master2.png"
          alt="master2"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src="./master.png"
          alt="master"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src="./apay.png"
          alt="apay"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src="./gpay.png"
          alt="gpay"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
        Get in Touch
      </h1>
      <div className="mt-10 mb-10 lg:flex lg:justify-center">
        <div className="">
          <h1 className="font-bold">Email</h1>
          <img
            src="./coverta.png"
            alt="mail"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Our friendly team is here to help.</p>
          <p>hi@untitledui.com</p>
        </div>
        <div>
          <h1 className="font-bold">Office</h1>
          <img
            src="./location.png"
            alt="lokacija"
            style={{ width: "auto", height: "auto" }}
          />{" "}
          <p>Come say hello at our office HQ.</p>
          <p>
            100 Smith Street <br />
            Collingwood VIC 3066 AU
          </p>
        </div>
        <div>
          <h1 className="font-bold">Phone</h1>
          <img
            src="./phonecall.png"
            alt="gpay"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Mon-Fri from 8am to 5pm.</p>
          <p>+1 (555) 000-0000</p>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
