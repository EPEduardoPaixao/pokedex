import axios from 'axios'

 const pokeImg = axios.create({
    baseURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
})

export default pokeImg