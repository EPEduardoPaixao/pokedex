import React, { useEffect, useState } from 'react';
import pokeapi from '../services/pokeapi'
// import { Container } from './styles';

// interface IPokemon [{

//     name:string;
//     url:string;
// }]

const Pokedex: React.FC = () => {

    const [pokemon, setPokemon] = useState([{
        name: '',
        url: '',
    }])

    useEffect(() => {
        const getPokemon = async () => {

            try {
                const { data } = await pokeapi.get(`pokemon?limit=151`);

                setPokemon(data.results)
                console.log('pokemons', pokemon)
            } catch (error) {
                console.log(error)
            }
        }

        getPokemon()
    }, [])

    return (
        <div>
            <h1>
                Pokedex
            </h1>
            <div style={{ flex: 1, display: 'flex', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignContent: 'center' }}>
                {pokemon.map(pokemons => (
                    <div >

                        {pokemons.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pokedex;