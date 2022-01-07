// REACT
import { Routes, Route } from "react-router-dom";
// MATERIAL UI
import { makeStyles } from "@material-ui/core";
// COMPONENTS
import { Navbar } from "../components/ui/Navbar"
import { DcScreen } from "../components/hero/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/hero/MarvelScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

const styles = makeStyles( theme =>({
    root:{
        display: 'flex',
    },

    toolbar: theme.mixins.toolbar,

    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }

}))


export const DashboardRoutes = () => {

    const classes = styles()

    return (
        <div className={classes.root}>
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar}></div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </main>
            
        </div>
    )
}
