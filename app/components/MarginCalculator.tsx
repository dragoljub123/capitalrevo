import React from "react";

const MarginCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes margin-calculator"
        src="https://widgets.fxwidgets.com/calculators/NewsFactory-EN/margin.html"
      ></iframe>
    </div>
  );
};

export default MarginCalculator;
