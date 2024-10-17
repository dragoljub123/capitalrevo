"use client";

import React, { useEffect } from "react";

const DailyNewsWidget = () => {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.dyntube.com/v1.0/dyntube.js";

    document.head.appendChild(script);

    return () => { 
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="">
        <div className="pt-3 pb-5 flex-row justify-center items-center">
          <h2 className=" text-blue-500 text-center text-4xl font-black mt-6 px-20 md:px-0">
            CapitalRevo Daily News!
          </h2>
          <div className="flex justify-center ">
            <p className="text-md md:text-xl text-center my-2 px-4 max-w-[900px] font-bold">
              The biggest news and trends in the world of finance - <br />
              <span className="text-blue-500 "> EVERY MARKET DAY!</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-10 ">
          <div
            className="w-5/6 md:w-1/2 border-blue-500 border-[6px] rounded-xl "
            data-dyntube-key="ktX1QPiPO0SsPAbSykwCg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DailyNewsWidget;
