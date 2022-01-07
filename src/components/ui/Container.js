
import { makeStyles } from "@material-ui/core";

const styles = makeStyles( theme =>({
    root:{
        display: 'flex',
    }
}))

export const Container = () => {

    const classes = styles()

    return (
       <div className={classes.root}>
           Contenedor
       </div>
    )
}