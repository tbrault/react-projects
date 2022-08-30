import React, { FunctionComponent, useEffect, useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data/data";

const App: FunctionComponent = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(() => {
      return [...new Set<string>(items.map((item) => item.category))];
    });
  }, []);

  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} />
      <Menu items={items} />
    </section>
  );
};

export default App;
