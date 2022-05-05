import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    width: 400,
    paddingLeft:'100px',
    paddingRight:'100px',
    margin: "0 4px",
  },
  media: {
    height: 300,
  },
  
});



const VacationCard = ({vacation}) => {


  const classes = useStyles();

 

  return (   
      <Card className={classes.root} border='5px solid red'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={vacation.image}
          title={vacation.country}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
          {vacation.country}
          </Typography>
            <h2>Cities: {vacation.cities}</h2>
            <p>Activities: {vacation.activities}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={vacation.flights}>Flights</a>
        </Button>
      </CardActions>
    </Card> 
     
  )
}

export default VacationCard;


