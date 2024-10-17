import React from "react";

const MarginCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Margin calculator helps you calculate the margin needed to open and hold positions.
      Enter your account base currency, select the currency pair and the leverage, and finally enter the size of your position in lots.      </p>
      <br />
      <iframe
        className="common-iframes margin-calculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/margin.html"
      ></iframe>
    </div>
  );
};

export default MarginCalculator;
