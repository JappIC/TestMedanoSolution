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

export const PokemonCard = ({
    name, 
    species, 
    img, 
    hp,
    attack,
    defense,
    type,
}) => {
    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {species} - {hp} - {attack} - {defense} - {type}
                </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" to={`/pokemon/${name}`}>
                Learn More
                </Button>
                <Link to={`/pokemon/${name}`}>
                    Learn More
                </Link>
            </CardActions>

        </Card>
    );
}
