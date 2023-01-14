import Cocktail from "./Cocktail";

interface AppContextType {
  cocktails: Cocktail[];
  setSearchQuery: (searchQuery: string) => void;
}

export default AppContextType;
