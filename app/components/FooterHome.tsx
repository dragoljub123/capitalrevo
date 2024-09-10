import React from "react";
import Image from "next/image";
import "../globals.css";
import glogo from "../images/crlogo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const FooterHome: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="max-w-sirina mx-auto bg-black text-white py-8 px-4">
        <div className="hidden md:block">
          <div className="lg:flex justify-between items-center border-b-[1px] border-gray-400  pb-6 mb-6 lg:mx-20">
            <div className="text-center lg:text-left lg:flex-col lg:items-center lg:space-x-6">
              <Link href={"/"}>
                <Image
                  src={glogo}
                  alt="CapitalRevo Logo"
                  className="mx-auto lg:mx-10 w-full max-w-xs"
                />
              </Link>
              <p className="text-sm mt-4 lg:mt-0 lg:mx-10">
                Empower Your Trading Journey with CapitalRevo
              </p>
              <div className="social-icons flex justify-center lg:justify-start gap-4 mt-4 lg:mt-20 ">
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300 "
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
            <div className=" lg:text-left  flex  justify-center space-x-12  space-y-6 lg:space-y-0 lg:space-x-12">
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2 ">Quick Links</li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/Accounts">Accounts</Link>
                </li>
                <li>
                  <Link href="/TradingPlatform">Trading Platform</Link>
                </li>
                <li>
                  <Link href="#Education">Education</Link>
                </li>
                <li>
                  <Link href="/News">News</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2">Company</li>
                <li>
                  <Link href="/AboutUs">About Us</Link>
                </li>
                <li>
                  <Link href="/ContactUs/#contactform">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-center lg:text-left lg:mx-20">
              © 2024, CapitalRevo
            </p>
            <div className="flex space-x-4 text-sm md:pr-20">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Risk Disclaimer</Link>
            </div>
          </div>
          <div className="text-center px-20 py-8">
            <p className="text-gray-500 text-justify pb-5 text-xs leading-6">
              <u>CapitalRevo:</u> <br />
              CapitalRevo is operated by CapitalRevo Ltd with a registered
              address at Ground Floor, The Sotheby Building, Rodney Village,
              Rodney Bay, Gros-Islet St Lucia with registration number
              202400363. <br />
              The information on this website is not intended to be an
              inducement, offer or solicitation to anyone and is not intended
              for distribution to, or use by, any person in any country or
              jurisdiction where such distribution or use would be contrary to
              local law or regulation. <br />
              The content of this website is not intended for citizens or
              residents of the European Union, the wider European Economic Area,
              or the United Kingdom. We do not solicit clients residing in the
              above regions and only accept clients that register at their own
              initiative. <br /> Some countries may be restricted from using the
              services of CapitalRevo and it does not accept clients from
              certain jurisdictions, including the USA &#40;US Reportable
              Persons&#41;,Iran, and North Korea.
            </p>
            <p className="text-gray-500 text-justify pb-5 text-xs leading-6">
              <u>Risk warning:</u>
              <br />
              Virtual instruments including CFDs are complex financial products
              and come with a high risk of losing money rapidly due to leverage.
              More than 73% of trading accounts lose investments when using
              leveraged products. You should consider whether you understand how
              CFDs work and whether you can afford to take the high risk of
              losing your money. Past performance does not constitute a reliable
              indicator of future results. Future forecasts do not constitute a
              reliable indicator of future performance. Before deciding to
              trade, you should carefully consider your investment objectives,
              level of experience and risk tolerance. You should not deposit
              more than you are prepared to lose. Please ensure you fully
              understand the risk associated with the product envisaged and seek
              independent advice, if necessary. CapitalRevo does not issue
              advice, recommendations or opinions in relation to acquiring,
              holding or disposing of any financial product. CapitalRevo Limited
              is not a financial adviser and all services are provided on an
              execution only basis. <br />
              Before engaging with this website and the services made available
              through it, you should read all relevant Terms &amp; Conditions,
              policies, and accompanying documentation which govern the terms of
              use of all CapitalRevo products and services. By using the
              services of CapitalRevo, you affirm your agreement with the Terms
              &amp; Conditions.
            </p>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="  border-b-[1px] border-gray-400  pb-6 mb-6 lg:mx-20">
            <div className=" lg:text-left lg:flex-col lg:items-center lg:space-x-6">
              <Link href={"/"}>
                <Image src={glogo} alt="CapitalRevo Logo" className="" />
              </Link>
              <p className="text-sm mt-4 lg:mt-0 lg:mx-10">
                Empower Your Trading Journey with CapitalRevo
              </p>
              <div className="text-left  mt-8 mb-8 flex  ">
                <ul className="space-y-2 text-sm">
                  <li className="font-bold mb-2 ">Quick Links</li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Accounts">Accounts</Link>
                  </li>
                  <li>
                    <Link href="/TradingPlatform">Trading Platform</Link>
                  </li>
                  <li>
                    <Link href="#Education">Education</Link>
                  </li>
                  <li>
                    <Link href="/News">News</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="font-bold mb-2">Company</li>
                  <li>
                    <Link href="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link href="/ContactUs/#contactform">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-icons flex lg:justify-start gap-4 mt-4 lg:mt-20 ">
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300 "
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row  space-y-4 lg:space-y-0">
            <div className="flex space-x-4 text-[13px] mt-5">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Risk Disclaimer</Link>
            </div>
          </div>
          <p className="text-left mt-10 lg:text-left lg:mx-20">
            © 2024, CapitalRevo
          </p>
          <div className="text-center px-1 py-8">
            <p className="text-gray-500 text-justify pb-5 text-xs">
              <u>CapitalRevo:</u> <br />
              CapitalRevo is operated by CapitalRevo Ltd with a registered
              address at Ground Floor, The Sotheby Building, Rodney Village,
              Rodney Bay, Gros-Islet St Lucia with registration number
              202400363. <br />
              The information on this website is not intended to be an
              inducement, offer or solicitation to anyone and is not intended
              for distribution to, or use by, any person in any country or
              jurisdiction where such distribution or use would be contrary to
              local law or regulation. The content of this website is not
              intended for citizens or residents of the European Union, the
              wider European Economic Area, or the United Kingdom. We do not
              solicit clients residing in the above regions and only accept
              clients that register at their own initiative. Some countries may
              be restricted from using the services of CapitalRevo and it does
              not accept clients from certain jurisdictions, including the USA
              &#40;US Reportable Persons&#41;,Iran, and North Korea.
            </p>
            <p className="text-gray-500 text-justify pb-5 text-xs">
              <u>Risk warning:</u>
              <br />
              Virtual instruments including CFDs are complex financial products
              and come with a high risk of losing money rapidly due to leverage.
              More than 73% of trading accounts lose investments when using
              leveraged products. You should consider whether you understand how
              CFDs work and whether you can afford to take the high risk of
              losing your money. Past performance does not constitute a reliable
              indicator of future results. Future forecasts do not constitute a
              reliable indicator of future performance. Before deciding to
              trade, you should carefully consider your investment objectives,
              level of experience and risk tolerance. You should not deposit
              more than you are prepared to lose. Please ensure you fully
              understand the risk associated with the product envisaged and seek
              independent advice, if necessary. CapitalRevo does not issue
              advice, recommendations or opinions in relation to acquiring,
              holding or disposing of any financial product. CapitalRevo Limited
              is not a financial adviser and all services are provided on an
              execution only basis. <br />
              Before engaging with this website and the services made available
              through it, you should read all relevant Terms &amp; Conditions,
              policies, and accompanying documentation which govern the terms of
              use of all CapitalRevo products and services. By using the
              services of CapitalRevo, you affirm your agreement with the Terms
              &amp; Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
