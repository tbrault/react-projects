import React, { useState, useEffect, FormEvent } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import AlertMessage from "./interfaces/AlertMessage";

function App() {
  const [item, setItem] = useState<string>("");
  const [groceryList, setGroceryList] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertMessage>({
    show: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      setGroceryList([...groceryList, item]);
      setItem("");
      setAlert({
        show: true,
        message: "item added to the list",
        type: "success",
      });
    } else if (item && isEdit) {
      setAlert({ show: true, message: "value changed", type: "success" });
    } else {
      setAlert({ show: true, message: "please entre value", type: "error" });
    }
  };

  const clearGroceryList = () => {
    setGroceryList([]);
    setAlert({ show: true, message: "empty list", type: "error" });
    setItem("");
  };

  return (
    <section className="section-center">
      {alert.show && <Alert alert={alert} setAlert={setAlert} />}
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
