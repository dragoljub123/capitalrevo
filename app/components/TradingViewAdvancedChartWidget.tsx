"use client";
import { useEffect, useRef } from "react";

const TradingViewAdvancedChartWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      // Cleanup when the component is unmounted
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container h-full w-full">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget h-[calc(100%-32px)] w-full"
      ></div>
    </div>
  );
};

export default TradingViewAdvancedChartWidget;
