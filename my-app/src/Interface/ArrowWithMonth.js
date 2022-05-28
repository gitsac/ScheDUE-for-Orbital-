import React from "react";
import PropTypes from "prop-types";

const ArrowWithMonth = ({ month }) => {
  return (
    <div
      className="AWM"
      // style={{ top: 80, left: 250, fontSize: 45, lineHeight: 3 }}
      style={{
        fontSize: 45,
      }}
    >
      <h1 className="arrow left" style={{ padding: 6 }}></h1>
      {month}
      <h1 className="arrow right" style={{ padding: 6 }}></h1>
    </div>
  );
};

ArrowWithMonth.defaultProps = {
  month: "Unknown",
};

ArrowWithMonth.propTypes = {
  month: PropTypes.string,
};

export default ArrowWithMonth;
