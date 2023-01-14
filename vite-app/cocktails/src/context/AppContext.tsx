import { createContext, ReactNode, useState } from "react";
import useFetchCocktails from "../hooks/useFetchCocktails";
import AppContextType from "../interface/AppContextType";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext<AppContextType>({
  cocktails: [],
  setSearchQuery: () => {},
});

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("a");
  const cocktails = useFetchCocktails(url, searchQuery);

  return (
    <AppContext.Provider value={{ cocktails, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
