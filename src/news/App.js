import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 440,
  },
  grid: {
    flexGrow: 1,
  },
  chip:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container spacing={3}>
        
        <Grid item xs>
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
        Jeremy White
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        2021-07-21
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://images.firstpost.com/wp-content/uploads/2021/07/ola-electric-scooter-to-be-sold-directly-to-buyers-will-be-home-delivered.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Link variant="body1" color="textPrimary" variant="h6" href="https://www.wired.co.uk/article/hyundai-ioniq-5-review">
      The Hyundai Ioniq 5 is our new favourite EV
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions >
        <div className={classes.chip}>
        <Chip label="Wired.co.uk" color="primary" clickable/>
        <Chip label="Estados Unidos" />
        </div>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
        Sabbir Rangwala, Sabbir Rangwala
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        2021-07-21
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60e5bfa13bb265d9b19bebbe%2F0x0.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Link variant="body1" color="textPrimary" variant="h6" href="https://www.wired.co.uk/article/hyundai-ioniq-5-review">
      LiDAR - Lighting The Path From IoT To AoT (Autonomy Of Things)
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions >
        <div className={classes.chip}>
        <Chip label="Wired.co.uk" color="primary" clickable/>
        <Chip label="Estados Unidos" />
        </div>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
        Jeremy White
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        2021-07-21
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/841614440/large_image_841614440.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Link variant="body1" color="textPrimary" variant="h6" href="https://www.wired.co.uk/article/hyundai-ioniq-5-review">
      The Hyundai Ioniq 5 is our new favourite EV
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions >
        <div className={classes.chip}>
        <Chip label="Wired.co.uk" color="primary" clickable/>
        <Chip label="Estados Unidos" />
        </div>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>

    </div>
  );
}
export default App;
