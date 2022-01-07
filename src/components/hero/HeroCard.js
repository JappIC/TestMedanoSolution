import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    
    const classes = useStyles();

    const imagePath = `/assets/images/pokemon.jpeg`

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imagePath}
                    title={superhero}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {superhero}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" to={`/hero/${id}`}>
                Learn More
                </Button>
                <Link to={`/hero/${id}`}>
                    Learn More
                </Link>
            </CardActions>

        </Card>
    );
}
