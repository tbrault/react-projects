import React, { FunctionComponent, useEffect, useState } from "react";
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <p>Il y a {pokemons.length} pokémons dans le pokedex</p>
    </div>
  );
};

export default App;
