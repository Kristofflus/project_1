function StatBar({ label, value, maxStat, color }) {
  const percentage = maxStat > 0 ? (value / maxStat) * 100 : 0;

  return (
    <div className="stat">
      <div className="stat-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="stat-bar">
        <div
          className={`stat-fill ${color}-fill`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function PokemonCard({
  pokemon,
  maxStat,
  isFavorite,
  onToggleFavorite,
}) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  function handlePointerMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--pointer-x", `${x}%`);
    card.style.setProperty("--pointer-y", `${y}%`);
  }

  function handlePointerLeave(event) {
    const card = event.currentTarget;

    card.style.setProperty("--pointer-x", "50%");
    card.style.setProperty("--pointer-y", "50%");
  }

  return (
    <div
      className={`pokemon-card pokemon-${pokemon.type.toLowerCase()}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <button
        className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
        onClick={onToggleFavorite}
        aria-label={`${isFavorite ? "Remove" : "Add"} ${pokemon.name} ${isFavorite ? "from" : "to"} favourites`}
        aria-pressed={isFavorite}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <img src={imageUrl} alt={pokemon.name} />

      <h2>{pokemon.name}</h2>

      <span className={`type type-${pokemon.type.toLowerCase()}`}>
        {pokemon.type}
      </span>
      <div className="pokemon-stats">
        <StatBar label="HP" value={pokemon.hp} maxStat={maxStat} color="hp" />

        <StatBar
          label="Attack"
          value={pokemon.attack}
          maxStat={maxStat}
          color="attack"
        />
      </div>
    </div>
  );
}
