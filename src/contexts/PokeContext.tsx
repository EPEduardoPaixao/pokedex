import { useEffect, useState, createContext, ReactNode } from "react";
import pokeapi from "../services/pokeapi";
// import { Container } from './styles';

interface IPokemon {
  name: string;
  id: number;
}

interface IPokeProps {
  pokemon: IPokemon[];
  pokePhoto: string;
}


interface contextsProviderProps {
  children: ReactNode;
}

export const PokemonContext = createContext({} as IPokeProps);

export function ContextsProvider({ children }: contextsProviderProps) {
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);
    const [pokePhoto, setPokePhoto] = useState('');
    
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon?limit=150`);
        setPokemon(data.results);
      } catch (error) {}
    };
    getPokemon()
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon, pokePhoto}}>
      {children}
    </PokemonContext.Provider>
  );
}
