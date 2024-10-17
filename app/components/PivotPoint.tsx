import React from "react";

const PivotPoint: React.FC = () => {
  return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      The Pivot Point Calculator is used to calculate pivot points for forex (including SBI FX), forex options, futures, bonds, commodities, stocks, options and any other investment security that has a high, low and close price in any time period.
            </p>
      <br />
      <iframe
        className="common-iframes pivot-point"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/pivots.html"></iframe>
    </div>
  );
};

export default PivotPoint;
