import React from "react";
import { Calendar } from "react-calendar";
import CalendarWidget from "../Components/CalendarWidget";
import Header from "../Components/Header";
import TaskWidget from "../Components/TaskWidget";
import AWMButtonDate from "./AWMButtonDate";

const linkStyle = {
  top: 200,
  left: 200,
};

const Main1 = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "lightcyan",
      }}
    >
      <div>
        <Header />
      </div>
      <div>
        <AWMButtonDate />
        <TaskWidget />
      </div>
      <div
        style={{
          maxWidth: 1200,
          paddingLeft: 200,
        }}
      >
        <CalendarWidget />
      </div>
      <div>{/* <TaskWidget /> */}</div>
    </div>
  );
};

export default Main1;
