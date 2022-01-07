import { createTheme } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';

const theme = createTheme({
    palette:{
        primary: purple,
        secondary: {
            main: purple[300]
        }
    }
})

export default theme;