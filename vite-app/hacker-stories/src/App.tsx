import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import List from "./components/Lists";
import Search from "./components/Search";
import websites from "./data/data";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "React"
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const websitesFiltered = websites.filter((website) =>
    website.websiteCharacteristic.title.toLowerCase().includes(searchTerm)
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleChange} />
      <hr />
      <List websites={websitesFiltered} />
    </div>
  );
}

export default App;
