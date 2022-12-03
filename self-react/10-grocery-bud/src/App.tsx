import React, { useState, FormEvent } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import AlertMessage from "./interfaces/AlertMessage";
import useLocaleStorage from "./hooks/useLocaleStorage";

function App() {
  const [item, setItem] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertMessage>({
    show: false,
    message: "",
    type: "",
  });
  const [groceryList, setGroceryList] = useLocaleStorage("list");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item && isEdit) {
      groceryList.splice(index, 1, item);
      setGroceryList(groceryList);
      setIsEdit(false);
      setAlert({ show: true, message: "value changed", type: "success" });
      setItem("");
    } else if (item) {
      setGroceryList([...groceryList, item]);
      setItem("");
      setAlert({
        show: true,
        message: "item added to the list",
        type: "success",
      });
    } else {
      setAlert({ show: true, message: "please entre value", type: "danger" });
    }
  };

  const clearGroceryList = () => {
    setGroceryList([]);
    setAlert({ show: true, message: "empty list", type: "danger" });
    setItem("");
  };

  return (
    <section className="section-center">
      {alert.show && <Alert alert={alert} removeAlert={setAlert} />}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g. egg"
            className="grocery"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {groceryList.length !== 0 && (
        <article className="grocery-container">
          <List
            groceryList={groceryList}
            setGroceryList={setGroceryList}
            setAlert={setAlert}
            setItem={setItem}
            setIsEdit={setIsEdit}
            setIndex={setIndex}
          />
          <button className="clear-btn" onClick={clearGroceryList}>
            clear items
          </button>
        </article>
      )}
    </section>
  );
}

export default App;
