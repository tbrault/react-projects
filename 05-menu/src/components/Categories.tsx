import React, { FunctionComponent } from "react";

type Props = {
  categories: string[];
};

const Categories: FunctionComponent<Props> = ({ categories }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn">All</button>
      {categories.map((category) => {
        return <button className="filter-btn">{category}</button>;
      })}
    </div>
  );
};

export default Categories;
