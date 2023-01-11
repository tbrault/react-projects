import { createContext } from "react";
import Cocktail from "../interface/cocktail";

export const CocktailsContext = createContext<Cocktail[]>([]);
