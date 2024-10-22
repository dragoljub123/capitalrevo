import React from "react";
import { Navbar } from "../components/Navbar";
import AboutUsCard from "../components/AboutUsCard";
import AboutUsCard2 from "../components/AboutUsCard2";
import FaturedCrad from "../components/FaturedCrad";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | CapitalRevo",
  description:
    "We are committed to delivering an exceptional trading experience by providing traders access to the best tools and resources available.",
  // Adding the canonical URL for the About Us page
  alternates: {
    canonical: "https://capitalrevo.com/about-us",
  },
};
export default function AboutUs() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="pt-10 md:pt-20 pb-20 flex justify-center">
        <div className="max-w-screen-xl mx-auto xl:px-10">
          <h1 className=" text-[#00dbfe] text-center text-5xl font-bold mt-10">
            Who We Are
          </h1>
          <p className="text-center text-[#475467]  p-4">
            With over 15 years of experience in the financial industry,
            CapitalRevo has grown into a trusted name
            <br />
            in the trading world. We are committed to delivering an exceptional
            trading experience by providing
            <br />
            traders access to the best tools and resources available.
          </p>
          <div className="mt-20 ">
            <AboutUsCard
              imageSrc1="/Featured icon(2).png"
              title="Our Mission"
              text="Our mission is simple: to empower traders of all levels to achieve financial freedom by providing cutting-edge technology, educational resources and personalized support. At CapitalRevo, our mission goes beyond just offering a platform—we aim to empower traders of all experience levels to unlock their full potential and achieve financial freedom. By combining state-of-the-art AI technology with comprehensive educational resources and personalized support, we ensure that every trader, whether novice or expert, has the tools they need to succeed. With CapitalRevo, you're never trading alone — our support team and innovative technology are with you every step of the way."
              imageSrc2="/ourmisionstrelica.png"
            />
            <div className="mt-10 mb-10">
              <AboutUsCard2
                imageSrc1="/Featured icon(1).png"
                title="Our Story"
                text="CapitalRevo was established to address the challenges traders face in a fast-paced, ever-evolving market. From day one, our vision has been clear: provide world-class trading solutions accessible to everyone, regardless of experience level.
                CapitalRevo was born out of a desire to solve the challenges traders encounter in today's fast-paced and constantly shifting financial markets. From the beginning, our vision has been to level the playing field by offering world-class trading solutions that are both powerful and accessible. Whether you're a seasoned professional or a complete beginner, we've designed our platform to cater to your needs with cutting-edge tools, automated strategies, and intuitive interfaces.
                "
                imageSrc2="/ourstory.png"
              />
            </div>
            <AboutUsCard
              imageSrc1="/Featured icon.png"
              title="Our Team"
              text="CapitalRevo boasts a team of highly experienced financial professionals, analysts, and support staff, all dedicated to helping traders succeed. We work continuously to improve our services, ensuring that each trader has access to market-leading resources.              Our team works tirelessly to refine our services, keeping pace with the latest market trends and technological advancements. We're focused on providing each trader with cutting-edge tools, in-depth insights, and personalized support to help them navigate the complexities of the financial markets with confidence. At CapitalRevo, your success is our priority, and we are here to guide you every step of the way.
              "
              imageSrc2="/ourteam.png"
            />
          </div>{" "}
          <h2 className=" text-center text-4xl font-bold mt-10">
            Why CapitalRevo?
          </h2>
          <div className="flex-row md:flex justify-center mt-10 ">
            <FaturedCrad
              title="Innovation"
              description="We constantly enhance our platform to ensure our traders have the latest tools at their disposal."
              iconSrc="/Featured icon(6).png"
              iconAlt="Innovation"
            />
            <FaturedCrad
              title="Transparency"
              description="We believe in open and transparent trading conditions, with no hidden fees or surprises."
              iconSrc="/Featured icon(7).png"
              iconAlt="Transparency"
            />
            <FaturedCrad
              title="Support"
              description="Our 24/7 customer support is always available to assist you with any challenges you face."
              iconSrc="/Featured icon(8).png"
              iconAlt="Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
