// REACT
import { Button } from "@material-ui/core";
import { useState } from "react";
// AXIOS
import axios from "axios";
// COMPONENTS
import { HeroList } from "../hero/HeroList";
import { PokemonCard } from "../pokemon/PokemonCard";

export const HomeScreen = () => {

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setpokemonChosen] = useState(false);

    const [pokemon, setPokemon] = useState({
        name:'', 
        species: "", 
        img: "", 
        hp: "",
        attack: "",
        defense: "",
        type: "",
    });

    const getListPokemons = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((response)=>{
            //console.log(response);
            setPokemon(response.data.results);
        }).catch((err)=>{
            console.log(err)
        });
    }

    

    const searchPokemon = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response)=>{
                setPokemon({
                    name:pokemonName, 
                    species: response.data.species.name, 
                    img: response.data.sprites.front_default, 
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    type: response.data.types[0].type.name,
                });
                setpokemonChosen(true);
            }
        );
    }

    return (
        <div>
            <h1>HomeScreen</h1>
            <input 
                type="text"
                onChange={(event)=>{
                    setPokemonName(event.target.value);
                }}
            />
            <Button onClick={searchPokemon}>Search</Button>
            
                {!pokemonChosen ? (
                    <PokemonCard {...pokemon}/>
                ): (<PokemonCard {...pokemon}/>)}
        </div>
    )
}