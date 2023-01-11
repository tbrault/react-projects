import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
