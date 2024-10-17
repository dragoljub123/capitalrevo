import React from "react";

const CurrencyCalculator: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Currency Converter allows you to check the latest foreign exchange average bid/ask rates and convert all major world currencies.
      Simply put, This calculator will convert your preferred currency.
      </p>
      <br />
      <iframe
        className="common-iframes currencycalculator"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/currency-calculator.html"
        ></iframe>
    </div>
  );
};

export default CurrencyCalculator;
