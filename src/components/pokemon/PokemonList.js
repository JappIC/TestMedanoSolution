// MATERIAL UI
import { Grid } from "@material-ui/core";
// COMPONENTS
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({pokemon}) =>{
    return (
        <div>
            {
                pokemon.map((idx)=>
                    <Grid key={idx} item xs={12} sm={6} md={3}>
                        <PokemonCard {...pokemon}/>
                    </Grid> 
                )
            }
        </div>
    )
};
