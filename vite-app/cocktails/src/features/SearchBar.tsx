import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function SearchBar(): JSX.Element {
  const { setSearchQuery } = useContext(AppContext);
  return <div>SearchBar</div>;
}

export default SearchBar;
