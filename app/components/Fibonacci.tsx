import React from "react";

const FibonacciCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes fibonacci-calculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/fibonacci.html"
      ></iframe>
    </div>
  );
};

export default FibonacciCalculator;
