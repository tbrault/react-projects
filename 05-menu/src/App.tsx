import React, { FunctionComponent, useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data/data";

const App: FunctionComponent = () => {
  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <Menu items={items} />
    </section>
  );
};

export default App;
