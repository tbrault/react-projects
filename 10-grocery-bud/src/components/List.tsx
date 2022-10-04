import React, { MouseEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  groceryList: string[];
  setGroceryList: Function;
  setAlert: Function;
};

const List = ({
  groceryList,
  setGroceryList,
  setAlert,
}: Props): JSX.Element => {
  const deleteItem = (item: string) => {
    setGroceryList([...groceryList.filter((name) => name !== item)]);
    setAlert({ show: true, message: "item removed", type: "error" });
  };

  return (
    <>
      {groceryList.map((item, index) => {
        return (
          <div className="grocery-item" key={`${index}-${item}`}>
            <p className="title">{item}</p>
            <div>
              <FaEdit className="edit-btn" />
              <FaTrash
                className="delete-btn"
                onClick={() => deleteItem(item)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
