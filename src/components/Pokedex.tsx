import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokeContext";
import pokeapi from "../services/pokeapi";

import "../styles/global.css";

interface IMoves {
  move: {
    name: string;
  };
}
interface ITypes {
  type: {
    name: string;
  };
}


const Pokedex = () => {
  const{ pokemon } = useContext(PokemonContext)
  const [pokeName, setPokeName] = useState("");
  const [moves, setMoves] = useState<IMoves[]>([]);
  const [types, setTypes] = useState<ITypes[]>([]);

  const [modal, setModal] = useState("none");

  const getMovesEndType = async (name: any) => {
    try {
      const { data } = await pokeapi.get(`pokemon/${name}`);
      setMoves(data.moves);
      setTypes(data.types);
      setPokeName(name);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: "0 0 10px #bbb",
                cursor: "pointer",
              }}
              onClick={() => {
                getMovesEndType(pokemons.name);
                setModal("flex");
              }}
            >
              <strong style={{ color: "#999" }}>#{index + 1}</strong>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    index + 1
                  }.svg`}
                  alt={pokemons.name}
                  style={{ maxWidth: 150 }}
                />
                <strong>{pokemons.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --------------Modal------------- */}
      <div
        style={{
          display: modal,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "fixed",
          top: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setModal("none")}
      >
        <div
          style={{
            backgroundColor: "#fff",
            position: "relative",
            zIndex: 1,
            padding: "2rem",
            borderRadius: 8,
            height: "40%",
            width: "30%",
            textAlign: "center",
          }}
        >
          <strong>{pokeName}</strong>

          <div style={{ display: "flex", justifyContent: "space-around", paddingTop:20 }}>
            <div
              style={{
                overflow: "auto",
                height: "18rem",
                width:'10rem',
                textAlign: "start",
              }}
            >
              {moves.map((move) => (
                <p style={{paddingTop:10}}>{move.move.name}</p>
              ))}
            </div>
            <div style={{display: "flex"}}>
              {types.map((type) => (
                <p style={{paddingLeft:10}}>{type.type.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
