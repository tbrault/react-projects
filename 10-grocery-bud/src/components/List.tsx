import React, { MouseEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  groceryList: string[];
  setGroceryList: Function;
  setAlert: Function;
  setItem: Function;
  setIsEdit: Function;
  setIndex: Function;
};

const List = ({
  groceryList,
  setGroceryList,
  setAlert,
  setItem,
  setIsEdit,
  setIndex,
}: Props): JSX.Element => {
  const deleteItem = (item: string) => {
    setGroceryList([...groceryList.filter((name) => name !== item)]);
    setAlert({ show: true, message: "item removed", type: "error" });
  };

  const editItem = (item: string, index: number) => {
    setIndex(index);
    setIsEdit(true);
    setItem(item);
  };

  return (
    <>
      {groceryList.map((item, index) => {
        return (
          <div className="grocery-item" key={`${index}-${item}`}>
            <p className="title">{item}</p>
            <div>
              <FaEdit
                className="edit-btn"
                onClick={() => editItem(item, index)}
              />
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
