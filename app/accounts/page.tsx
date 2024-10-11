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
      <div className="  flex-row justify-center ">
        <div className="crafy  ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
              <h2 className="text-4xl py-4 text-white font-bold mb-6 mt-10 lg:mt-20 text-center lg:text-4xl ">
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
      <div className="">
        <div className=" mx-auto flex items-center justify-center ">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h2 className="text-4xl py-4 text-blue-500 font-bold mb-6 mt-0 text-center lg:text-4xl ">
              Compare Accounts
            </h2>
            <p className=" mb-4 text-center text-sm  text-gray max-w-[900px]">
              We make it easy for you to choose the account that best suits your
              needs with our comparison tool. Explore features, benefits, and
              find the perfect fit.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 pb-5 lg:px-10">
        <div className="overflow-x-auto pt-5 border-b-[1px] border-gray-300">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Basic Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Silver Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider plavigradijent">
                  Gold Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VIP Account
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Investment Amount */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">
                  Investment Amount
                </td>
                <td className="px-6 py-3 text-sm">$200 - $9,999</td>
                <td className="px-6 py-3 text-sm">$10,000 - $24,999</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  $25,000 - $49,999
                </td>
                <td className="px-6 py-3 text-sm">$100,000+</td>
                <td className="px-6 py-3 text-sm">$250,000+</td>
              </tr>

              {/* Leverage */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Leverage</td>
                <td className="px-6 py-3 text-sm">1:30</td> {/* Updated for Basic Account */}
                <td className="px-6 py-3 text-sm">1:100</td> {/* Updated for Silver Account */}
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">1:200</td>
                <td className="px-6 py-3 text-sm">1:300</td>
                <td className="px-6 py-3 text-sm">1:400</td>
              </tr>

              {/* Swaps */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Swaps</td>
                <td className="px-6 py-3 text-sm">Regular</td>
                <td className="px-6 py-3 text-sm">25% lower</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  50% lower
                </td>
                <td className="px-6 py-3 text-sm">75% lower</td>
                <td className="px-6 py-3 text-sm">Swap-free</td>
              </tr>

              {/* Spreads */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Spreads</td>
                <td className="px-6 py-3 text-sm">Regular</td>
                <td className="px-6 py-3 text-sm">Regular</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  As low as 1.9
                </td>
                <td className="px-6 py-3 text-sm">As low as 1.9</td>
                <td className="px-6 py-3 text-sm">As low as 1.5</td>
              </tr>

              {/* Education */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Education</td>
                <td className="px-6 py-3 text-sm">Basic Education</td>
                <td className="px-6 py-3 text-sm">Basic Education</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  Advanced Education
                </td>
                <td className="px-6 py-3 text-sm">Advanced Education</td>
                <td className="px-6 py-3 text-sm">Advanced Education</td>
              </tr>

              {/* Market Reviews */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">
                  Market Reviews
                </td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  Daily Market Reviews
                </td>
                <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
                <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
              </tr>

              {/* Risk-free Trades */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">
                  Risk-free Trades
                </td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  1 Risk-free trade
                </td>
                <td className="px-6 py-3 text-sm">3 Risk-free trades</td>
                <td className="px-6 py-3 text-sm">3 Risk-free trades</td>
              </tr>

              {/* Dedicated Market Analyst */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">
                  Dedicated Market Analyst
                </td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  Dedicated Market Analyst
                </td>
                <td className="px-6 py-3 text-sm">Market Analyst</td>
                <td className="px-6 py-3 text-sm">Market Analyst</td>
              </tr>

              {/* Webinars */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Webinars</td>
                <td className="px-6 py-3 text-sm">Live Webinars</td>
                <td className="px-6 py-3 text-sm">Live Webinars</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  Live Webinars with Senior Trading Strategist
                </td>
                <td className="px-6 py-3 text-sm">
                  Live Webinars with Senior Trading Strategist
                </td>
                <td className="px-6 py-3 text-sm">
                  Live Webinars with Senior Trading Strategist
                </td>
              </tr>

              {/* Withdrawals */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">Withdrawals</td>
                <td className="px-6 py-3 text-sm">N/A</td>
                <td className="px-6 py-3 text-sm">1 Free Withdrawal Monthly</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  3 Free Withdrawals Monthly
                </td>
                <td className="px-6 py-3 text-sm">
                  Unlimited Free Withdrawals
                </td>
                <td className="px-6 py-3 text-sm">
                  Unlimited Free Withdrawals
                </td>
              </tr>

              {/* Special Offers */}
              <tr>
                <td className="px-6 py-3 text-sm font-semibold">
                  Special Offers
                </td>
                <td className="px-6 py-3 text-sm">No Offers</td>
                <td className="px-6 py-3 text-sm">No Offers</td>
                <td className="px-6 py-3 text-sm plavigradijent font-semibold">
                  Trading Bonus
                </td>
                <td className="px-6 py-3 text-sm">Trading Bonus</td>
                <td className="px-6 py-3 text-sm">Trading Bonus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
