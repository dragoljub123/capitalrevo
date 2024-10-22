import React from "react";

const EconomicCalendar: React.FC = () => {
  return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      

      <iframe
        className="common-iframes economic-calendar"
        src="https://widgets.fxwidgets.com/default/en-economic-calendar.html"
      ></iframe>
    </div>
  );
};

export default EconomicCalendar;
