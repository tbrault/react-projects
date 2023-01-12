import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cocktail from "../SingleCocktail/SingleCocktail";
import styles from "./Cocktails.module.css";

function Cocktails(): JSX.Element {
  const { cocktails } = useContext(AppContext);

  function renderNoCocktails(): JSX.Element {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  function renderCocktails(): JSX.Element {
    return (
      <section className="section">
        <h1 className="section-title">cocktails</h1>
        <div className={styles.cocktailsCenter}>
          {cocktails.map((cocktail) => {
            return <Cocktail key={cocktail.id} {...cocktail} />;
          })}
        </div>
      </section>
    );
  }

  return (
    <>{cocktails.length === 0 ? renderNoCocktails() : renderCocktails()}</>
  );
}

export default Cocktails;
