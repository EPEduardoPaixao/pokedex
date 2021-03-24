import React, { useContext, useEffect, useState } from "react";
import pokeapi from "../services/pokeapi";

import "../styles/global.css";
interface IPokemon {
  name: string;
  // id: string;
}

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

// interface IMoveTypes{
//   move: {
//     name: string;
//   },
//   type: {
//     name: string;
//   },
// }
const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [pokeName, setPokeName] = useState("");
  const [moves, setMoves] = useState<IMoves[]>([]);
  const [types, setTypes] = useState<ITypes[]>([]);
  // const [moveTypes, setMoveTypes] = useState<IMoveTypes[]>([]);

  const [modal, setModal] = useState("none");

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon?limit=151`);
        setPokemon(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);

  const getMovesEndType = async (name: any) => {
    try {
      const { data } = await pokeapi.get(`pokemon/${name}`);
      // setMoveTypes([{...moveTypes, move: data.moves.move, type:data.types}]);
      setMoves(data.moves);
      setTypes(data.types);
      setPokeName(name);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(
    "moves",
    moves.map((move: any) => move.move.name)
  );
  console.log(
    "types",
    types.map((type: any) => type.type.name)
  );
  // console.log("movetypes", moveTypes.map((type:any, moves:any) => (type.type.name, moves.move.name)));

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
                  src={`https://pokeres.bastionbot.org/images/pokemon/${
                    index + 1
                  }.png`}
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
