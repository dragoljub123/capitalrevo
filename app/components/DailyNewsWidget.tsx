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
      {/* Vaš sadržaj ovde */}
      <div data-dyntube-key="ktX1QPiPO0SsPAbSykwCg"></div>
    </div>
  );
};

export default DailyNewsWidget;
