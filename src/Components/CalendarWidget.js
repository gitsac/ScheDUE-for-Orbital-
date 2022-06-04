import React from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import { useState } from "react";
import "react-calendar/dist/customDesign.css";

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <p>
        <span style={{ fontWeight: "bold", paddingLeft: 350, paddingTop: 100 }}>
          Selected Date:{" "}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
};

export default CalendarWidget;
