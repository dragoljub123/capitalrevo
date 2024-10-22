import React from "react";

const PipValue: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Accurately calculate pip values and manage your trade risks. A &apos;Pip&apos;, short for &apos;point in percentage&apos;, quantifies exchange rate movements between two currencies in Forex trading. Utilizing these small measurement units helps protect new traders from substantial losses.
      </p>
      <br />
      <iframe
        className="common-iframes pip-value"
        src="https://widgets.fxwidgets.com/calculators/CapitalRevo-EN/pip-value.html"
      ></iframe>
    </div>
  );
};

export default PipValue;
