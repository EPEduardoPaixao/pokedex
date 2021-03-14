import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokeContext";
import pokeapi from "../services/pokeapi";
import PokeCard from "./PokeCard";

// import { Container } from './styles';

interface IPokemon {
  // id: number;
  name: string;
  sprites:{
    front_default:string;
  }
}

const Pokedex: React.FC = () => {
  const { pokeId, pokeName, pokePhoto } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);

  useEffect(() => {
    let i = 0;
    const getPokemon = async (id:any) => {
      try {
        const { data } = await pokeapi.get(`pokemon/${id}`);
        setPokemon(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    for (i = 1; i < 150; i++) {
      getPokemon(i);
      //   console.log(i)
    }
    // getPokemon()
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
          {pokemon.map((pokemons) => (
            <div>
              <strong>{pokemons.name}</strong>
              {/* <img src={photo} alt={name}/> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
