import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Views from "./Views";
// import Header from "./Components/Header";
import Login from "./Login Page/Login";

function App() {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  );
}

export default App;
