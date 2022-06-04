import React from "react";
import Button from "../Components/Button";
import ArrowWithMonth from "./ArrowWithMonth";

const AWMButtonDate = () => {
  return (
    <>
      <div
        style={{
          maxWidth: 1200,
          justifyContent: "space-between",
          display: "flex",
          paddingTop: 80,
          paddingLeft: 480,
          alignItems: "center",
        }}
      >
        {/* <ArrowWithMonth month="June" /> */}
        <div style={{ paddingLeft: 545, paddingTop: 0 }}>
          <Button className="btn" text="Link to LumiNUS" />
        </div>
      </div>
      <div
        style={{
          maxWidth: 1600,
          justifyContent: "space-between",
          display: "flex",
          paddingTop: 0,
          paddingLeft: 1010,
          fontSize: 12,
        }}
        // className="lastUpdated"
      >
        Last updated on 24th May 23:00.
      </div>
    </>
  );
};

export default AWMButtonDate;
