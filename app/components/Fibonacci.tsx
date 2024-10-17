import React from "react";

const FibonacciCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      A simple and useful tool that can help you to calculate Fibonacci extension and retracement levels for the market price. The Fibonacci Calculator will calculate Fibonacci retracements and Extensions based on 3 values (high, low and custom value).
      </p>
      <br />
      <iframe
        className="common-iframes fibonacci-calculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/fibonacci.html"
      ></iframe>
    </div>
  );
};

export default FibonacciCalculator;
