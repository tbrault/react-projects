import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  groceryList: string[];
};

const List = ({ groceryList }: Props): JSX.Element => {
  return (
    <article className="grocery-container">
      {groceryList.map((item, index) => {
        return (
          <div className="grocery-item" key={`${index}-${item}`}>
            <p className="title">{item}</p>
            <div>
              <FaEdit className="edit-btn" />
              <FaTrash className="delete-btn" />
            </div>
          </div>
        );
      })}
      <button className="clear-btn">clear items</button>
    </article>
  );
};

export default List;
