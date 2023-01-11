import { createContext } from "react";
import Cocktail from "../interface/cocktail";

export const AppContext = createContext<Cocktail[]>([]);
