import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import useFetchCocktails from "../../hooks/useFetchCocktail";
import styles from "./CocktailDetails.module.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function CocktailDetails(): JSX.Element {
  const { cocktailID } = useParams();
  const cocktail = useFetchCocktails(url, cocktailID as string)[0];

  function renderNoCocktail() {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  function renderCocktail() {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className={`section ${styles.cocktailSection}`}>
        <Button
          name="back home"
          path="/"
          buttonStyles={["btn", "btnPrimary"]}
        />
        <h2 className="section-title">{name}</h2>
        <article className={styles.drink}>
          <img src={image} alt={name} />
          <div className={styles.drinkInfo}>
            <p>
              <span className={styles.drinkData}>name :</span>
              {name}
            </p>
            <p>
              <span className={styles.drinkData}>category :</span>
              {category}
            </p>
            <p>
              <span className={styles.drinkData}>info :</span>
              {info}
            </p>
            <p>
              <span className={styles.drinkData}>glass :</span>
              {glass}
            </p>
            <p>
              <span className={styles.drinkData}>instructions :</span>
              {instructions}
            </p>
            <p>
              <span className={styles.drinkData}>ingredients :</span>
              {ingredients.map((ingredient, index) => {
                return ingredient ? (
                  <span key={index}> {ingredient}</span>
                ) : null;
              })}
            </p>
          </div>
        </article>
      </section>
    );
  }

  return <>{cocktail ? renderCocktail() : renderNoCocktail()}</>;
}

export default CocktailDetails;
