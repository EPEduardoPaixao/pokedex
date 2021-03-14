import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokeContext';

// import { Container } from './styles';

interface IPokeCard{
    id:number;
    name:string;
    // photo:string;
}
// const{pokeId, pokeName,pokePhoto} = useContext(PokemonContext)

const PokeCard: React.FC<IPokeCard> = ({
    id,
    name,
    // photo
}) => {

  return (
    <div>
        <strong>{name}</strong>
        {/* <img src={photo} alt={name}/> */}

    </div>
    );
}

export default PokeCard;