import React from "react";
import Button from "./Button";
import DP from "../Interface/DP";

const Header = () => {
  return (
    <div>
      <h1 style={{ fontSize: 60 }}>
        ScheDUE
        <DP link="https://i.imgur.com/aEHEnDO.png" name="alien boi"></DP>
        {/* <div className="profileName">{name}</div> */}
      </h1>
    </div>
  );
};

export default Header;
