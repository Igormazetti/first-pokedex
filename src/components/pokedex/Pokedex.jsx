import React from "react";
import pokemons from "../../data";
import Pokemon from "../pokemon/Pokemon";

class Pokedex extends React.Component {
  render() {
    return pokemons.map((pokemon) => {
      return (
        <div key={pokemon.id} className="pokedex">
          <Pokemon pokemon={pokemon} />
        </div>
      );
    });
  }
}

export default Pokedex;
