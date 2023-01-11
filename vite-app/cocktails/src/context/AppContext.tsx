import { createContext, ReactNode, useState } from "react";
import AppContextType from "../interface/AppContextType";
import Cocktail from "../interface/cocktail";

const AppContext = createContext<AppContextType>({
  cocktails: [],
  setSearchQuery: () => {},
});

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  return (
    <AppContext.Provider value={{ cocktails, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
