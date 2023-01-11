import React, { useContext } from "react";
import { CocktailsContext } from "../context/cocktailsContext";

function Cocktails(): JSX.Element {
  const cocktails = useContext(CocktailsContext);
  return <div>Cocktails</div>;
}

export default Cocktails;
