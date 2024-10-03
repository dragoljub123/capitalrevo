import React from "react";

const PipValue: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes pip-value"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/pip-value.html"
      ></iframe>
    </div>
  );
};

export default PipValue;
