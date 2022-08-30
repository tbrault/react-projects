import React, { FunctionComponent } from "react";
import MenuItem from "../types/menuItem";
import SingleMenuItem from "./SingleMenuItem";

type Props = {
  menuItems: MenuItem[];
};

const Menu: FunctionComponent<Props> = ({ menuItems }) => {
  return (
    <section className="section-center">
      {menuItems.map((menuItem) => {
        return <SingleMenuItem key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};

export default Menu;
