"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CurrencyCalculator from "../components/CurrencyCalculator";
import FibonacciCalculator from "../components/Fibonacci";
import PivotPoint from "../components/PivotPoint";
import CfdCalculator from "../components/CfdCalculator";
import StopLossLimit from "../components/StopLossLimit";
import MarginCalculator from "../components/MarginCalculator";
import PipValue from "../components/PipValue"; 
import Heatmap from "../components/Heatmap";

const WidgetsCalculators = () => {
    const [activeTab, setActiveTab] = useState("advancedWidget");
  
    const tabs = [
      { id: "advancedWidget", label: "Currency Converter", component: <CurrencyCalculator /> },
      { id: "symbolOverviewWidget", label: "Fibonacci Calculator", component: <FibonacciCalculator /> },
      { id: "pivotCalculator", label: "Pivot Calculator", component: <PivotPoint /> },
      { id: "cfdCalculator", label: "CFD Profit/Loss Calculator", component: <CfdCalculator /> },
      { id: "marginCalculator", label: "Margin Calculator", component: <MarginCalculator /> },
      { id: "stopLossLimit", label: "Stop Loss Limit", component: <StopLossLimit /> },
      { id: "pipValue", label: "Pip Value", component: <PipValue /> }, 
      { id: "heatmap", label: "Heatmap", component: <Heatmap /> }, 
    ];
  
    return (
        <div className="max-w-screen-xl mx-auto xl:px-10">
  <div className="mt-5 lg:flex lg:justify-between mb-10">
    <div className="max-w-sirina md:flex flex-shrink-0">
      <div className="p-10 lg:p-2">
        <div className="flex text-sm gap-2 md:flex md:flex-col md:gap-0 pl-2">
        {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`-ml-1 border-l-4 border-gray-300 hover:border-blue-500 cursor-pointer ${activeTab === tab.id ? 'border-blue-500' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <p className={`mx-2 my-4 mb-2 text-sm md:text-base ${activeTab === tab.id ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                {tab.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-8">
          <Link href="https://platform.capitalrevo.com/login">
            <button className="px-4 py-3 gap-2 w-48 h-14 bg-[#1200FF] rounded-xl shadow-xs text-white">
              Explore the Platform
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="relative w-full h-full flex justify-center flex-grow mt-4">
      {tabs.map((tab) => (
        activeTab === tab.id && (
          <div key={tab.id} className="h-full w-full lg:pl-10">
            {tab.component}
          </div>
        )
      ))}
    </div>
  </div>
</div>


      
    );
  };
  
  export default WidgetsCalculators;
