import React, { FunctionComponent } from "react";
import MenuItem from "../types/menuItem";
import SingleMenuItem from "./SingleMenuItem";

type Props = {
  items: MenuItem[];
};

const Menu: FunctionComponent<Props> = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        return <SingleMenuItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Menu;
