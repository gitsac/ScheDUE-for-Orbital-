import React from "react";
import Header from "../Components/Header";
import ArrowWithMonth from "./ArrowWithMonth";

const Main1 = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="calendarContainer" style={{}}>
        <ArrowWithMonth style={{}} />
        <div className="calendarMonthContainer"></div>
      </div>
    </>
  );
};

export default Main1;
