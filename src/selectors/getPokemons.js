import { pokemons } from "../data/heroes"

export const getPokemons = () =>{
    return pokemons.filter( pokemon => pokemon.name);
}