import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Header";
import ArrowWithMonth from "./ArrowWithMonth";

const linkStyle = {
  top: 200,
  left: 200,
};

const Main1 = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="calendarContainer">
        <ArrowWithMonth />
        <Button className="btn" text="Link to LumiNUS" />
        <div className="calendarMonthContainer"></div>
      </div>
    </>
  );
};

export default Main1;
