import { useState, createContext, ReactNode } from "react";
import { pokeapi } from "../services/pokeapi";
import { useQuery } from "react-query";

interface IPokemon {
  name: string;
}

interface IPokeProps {
  pokemon: IPokemon[];
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  getPokemon: () => Promise<void>;
}

interface contextsProviderProps {
  children: ReactNode;
}

export const PokemonContext = createContext({} as IPokeProps);

export function ContextsProvider({ children }: contextsProviderProps) {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [limit, setLimit] = useState(10);

  const { isLoading, error } = useQuery("pokeList", async () => {
    const { data } = await pokeapi.get(`pokemon?limit=151`);
    data.results.map((pokeData: IPokemon) =>
      setPokemon((pokemon) => [
        ...pokemon,
        {
          name: pokeData.name,
        },
      ])
    );
    error&&alert(error)
    isLoading && console.log("Carregando...");
  });

  const getPokemon = async () => {
    try {
      const { data } = await pokeapi.get(
        `pokemon?limit=${10}&offset=${141 + limit}`
      );
      data.results.map((pokeData: IPokemon) =>
        setPokemon((pokemon) => [
          ...pokemon,
          {
            name: pokeData.name,
          },
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider value={{ pokemon, setLimit, limit, getPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
