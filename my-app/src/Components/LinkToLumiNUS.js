import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";
import { Auth0Provider } from "@auth0/auth0-react";

const LinkToLumiNUS = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="btn" onClick={() => loginWithRedirect()}>
      Link to LumiNUS
    </button>
  );
};

export default LinkToLumiNUS;
