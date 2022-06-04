import React from "react";
import PropTypes from "prop-types";

const DP = ({ link, name }) => {
  return (
    <>
      <img src={link} alt="Alien" border="0" className="interfaceDP" />
      <div className="profileName">{name}</div>
    </>
  );
};

DP.defaultProps = {
  link: "https://i.imgur.com/t9bCQLn.png",
  name: "Guest",
};

DP.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
};

export default DP;
