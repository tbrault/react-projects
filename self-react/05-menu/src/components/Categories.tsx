import React, { FunctionComponent } from "react";

type Props = {
  categories: string[];
  filterMenu: Function;
};

const Categories: FunctionComponent<Props> = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="filter-btn"
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
