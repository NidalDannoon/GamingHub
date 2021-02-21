import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://i.pinimg.com/originals/af/8a/bb/af8abb841e3d18fb371c802f9f2b941e.png?auto=format&fit=crop&w=400&q=80',
      title: 'Aracade',
      width: '40%',
    },
    {
      url:
        'https://wallpaperaccess.com/full/2044897.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Action',
      width: '20%',
    },
    {
      url:
        'https://wallpaperaccess.com/full/2529013.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Racing',
      width: '40%',
    },
    {
      url:
        'https://gamerescape.com/wp-content/uploads/2017/10/Middle-earth%E2%84%A2_-Shadow-of-War%E2%84%A2_20171015175644.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Adventure',
      width: '38%',
    },
    {
      url:
        'https://cdn.wallpapersafari.com/14/98/fFvCO1.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Online Multiplayer',
      width: '38%',
    },
    {
      url:
        'https://assets.rockpapershotgun.com/images/2020/01/Sid-Meiers-Civilization-VI-Best-Strategy-Games-2020.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Strategy',
      width: '24%',
    },
    {
      url:
        'https://wallpapercave.com/wp/wp2473678.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Survival',
      width: '40%',
    },
    {
      url:
        'https://www.wallpapertip.com/wmimgs/173-1738924_crysis-remastered.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Shooting',
      width: '20%',
    },
    {
      url:
        'https://cdn57.androidauthority.net/wp-content/uploads/2019/09/Pocket-City-best-simulation-games-for-Android.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Simulation',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Game Categories
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);