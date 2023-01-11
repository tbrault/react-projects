import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Cocktails(): JSX.Element {
  const { cocktails } = useContext(AppContext);
  return <div>Cocktails</div>;
}

export default Cocktails;
