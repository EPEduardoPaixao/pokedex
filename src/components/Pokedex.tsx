import React, { useEffect, useState } from "react";
import pokeapi from "../services/pokeapi";

// import { Container } from './styles';

// interface IPokemon [{

//     name:string;
//     url:string;
// }]

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState(
    [],
  );

  useEffect(() => {
      let i =0
    const getPokemon = async (id:number) => {
      try {
        const { data } = await pokeapi.get(`pokemon/${id}`);

        setPokemon(data.name);
        console.log("pokemons", pokemon);
      } catch (error) {
        console.log(error);
      }
    };
    for (i = 1; i < 150; i++) {
        // const element = array[index];
        
        getPokemon(i);
        console.log('i',i)
    }
    // getPokemon()
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 10,
            maxWidth: "50%",
            justifyContent: "center",
          }}
        >
          {pokemon!==undefined?(

              pokemon.map((pokemons:any) => (
                  <div style={{ padding: 10 }}>{pokemons.name}</div>
                  ))
                  ):(null)
                }
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
