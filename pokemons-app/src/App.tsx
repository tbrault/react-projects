import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";

const App: FunctionComponent = () => {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">
            Pokédex
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonsDetail />} />
        <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
