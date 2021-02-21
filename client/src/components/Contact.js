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
		            <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={2}
              fullWidth
              variant="outlined"
            />
            <Button className={classes.margin} variant="contained" color="primary">
              Send
            </Button>
          </form>
      </AppForm>
		  </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
		  		  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.881319200985!2d-74.00151372674895!3d40.69730452928296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc889234bc07c42ee!2sBrooklyn+Heights%2C+Brooklyn%2C+NY+11201!5e0!3m2!1sen!2sus!4v1461598289488" width="100%" height="350" frameborder="0" allowfullscreen></iframe>

		  </Paper>
        </Grid>
      </Grid>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);