import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Cocktail from "../../interface/Cocktail";
import styles from "./CocktailDetails.module.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const initialValue = {
  id: 0,
  category: "",
  name: "",
  info: "",
  glass: "",
  image: "",
  instructions: "",
  ingredients: [""],
};

function SingleCocktail(): JSX.Element {
  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>(initialValue);

  const fetchCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${url}${cocktailID}`);
      const { drinks } = await response.json();
      if (drinks) {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strCategory,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const newCocktail: Cocktail = {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          category: strCategory,
          glass: strGlass,
          instructions: strInstructions,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
        return newCocktail;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.log(error);
    }
  }, [cocktailID]);

  useEffect(() => {
    let ignore = false;
    fetchCocktail().then((result) => {
      if (!ignore && result) {
        setCocktail(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [fetchCocktail]);

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

  return <>{cocktail.id === 0 ? renderNoCocktail() : renderCocktail()}</>;
}

export default SingleCocktail;
