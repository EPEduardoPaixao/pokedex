import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokeContext";
import pokeapi from "../services/pokeapi";
import PokeCard from "./PokeCard";

// import { Container } from './styles';

interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([
    {
      name: "",
      sprites: {
        front_default: "",
      },
    },
  ]);

  function addNewTask(pokemon:any) {
    const itensCopy:any = Array.from(pokemon);
    itensCopy.push({id: pokemon.length, value: pokemon});
    setPokemon(itensCopy);
  }

  useEffect(() => {
    const getPokemon = async (id: any) => {
      try {
        const { data } = await pokeapi.get(`pokemon/${id}`);
        setPokemon([data]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    for (let i = 0; i < 150; i++) {
      getPokemon(i);
      addNewTask(pokemon)
    }
  }, []);



  return (
    <div>
      <h1>Pokedex</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 10,
            maxWidth: "50%",
            justifyContent: "center",
          }}
        >
          {pokemon.map((pokemons, index) => (
            <div>
              <div style={{ padding: 10 }} key={index}>
                <strong>{pokemons.name}</strong>
                {/* <img src={pokemons.sprites.front_default} alt={pokemons.name} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
