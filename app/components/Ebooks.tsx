"use client";

import { useState } from "react";

export default function Ebooks() {
  const [currentEbook, setCurrentEbook] = useState("https://online.anyflip.com/zfil/jxtu/index.html");
  const [activeButton, setActiveButton] = useState(0);

  const ebooks = [
    {
      title: "How To Trade Like A Pro",
      url: "https://online.anyflip.com/zfil/jxtu/index.html",
    },
    {
      title: "Forex Trading",
      url: "https://online.anyflip.com/zfil/swbx/index.html",
    },
    {
      title: "Insider Techniques To Profitable Forex Trading",
      url: "https://online.anyflip.com/zfil/xwuj/index.html",
    },
  ];

  const handleEbookClick = (index: number, url: string) => {
    setCurrentEbook(url);
    setActiveButton(index);
  };

  return (
    <div className="flex flex-col justify-center items-start p-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center self-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
        {ebooks.map((ebook, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeButton === index ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleEbookClick(index, ebook.url)}
          >
            {ebook.title}
          </button>
        ))}
      </div>

      <div className="relative w-full overflow-hidden rounded-lg">
        <iframe
          className="w-full h-80 md:h-[680px]"
          src={currentEbook}
          seamless
          allowTransparency
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
