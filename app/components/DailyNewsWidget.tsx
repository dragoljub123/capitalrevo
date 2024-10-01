"use client";

import React, { useEffect } from "react";

const DailyNewsWidget = () => {
  useEffect(() => {
    // Učitavanje Dyntube skripte
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.dyntube.com/v1.0/dyntube.js";

    document.head.appendChild(script);

    return () => {
      // Čistimo nakon uklanjanja komponente
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-50">
        <div className="pt-10 pb-10 flex-row justify-center items-center">
          <h1 className=" naslovboja2 text-center text-4xl font-bold mt-10">
            CapitalRevo Daily News!
          </h1>
          <div className="flex justify-center ">
            <p className="text-xl text-center mt-2 p-4 max-w-[900px] font-bold">
              The biggest news and trends in the world of finance - <br /> EVERY
              MARKET DAY!
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-20 ">
          <div
            className="w-5/6 md:w-1/2 border-blue-500 border-[10px] rounded-xl "
            data-dyntube-key="ktX1QPiPO0SsPAbSykwCg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DailyNewsWidget;
