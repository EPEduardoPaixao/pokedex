import { useContext } from "react";
import { PokemonContext } from "../contexts/PokeContext";

import "../styles/global.css";
import "./pokedex.css";
import PokeCard from "../components/PokeCard";
// import pokemonJson from "./pokemon.json";

const Pokedex = () => {
  const { pokemon, limit, setLimit,getPokemon } = useContext(PokemonContext);

  // teste com json local utilizando nomes locais
  // const pokemon = pokemonJson

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokedex</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 10,
            maxWidth: "75%",
            justifyContent: "center",
          }}
        >
          {pokemon.map((pokemons, index) => (
            // colocar um onclick para chamar uma função que vai fazer um novo get e exibir um modal com as informações sobre os pokemons
            <PokeCard name={pokemons.name} index={index + 1} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className='mostrarMais'
          onClick={() => {
            setLimit(limit + 10);
            getPokemon();
          }}
        >
          ...Mostrar mais
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
