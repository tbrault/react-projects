import Cocktail from "./cocktail";

interface AppContextType {
  cocktails: Cocktail[];
  setSearchQuery: (searchQuery: string) => void;
}

export default AppContextType;
