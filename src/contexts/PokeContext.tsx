import { useEffect, useState, createContext, ReactNode } from "react";
import pokeapi from "../services/pokeapi";
// import { Container } from './styles';

interface IPokemon {
  pokeName: string;
  pokeId: number;
  // pokePhoto: string;
}
interface contextsProviderProps {
  children: ReactNode;

}

export const PokemonContext = createContext({} as IPokemon);

export function ContextsProvider({ children }: contextsProviderProps) {
    const [pokeName, setPokeName] = useState('');
    const [pokeId, setPokeId] = useState(0);
    const [pokePhoto, setPokePhoto] = useState('');
    
  useEffect(() => {
    let i = 0;
    const getPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon?limit=150`);
        setPokeName(data.results);
        // console.log(data.results);
        // setPokeId(data.id);
        // setPokePhoto(data.sprites.front_default)
      } catch (error) {}
    };
    // for (i = 1; i < 150; i++) {
    //   getPokemon(i);
    // //   console.log(i)
    // }
    getPokemon()
  }, []);

  return (
    <PokemonContext.Provider value={{ pokeName, pokeId}}>
      {children}
    </PokemonContext.Provider>
  );
}
