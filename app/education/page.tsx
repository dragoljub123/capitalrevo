import React from "react";
import { Navbar } from "../components/Navbar";

import { Metadata } from "next";
import VideoPlayer from "../components/VideoPlayer";

export const metadata: Metadata = {
  title: " Education | CapitalRevo",
  description:
    "AI trading systems effortlessly perform complex technical analyses across multiple markets",
  alternates: {
    canonical: "https://capitalrevo.com/education",
  },
};

export default function AiSupport() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="bg-gray-50">
        <div className="pt-20 pb-10 flex-row justify-center items-center">
          <h1 className=" text-blue-500 text-center text-4xl font-bold md:mt-10">
            Education
          </h1>
          <div className="flex justify-center ">
            <p className=" text-center text-[#475467]  p-4 max-w-[800px] ">
              Access dozens of trading lessons for all levels! Unlimited access
              to our trading lesson library Embark on a comprehensive learning
              journey with hundreds of lessons catering to all skill levels,
              meticulously organized into courses for effortless progress
              through the material.
            </p>
          </div>
          <div className="flex justify-center ">
            <p className="text-center text-[#475467]  text-sm max-w-[900px] ">
              Learn to Trade with Confidence
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <VideoPlayer />
      </div>
    </div>
  );
}
