import React, { useContext, useEffect, useState } from "react";
import pokeapi from "../services/pokeapi";

import "../styles/global.css";
interface IPokemon {
  name: string;
  id: string;
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon?limit=151`);
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);

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
            <div
              style={{
                margin: 10,
                padding: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: '0 0 10px #bbb'
              }}
            >
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${
                  index + 1
                }.png`}
                alt={pokemons.name}
                style={{ maxWidth:150 }}
              />
              <strong>{pokemons.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
