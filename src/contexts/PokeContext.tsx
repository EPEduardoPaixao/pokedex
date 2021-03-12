import { useEffect, useState, createContext, ReactNode } from "react";
import pokeapi from "../services/pokeapi";
// import { Container } from './styles';

interface IPokemon {
  pokeName: string;
  pokeId: number;
  pokePhoto: string;
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
    const getPokemon = async (id: any) => {
      try {
        const { data } = await pokeapi.get(`pokemon/${id}`);
        setPokeName(data.name);
        setPokeId(data.id);
        setPokePhoto(data.sprites.front_default)
      } catch (error) {}
    };
    for (i = 1; i < 150; i++) {
      getPokemon(i);
    //   console.log(i)
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ pokeName, pokeId, pokePhoto}}>
      {children}
    </PokemonContext.Provider>
  );
}
