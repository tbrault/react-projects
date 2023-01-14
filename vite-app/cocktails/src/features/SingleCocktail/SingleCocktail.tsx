import React from "react";
import Button from "../../components/Button/Button";
import Cocktail from "../../interface/Cocktail";
import styles from "./SingleCocktail.module.css";

function SingleCocktail({
  id,
  name,
  image,
  info,
  glass,
}: Cocktail): JSX.Element {
  return (
    <article className={styles.cocktail}>
      <img src={image} alt={name} />
      <footer className={styles.cocktailFooter}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Button
          name="details"
          path={`/cocktails/${id}`}
          buttonStyles={["btn", "btnPrimary"]}
        />
      </footer>
    </article>
  );
}

export default SingleCocktail;
