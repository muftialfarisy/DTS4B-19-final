import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Top from "./components/Top";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />
      {/* <Home /> */}
      {/* <Top /> */}
    </div>
  );
}

export default App;
