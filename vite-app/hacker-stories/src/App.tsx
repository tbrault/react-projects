import { ChangeEvent, useState } from "react";
import "./App.css";
import List from "./components/Lists";
import Search from "./components/Search";
import websites from "./data/data";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleChange} />
      <hr />
      <List websites={websites} />
    </div>
  );
}

export default App;
