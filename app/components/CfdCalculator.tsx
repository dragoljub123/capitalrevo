import React from "react";

const CfdCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes cfd-calculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/stop-loss-take-profit.html"
      ></iframe>
    </div>
  );
};

export default CfdCalculator;
