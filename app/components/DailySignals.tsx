import React from "react";

const DailySignals: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes daily-signals"
        src="https://widgets.fxwidgets.com/default/en-technical-analysis.html"
      ></iframe>
    </div>
  );
};

export default DailySignals;
