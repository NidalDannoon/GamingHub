import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';

import test from './test.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "none",
      margin: '20px 0',
      backgroundColor:'#eeebe6',
    },
    margin: {
      margin: theme.spacing(1),
    },
    media: {
      height: 10,
      paddingTop: '40.25%', // 16:9
    },
    image:{
      padding:'15px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    img: {
      width: 512,
      margin: '15px auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  

function PostDetails(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <>
    <AppAppBar/>
    <Container fixed maxWidth="md">
      <Card className={classes.root}>

      <CardMedia
          className={classes.media}
          image={test}
          title="Paella dish"
        />
        <Typography variant="h3" color="primary" component="h3">
          <CardContent>
            Shrimp and Chorizo Paella
          </CardContent>
        </Typography>
        <Typography variant="subtitle1" color="primary">
          <CardContent>
            Published By: OsaidM.
          </CardContent>
        </Typography>
        <Typography variant="caption" color="secondary">
          <CardContent>
            Created At: September 14, 2016 <br/>
            Updated At: September 14, 2016
          </CardContent>
        </Typography>
          <hr/>
        
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.<br/>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.<br/><br/>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
              <img className={classes.img} src="https://www.tech-mag.net/wp-content/uploads/2020/06/PubG-Mobile-APK.jpg"/>
              <img className={classes.img} src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/f/fortnite-switch/fortnite-switch-hero.jpg"/>
              <img className={classes.img} src="https://cdn2.unrealengine.com/egs-amongus-innersloth-s1-2560x1440-675403774.jpg"/>
              <br/><br/>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
      </Card>
      
      {/* this is comments section */}

      <Card className={classes.root}>
        <CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
            <hr/>
          </CardContent>
        </CardContent>

        <CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
            <hr/>
          </CardContent>
        </CardContent>

            {/* this is comment posting section */}

        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows={2}
              fullWidth
              variant="outlined"
            />
            <Button className={classes.margin} variant="contained" color="primary">
              Comment
            </Button>
          </form>
        </CardContent>

      </Card>
    </Container>
    <AppFooter/>
    </>
  );
}


export default PostDetails;