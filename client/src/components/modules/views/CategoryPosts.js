import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import Link from '@material-ui/core/Link';

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
    paper: {
        padding: theme.spacing(1),
        margin: '15px auto',
        maxWidth: '97%',
    },
    paper2: {
        margin: '0 auto',
        display: 'block',
        maxWidth: 'fit-content',
        maxHeight: 'fit-content',
        textAlign:'left'
      },
      image: {
        width: 256,
        height: '100%',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      link: {
        
      },
  }));
  

function CategoryPosts(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <>
    <AppAppBar/>
    <Container fixed maxWidth="lg">
      {/* this is comments section */}

      <Card className={classes.root}>
        <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="flex-end"
        >
            <Link href="/new" style={{textDecoration: 'none'}}><Button variant="contained" color="secondary" style={{margin:'15px'}}>click me to add new post</Button></Link>
        </Grid>
        
        <hr/>
        <Paper className={classes.paper}>
            <ButtonBase className={classes.paper2}>
                <Link href="/details" style={{textDecoration: 'none'}}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.img}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={test} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Link>
            </ButtonBase>
        </Paper>

        <Paper className={classes.paper}>
            <ButtonBase className={classes.paper2}>
                <Link href="/details" style={{textDecoration: 'none'}}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.img}>
                            <ButtonBase className={classes.image}>
                                <img  className={classes.img} src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/f/fortnite-switch/fortnite-switch-hero.jpg"/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Link>
            </ButtonBase>
        </Paper>

        <Paper className={classes.paper}>
            <ButtonBase className={classes.paper2}>
                <Link href="/details" style={{textDecoration: 'none'}}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.img}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} src="https://www.tech-mag.net/wp-content/uploads/2020/06/PubG-Mobile-APK.jpg"/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Link>
            </ButtonBase>
        </Paper>

        <Paper className={classes.paper}>
            <ButtonBase className={classes.paper2}>
                <Link href="/details" style={{textDecoration: 'none'}}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.img}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://cdn2.unrealengine.com/egs-amongus-innersloth-s1-2560x1440-675403774.jpg"/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Link>
            </ButtonBase>
        </Paper>
      </Card>
    </Container>
    <AppFooter/>
    </>
  );
}


export default CategoryPosts;