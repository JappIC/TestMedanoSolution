// REACT
import { Button } from "@material-ui/core";
import { useState } from "react";
// AXIOS
import axios from "axios";
// COMPONENTS
import { PokemonList } from "../pokemon/PokemonList";

// https://www.youtube.com/watch?v=7BbBJKE2Jvs
// https://www.youtube.com/watch?v=QFPSIT3ZR7Q

export const HomeScreen = () => {

    const [pokemon, setPokemon] = useState([
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
    ]);

    const getListPokemons = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((response)=>{
            //console.log(response);
            setPokemon(response.data.results);
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    getListPokemons();

    return (
        <div>
            <h1>HomeScreen</h1>
            <PokemonList pokemon={pokemon}/>
        </div>
    )
}