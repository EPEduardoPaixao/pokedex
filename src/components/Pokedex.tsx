import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokeContext";
import pokeapi from "../services/pokeapi";
import PokeCard from "./PokeCard";

// import { Container } from './styles';

interface IPokemon {
  name: string;
  photo:string;
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([
    // {
    //   name: "",
    //   sprites: {
    //     front_default: "",
    //   },
    // },
  ]);
  useEffect(() => {
    for (let i = 1; i < 150; i++) {
      getPokemon(i);
    }
  }, []);
  const getPokemon = async (id: any) => {
    try {
      const { data } = await pokeapi.get(`pokemon/${id}`);
      setPokemon([{...pokemon, name:data.name, photo:data.sprites.front_default}]);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  let pokelist:any = [{
    name:'',
    photo:''
  }]
  pokelist = pokelist.concat(pokemon)
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
          {pokelist.map((pokemons:any, index:any) => (
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
