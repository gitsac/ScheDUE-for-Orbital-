import React from "react";

const ArrowWithMonth = () => {
  return (
    <div
      className="AWM"
      style={{ top: 100, left: 250, fontSize: 45, lineHeight: 3 }}
    >
      <h1 className="arrow left" style={{ padding: 8 }} />
      May
      <h2 className="arrow right" style={{ padding: 8 }} />
    </div>
  );
};

export default ArrowWithMonth;
