import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login Page/Login";
import Button from "./Components/Button";
import Main1 from "./Interface/Main1";
import Header from "./Components/Header";

const Views = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <Login />
            <Link to="/interface">
              <div className="btnForLogin">
                <Button text="Login" color="#088608"></Button>
              </div>
            </Link>
          </div>
        }
      />
      <Route
        path="/interface"
        element={
          <div>
            <Main1></Main1>
          </div>
        }
      />
      <Route
        path="*"
        element={<div>Page is not implemented yet, please hold on!</div>}
      />
    </Routes>
  );
};

export default Views;
