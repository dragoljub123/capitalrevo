"use client";

import { useEffect, useRef } from "react";

const TradingViewWidgetNews: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
<<<<<<< HEAD
      width: "1200", // Set the specific width you need
=======
      width: "1180", // Set the specific width you need
>>>>>>> 7ac0c0d88ae4afbc8db901b4a09a2eea1aa47639
      height: "310", // Set the specific height you need
      colorTheme: "light",
      locale: "en",
    });

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      // Cleanup the script element when the component is unmounted
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
};

export default TradingViewWidgetNews;
