"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Paket } from "@/app/utilitis/interface";
import Link from "next/link";

// Async function to fetch packages from Sanity
async function getPaketi() {
  const query = `*[_type == 'paketi'] {
    title,
    description,
    listItems
  }`;
  const datap = await client.fetch(query);
  return datap;
}

const AccountExpand = () => {
  const [paketi, setPaketi] = useState<Paket[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Set default to Basic Account

  // Fetch packages on component mount
  useEffect(() => {
    const fetchPaketi = async () => {
      const data = await getPaketi();
      // Reorder the paketi to have Silver Account between Gold and Basic
      const reorderedPaketi = [
        data[0], // Basic Account
        data[4], // Silver Account
        data[1], // Gold Account
        data[2], // Premium Account
        data[3], // VIP Account
      ];
      setPaketi(reorderedPaketi);
    };

    fetchPaketi();
  }, []);

  const imageSrc = "check-Icon.svg"; // Replace with your actual image path

  return (
    <div className=" flex justify-center items-center mt-5 ">
      <div className="flex flex-col items-center lg:hidden  mt-5 space-y-4 p-2">
        {/* Dugmići za odabir kartice */}
        <div className="flex space-x-2">
          {paketi.map((account, index) => (
            <button
              key={account.title}
              onClick={() => setSelectedIndex(index)}
              className={`p-2 rounded text-xs ${
                selectedIndex === index
                  ? "bg-[#00dbfe] text-gray-600 font-semibold"
                  : "bg-gray-50  text-gray-900"
              }`}
            >
              {account.title}
            </button>
          ))}
        </div>

        {/* Prikaz odabrane kartice */}
        <div className="w-2/3 max-w-md flex justify-center">
          <div className="w-full bg-white p-5 rounded-lg shadow-lg">
            <p className="text-lg text-center font-black text-gray-700">
              {paketi[selectedIndex]?.title}
            </p>
            <div className="text-black  mt-2">
              <p className="text-center mb-1">
                {paketi[selectedIndex]?.description}
              </p>
              <ul className="">
                {paketi[selectedIndex]?.listItems?.map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs">
                    <img src={imageSrc} alt="Icon" className="w-4 h-4 m-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex justify-center">
              <Link href="https://platform.capitalrevo.com/login">
                <button className="bg-[#00dbfe] rounded-lg p-2 text-white">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountExpand;
