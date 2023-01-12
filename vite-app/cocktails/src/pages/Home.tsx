import React from "react";
import Cocktails from "../features/Cocktails/Cocktails";
import SearchBar from "../features/SearchBar/SearchBar";

function Home(): JSX.Element {
  return (
    <>
      <SearchBar />
      <Cocktails />
    </>
  );
}

export default Home;
