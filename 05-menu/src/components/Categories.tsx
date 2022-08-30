import React, { FunctionComponent } from "react";

const Categories: FunctionComponent = () => {
  return (
    <div className="btn-container">
      <button className="filter-btn">All</button>
      <button className="filter-btn">breakfast</button>
      <button className="filter-btn">lunch</button>
      <button className="filter-btn">shakes</button>
    </div>
  );
};

export default Categories;
