import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ContactForm from './ContactForm';
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
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


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


function Contact() {
  const classes = useStyles();
  const handleSubmit = () => {
    console.log("form submitted");
  };

  return (
    <React.Fragment>
      <AppAppBar />
		<Container maxWidth="lg">
		<Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
		    <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Contact Us
          </Typography>
		<ContactForm />
      </AppForm>
		  </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
		   <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Find Us on Map
          </Typography>
		  		  <iframe src="https://maps.google.com/maps?width=100%25&amp;height=285&amp;hl=en&amp;q=Ougarit%20Building,%201st%20Floor,%20Ramallah,%20Al-Bireh+(AXSOS%20AG)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="285" frameborder="0" allowfullscreen></iframe>
	   </AppForm>
		  </Paper>
      </Grid>
	  </Grid>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);