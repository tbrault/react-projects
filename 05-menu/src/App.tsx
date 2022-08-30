import React, { FunctionComponent, useEffect, useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data/data";
import MenuItem from "./types/menuItem";

const App: FunctionComponent = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);

  useEffect(() => {
    setCategories(() => {
      return ["all", ...new Set<string>(items.map((item) => item.category))];
    });
  }, []);

  const filterMenu = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((menuItem) => menuItem.category === category));
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
