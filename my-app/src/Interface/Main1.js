import React from "react";
import { Calendar } from "react-calendar";
import CalendarWidget from "../Components/CalendarWidget";
import Header from "../Components/Header";
import AWMButtonDate from "./AWMButtonDate";

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
      <div>
        <AWMButtonDate />
      </div>
      <div
        style={{
          maxWidth: 1200,
          paddingLeft: 200,
        }}
      >
        <CalendarWidget />
      </div>
    </>
  );
};

export default Main1;
