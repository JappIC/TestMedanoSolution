// REACT
import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// MATERIAL IU
import { Button } from "@material-ui/core";
// SELECTORS
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById (heroeId), [heroeId]) ;

    const handleReturn = ()=>{
        navigate(-1);
    }

    if (!hero){
        return <Navigate to='/' />
    }

    const {
        superhero
    } = hero;

    return (
        <div>
            <h1>{superhero}</h1>
            <Button onClick={handleReturn}>Volver</Button>
        </div>
    )
}