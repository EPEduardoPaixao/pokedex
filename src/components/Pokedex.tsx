import React, { useEffect, useState } from "react";
import pokeapi from "../services/pokeapi";

// import { Container } from './styles';

// interface IPokemon {
//   id: number;
//   name: string;
//   photo: string;
// }

const Pokedex: React.FC = () => {
  // const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [pokemon, setPokemon] = useState([{
    name:'',
    id:0,
    photo:'',
  }]);

  useEffect(() => {
    let i = 0;
    const getPokemon = async (id: number) => {
      try {
        const { data } = await pokeapi.get(`pokemon/${id}`);

        setPokemon([{ ...pokemon, name: data.name, id: data.id, photo: data.sprites.front_default}]);
        // setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };
    for (i = 1; i < 152; i++) {
      // const element = array[index];

      getPokemon(i);
      // console.log("i", i);
    }
    // getPokemon()
  }, []);
  console.log(pokemon);

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
                <img src={pokemons.photo} alt={pokemons.name} />
                {/* {console.log(pokemon)} */}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Pokedex;
