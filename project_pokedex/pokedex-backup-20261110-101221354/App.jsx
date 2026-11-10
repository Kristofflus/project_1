const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

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
