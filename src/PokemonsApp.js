// REACT
import { AppRouter } from "./routers/AppRouter";
// MATERIAL UI
import { ThemeProvider } from "@material-ui/core";
// OTHER
import theme from './themeConfig';

export const PokemonsApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    )
}
