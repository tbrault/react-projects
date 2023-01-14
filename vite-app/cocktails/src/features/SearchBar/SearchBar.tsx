import { useContext, useEffect, useRef } from "react";

import { AppContext } from "../../context/AppContext";
import styles from "./SearchBar.module.css";

function SearchBar(): JSX.Element {
  const { setSearchQuery } = useContext(AppContext);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  function handleChange() {
    if (searchRef.current) {
      setSearchQuery(searchRef.current.value);
    }
  }

  return (
    <section className={styles.search}>
      <form className={styles.searchForm}>
        <div className={styles.formControl}>
          <label htmlFor="search">search your favorite cocktail</label>
          <input
            type="search"
            id="search"
            name="search"
            ref={searchRef}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
