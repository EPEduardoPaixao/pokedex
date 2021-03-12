import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokeContext";
import pokeapi from "../services/pokeapi";
import PokeCard from "./PokeCard";

// import { Container } from './styles';

interface IPokemon{
  id:number;
  name:string;
  photo:string;
}

const Pokedex: React.FC = () => {
const {pokeId, pokeName, pokePhoto} = useContext(PokemonContext)
const [pokemon, setPokemon] = useState<IPokemon[]>([])

useEffect(() => {
  let i = 0;
  const getPokemon = async (id: any) => {
    try {
      const { data } = await pokeapi.get(`pokemon/${id}`);
      // setPokemon({...pokemon, id:data.id, photo:data.sprites.front_default, name:data.name});
    } catch (error) {}
  };
  for (i = 1; i < 150; i++) {
    getPokemon(i);
  //   console.log(i)
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
          {pokemon.map(pokemons=>(

            <PokeCard
            id={pokemons.id}
            name={pokemons.name}
            photo={pokemons.photo}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
