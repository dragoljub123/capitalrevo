import React from "react";

const StopLossLimit: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Calculating a trade&apos;s risk-reward ratio is an important part of determining appropriate stop loss levels. The ratio compares the potential reward from a trade to the amount of risk undertaken. Traders aim to structure positions where the expected profit significantly outweighs any maximum possible loss.
      </p>
      <br />
      <iframe
        className="common-iframes stop-loss-limit"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/stop-loss-take-profit-levels.html"
      ></iframe>
    </div>
  );
};

export default StopLossLimit;
