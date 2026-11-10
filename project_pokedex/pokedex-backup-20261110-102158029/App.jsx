import pokemons from "./pokemons.js";

import { useState } from "react";
import PokemonCard from "./PokemonCard";
import "./App.css";

export default function App() {
  const [selectedType, setSelectedType] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Get all unique Pokémon types for the dropdown
  const types = [...new Set(pokemons.map((pokemon) => pokemon.type))].sort();

  // Add or remove a Pokémon from favourites
  function toggleFavorite(id) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    );
  }

  // Apply both filters
  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesType = selectedType === "All" || pokemon.type === selectedType;

    const matchesFavorites =
      !showFavoritesOnly || favorites.includes(pokemon.id);

    return matchesType && matchesFavorites;
  });

  const maxStat = Math.max(
    ...pokemons.map((pokemon) => pokemon.hp),
    ...pokemons.map((pokemon) => pokemon.attack),
  );

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="pokedex-title">The Pokedex</h1>
      </header>

      <section className="explorer-controls">
        <div className="filter-bar">
          <div className="filter-group">
            <label htmlFor="type-filter">POKÉMON TYPE</label>

            <select
              id="type-filter"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="All">All types</option>

              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className={`favorites-toggle ${showFavoritesOnly ? "active" : ""}`}
            onClick={() => setShowFavoritesOnly((current) => !current)}
            aria-pressed={showFavoritesOnly}
          >
            <span className="toggle-star">{showFavoritesOnly ? "★" : "☆"}</span>
            <span>Favourites</span>
          </button>
        </div>

        <div className="results-summary">
          <span>
            Showing <strong>{filteredPokemons.length}</strong> of{" "}
            {pokemons.length} Pokémon
          </span>

          <span className="favorites-count">
            ★ {favorites.length} favourites
          </span>
        </div>
      </section>

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            maxStat={maxStat}
            isFavorite={favorites.includes(pokemon.id)}
            onToggleFavorite={() => toggleFavorite(pokemon.id)}
          />
        ))}
      </div>

      {filteredPokemons.length === 0 && (
        <div className="empty-message">
          <span className="empty-star">☆</span>
          <h2>No matching Pokémon</h2>
          <p>Try another type or add some Pokémon to your favourites.</p>
        </div>
      )}
    </main>
  );
}
