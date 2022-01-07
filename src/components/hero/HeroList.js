// REACT
import { useMemo } from "react";
// MATERIAL UI
import { Grid } from "@material-ui/core";
// SELECTORS
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    //const heroes = getHeroesByPublisher( publisher );
    const heroes = useMemo(() => getHeroesByPublisher (publisher), [publisher]) ;

    return (
        <div>
            <h1>HeroList - { publisher }</h1>

            <Grid container>
                {
                    //heroes.map( hero =>( <div key={hero.id}> { hero.superhero } </div> ))
                    //heroes.map( hero =>( <HeroCard key={hero.id} {...hero}> { hero.superhero } </HeroCard> ))
                    heroes.map( hero =>( 
                        <Grid key={hero.id} item xs={12} sm={6} md={3}>
                            <HeroCard {...hero}/>
                        </Grid> 
                    ))
                }
            </Grid>
        </div>
    )
}