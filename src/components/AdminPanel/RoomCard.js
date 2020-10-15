import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  price: {
      display: 'flex',
      justifyContent: 'flex-end'
  }
});

// breakfast: false
// capacity: 2
// description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
// extras: (7) ["Plush pillows and breathable bed linens", "Soft, oversized bath towels", "Full-sized, pH-balanced toiletries", "Complimentary refreshments", "Adequate safety/security", "Internet", "Comfortable beds"]
// featured: false
// images: (4) [{…}, {…}, {…}, {…}]
// name: "double standard"
// pets: true
// price: 300
// size: 400
// slug: "double-standard"
// type: "double"

export default function RoomCard(props) {
  const classes = useStyles();
  const data = props.data.fields
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.thespruce.com/thmb/ZM7NrTic_7kJPMuOtCs2mIvEq8k=/2032x1143/smart/filters:no_upscale()/GettyImages-1187200939-74336d2a866d4c99853f700cb4ad7d5f.jpg'
          title={data.slug}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              <div className={classes.price}>
              <Button variant="outlined" color="primary">
        Price: {data.price}
        </Button>
              </div>
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="primary">
        Edit
        </Button>
        <Button variant="contained" color="secondary">
        Delete
        </Button>
      </CardActions>
    </Card>
  );
}