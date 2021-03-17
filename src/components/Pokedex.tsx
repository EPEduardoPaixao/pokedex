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

  let pokelist:any = [{
    name: "",
      sprites: {
        front_default: "",
      },
  }]
  const getPokemon = async (id: any) => {
    try {
      const { data } = await pokeapi.get(`pokemon/${id}`);
      // setPokemon([{...pokemon, name:data.name, sprites:data.sprites}]);
      pokelist.concat({...pokelist, name:data.name, sprites:data.sprites})
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    
    for (let i = 1; i < 150; i++) {
      getPokemon(i);
    }
  }, []);
  console.log(pokelist)
  
  
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
