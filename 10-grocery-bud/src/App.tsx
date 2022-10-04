import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  return (
    <section className="section-center">
      <Alert />
      <form className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" placeholder="e.g. egg" className="grocery" />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      <List />
    </section>
  );
}

export default App;
