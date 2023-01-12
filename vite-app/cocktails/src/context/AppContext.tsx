import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import AppContextType from "../interface/AppContextType";
import Cocktail from "../interface/cocktail";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext<AppContextType>({
  cocktails: [],
  setSearchQuery: () => {},
});

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("a");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const fetchCocktails = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchQuery}`);
      const { drinks } = await response.json();
      const newCocktails = drinks.map((drink: any) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      return newCocktails;
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery]);

  useEffect(() => {
    let ignore = false;
    fetchCocktails().then((result) => {
      if (!ignore) {
        setCocktails([...result]);
      }
    });
    return () => {
      ignore = true;
    };
  }, [fetchCocktails]);

  return (
    <AppContext.Provider value={{ cocktails, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
