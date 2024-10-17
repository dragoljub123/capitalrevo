import React from "react";

const EconomicCalendar: React.FC = () => {
  return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="mx-auto px-14 sm:px-0 md:px-2 lg:px-0 text-[#475467] text-center md:text-left">
      Economic Calendar covers financial events and indicators from all over the world. It&apos;s automatically updated when new data is released.
All events, interest rate, prices & inflation, labour market, GDP growth, foreign trade, government, business confidence, consumer sentiment, housing market.
      </p>
      <br />

      <iframe
        className="common-iframes economic-calendar"
        src="https://widgets.fxwidgets.com/default/en-economic-calendar.html"
      ></iframe>
    </div>
  );
};

export default EconomicCalendar;
