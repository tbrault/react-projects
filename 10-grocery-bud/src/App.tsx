import React, { useState, useEffect, FormEvent } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [item, setItem] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(true);
  const [groceryList, setGroceryList] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const list = groceryList;
    list.push(item);
    setGroceryList(list);
    setItem("");
  };

  console.log(groceryList);

  return (
    <section className="section-center">
      <Alert />
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
            submit
          </button>
        </div>
      </form>
      <List groceryList={groceryList} />
    </section>
  );
}

export default App;
