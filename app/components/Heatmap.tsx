import React from "react";

const Heatmap: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes heatmap"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/heatmap/options.html"
      ></iframe>
    </div>
  );
};

export default Heatmap;
