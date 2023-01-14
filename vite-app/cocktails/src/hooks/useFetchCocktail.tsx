import { useEffect, useState } from "react";
import Cocktail from "../interface/Cocktail";

function useFetchCocktails(url: string, urlParam: string) {
  const [data, setData] = useState<Cocktail[]>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const response = await fetch(`${url}${urlParam}`);
        const { drinks } = await response.json();
        if (!ignore && drinks) {
          const newData = drinks.map((drink: any) => {
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
            } = drink;
            return {
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
          });
          setData(newData);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url, urlParam]);

  return data;
}

export default useFetchCocktails;
