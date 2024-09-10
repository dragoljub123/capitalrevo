import React from "react";
import { Navbar } from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-20 pb-10 flex-row justify-center items-center">
          <h1 className=" naslovboja2 text-center text-4xl font-bold mt-10">
            We&apos;re Here to Help.
            <br />
            Get in Touch with CapitalRevo
          </h1>
          <div className="flex justify-center ">
            {" "}
            <p className="text-center text-[#475467] mt-10 p-4 max-w-[900px] ">
              Our support team is dedicated to helping you get the most out of
              your trading experience. Whether you have a question about your
              account or need help navigating the platform, we&apos;re here to
              assist.
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="pt-5 mb-20">
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
                  100 Smith Street <br />
                  Collingwood VIC 3066 AU
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
                  +1 (555) 000-0000
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
