
import { useNavigate } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/',{
            replace: true
        });
    }

    return (
        <div>
            <Typography variant="h1" color="primary" align="center">
                Pokemons App
            </Typography>
            <Typography variant="body1" color="secondary">
                Una app para el test de Medano Solution
            </Typography>
            <Button 
                onClick={handleLogin} 
                className="btnLogin"
                size="large" 
                color="primary"
                variant="contained"
            >
                Login
            </Button>
        </div>
    )
}