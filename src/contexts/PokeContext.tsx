import { useEffect, useState, createContext, ReactNode } from "react";
import pokeapi from "../services/pokeapi";
// import { Container } from './styles';

interface IPokemon {
  name: string;
  id: number;
  url: string;
}

interface IPokeProps {
  pokemon: IPokemon[];
}


interface contextsProviderProps {
  children: ReactNode;
}

export const PokemonContext = createContext({} as IPokeProps);

export function ContextsProvider({ children }: contextsProviderProps) {
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);
    
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon?limit=600`);
        setPokemon(data.results);
      } catch (error) {}
    };
    getPokemon()
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon}}>
      {children}
    </PokemonContext.Provider>
  );
}
