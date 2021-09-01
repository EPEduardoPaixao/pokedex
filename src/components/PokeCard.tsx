import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokeContext';
import pokeapi from '../services/pokeapi';

// import { Container } from './styles';

interface IPokeCard{
    id:number;
    name:string;
    // photo:string;
}
// const{pokemon} = useContext(PokemonContext)

const PokeCard: React.FC<IPokeCard> = ({
    id,
    name,
    // photo
}) => {

    // useEffect(() => {
    //     let i = 0;
    //     const getPokemon = async (name: any) => {
    //       try {
    //         const { data } = await pokeapi.get(`pokemon/${name}`);
    //         setPokeName(data.name);

    //       } catch (error) {}
    //     };
    //   }, []);

  return (
    <div>
        <strong>{name}</strong>
        {/* <img src={photo} alt={name}/> */}

    </div>
    );
}

export default PokeCard;