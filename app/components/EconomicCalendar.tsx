import React from "react";

const EconomicCalendar: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        className="common-iframes economic-calendar"
        src="https://widgets.fxwidgets.com/default/en-economic-calendar.html"
      ></iframe>
    </div>
  );
};

export default EconomicCalendar;
