import React from "react";

const StopLossLimit: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes stop-loss-limit"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/stop-loss-take-profit-levels.html"
      ></iframe>
    </div>
  );
};

export default StopLossLimit;
