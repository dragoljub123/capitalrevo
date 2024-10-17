import React from "react";

const Heatmap: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Heat map shows investors where liquidity is in a market and how liquidity providers behave on a given day, based on three parameters: color, brightness, and area. Thus, it is important for investors to understand how to read heat maps and filter variables for a detailed market analysis.      </p>
      <br />
      <iframe
        className="common-iframes heatmap"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/heatmap/options.html"
      ></iframe>
    </div>
  );
};

export default Heatmap;
