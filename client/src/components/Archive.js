import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Archive() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
		  <Link href="#"><img src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/f/fortnite-switch/fortnite-switch-hero.jpg" width="100%" /></Link>
		  </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
		  <Link href="#"><h3 style={{textAlign: 'left'}}>Fortnite</h3></Link>
		  <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis.</p>
		  </Paper>
        </Grid>
      </Grid>
	        <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
		  <Link href="#"><img src="https://www.tech-mag.net/wp-content/uploads/2020/06/PubG-Mobile-APK.jpg" width="100%" /></Link>
		  </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
		  <Link href="#"><h3 style={{textAlign: 'left'}}>PUBG Mobile</h3></Link>
		  <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis.</p>
		  </Paper>
        </Grid>
      </Grid>
	        <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
		  <Link href="#"><img src="https://cdn2.unrealengine.com/egs-amongus-innersloth-s1-2560x1440-675403774.jpg" width="100%" /></Link>
		  </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
		  <Link href="#"><h3 style={{textAlign: 'left'}}>AmongUs</h3></Link>
		  <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis.</p>
		  </Paper>
        </Grid>
      </Grid>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Archive);