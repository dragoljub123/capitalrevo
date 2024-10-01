import React from "react";
import { Navbar } from "../components/Navbar";
import Paketi from "../components/Paketi";
import { Paket } from "@/app/utilitis/interface";
import { client } from "@/sanity/lib/client";
import CompareAccountsButton from "@/app/components/CompareAccountsButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts | CapitalRevo",
  description:
    "CapitalRevo offers specialized accounts that empower businesses. Experience tailored financial solutions to drive your success.",
  alternates: {
    canonical: "https://capitalrevo.com/accounts",
  },
};

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

export default async function Accounts() {
  const paketi: Paket[] = await getPaketi();

  return (
    <div className="mx-auto">
      <Navbar />
      <div className=" pb-20 flex-row justify-center ">
        <div className="crafy ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
              <h2 className="text-4xl py-4 text-white font-bold mb-6 mt-0 lg:mt-6 text-center lg:text-4xl ">
                Choose the Right Account for Your Trading Needs
              </h2>
              <p className=" mb-4 text-center text-sm  text-white max-w-[900px]">
                At CapitalRevo, we understand that every trader has different
                goals and requirements. That&apos;s why we offer a variety of
                account types, tailored to suit your trading style, experience
                level, and financial objectives.
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
      </div>
      <div className="crafy ">
        <div className=" mx-auto flex items-center justify-center ">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h2 className="text-4xl py-4 text-white font-bold mb-6 mt-0 lg:mt-6 text-center lg:text-4xl ">
              Compare Accounts
            </h2>
            <p className=" mb-4 text-center text-sm  text-white max-w-[900px]">
              We make it easy for you to choose the account that best suits your
              needs with our comparison tool. Explore features, benefits, and
              find the perfect fit.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-20">
          <div className=" flex justify-center items-center">
            <CompareAccountsButton>Compare Accounts</CompareAccountsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
