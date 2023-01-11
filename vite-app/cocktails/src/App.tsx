import React from "react";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <div>App</div>
      <Outlet />
    </>
  );
}

export default App;
