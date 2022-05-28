import React from "react";

const ArrowWithMonth = () => {
  return (
    <div
      className="AWM"
      style={{ top: 80, left: 250, fontSize: 45, lineHeight: 3 }}
    >
      <h1 className="arrow left" style={{ padding: 8 }}></h1>
      May
      <h1 className="arrow right" style={{ padding: 8 }}></h1>
    </div>
  );
};

export default ArrowWithMonth;
