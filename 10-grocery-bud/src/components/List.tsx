import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  groceryList: string[];
};

const List = ({ groceryList }: Props): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default List;
