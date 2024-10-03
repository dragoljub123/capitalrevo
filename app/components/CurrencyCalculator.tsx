import React from "react";

const CurrencyCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes currencycalculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/currency-calculator.html"
      ></iframe>
    </div>
  );
};

export default CurrencyCalculator;
