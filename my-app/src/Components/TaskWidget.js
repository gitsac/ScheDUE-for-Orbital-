import React from "react";
import { useState } from "react";

const TaskWidget = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // let numberToMonth = new Map([
  //   [1, "January"],
  //   [2, "February"],
  //   [3, "March"],
  //   [4, "April"],
  //   [5, "May"],
  //   [6, "June"],
  //   [7, "July"],
  //   [8, "August"],
  //   [9, "September"],
  //   [10, "October"],
  //   [11, "November"],
  //   [12, "December"],
  // ]);

  // let Month = 1;

  // for (let i = 1; i < 13; i++) {
  //   if (i === month) {
  //     Month = numberToMonth.get(i);
  //   }
  // }

  // let displayThis = day + " " + Month + " " + year;
  return (
    <div
      style={{
        paddingLeft: 1500,
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      {/* {displayThis} */}
      {/* {date.toDateString().substring(4)} */}
    </div>
  );
};

export default TaskWidget;
