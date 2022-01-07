// REACT
import { Link, NavLink, useNavigate } from 'react-router-dom'
// MATERIAL UI
import { AppBar, Button, Hidden, IconButton, makeStyles, Toolbar, Typography, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export const Navbar = () => {

    const navigate = useNavigate();
    
    const handleLogout = ()=>{
        navigate('/login',{
            replace: true
        });
    }

    const useStyles = makeStyles(theme =>({
        
        menuButtom:{
            marginRight: theme.spacing(2),
        },

        title:{
            flexGrow: 1
        },

    }))

    const classes = useStyles();

    return (
       
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    <Link 
                        className="navbar-brand" 
                        to="/"
                    >
                        Pokemons APP
                    </Link>
                </Typography>
                <Hidden smDown>
                    <Button variant='text' color="inherit">
                        <NavLink 
                            className={({ isActive})=>'nav-item nav-link' + (isActive ? 'active' : '') }
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                    </Button>
                    <NavLink 
                        className={({ isActive})=>'nav-item nav-link' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <Button 
                        onClick={ handleLogout }
                        variant='text' 
                        color="inherit"
                    >
                        Logout
                    </Button>
                </Hidden>
                <Hidden mdUp>
                    <IconButton color="inherit" aria-label='menu' className={classes.menuButtom}>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}