import React from "react";

const PivotPoint: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes pivot-point"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/pivots.html"
      ></iframe>
    </div>
  );
};

export default PivotPoint;
