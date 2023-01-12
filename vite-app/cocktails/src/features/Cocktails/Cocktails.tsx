import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cocktail from "../SingleCocktail/SingleCocktail";
import styles from "./Cocktails.module.css";

function Cocktails(): JSX.Element {
  const { cocktails } = useContext(AppContext);
  return (
    <section className="section">
      <h1 className="section-title">cocktails</h1>
      <div className={styles.cocktailsCenter}>
        {cocktails.map((cocktail) => {
          return <Cocktail />;
        })}
      </div>
    </section>
  );
}

export default Cocktails;
