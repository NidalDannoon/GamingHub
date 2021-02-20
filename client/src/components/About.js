import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            About Us 
          </Typography>
          
          <Typography variant="h5" gutterBottom marked="center" align="center">
            Our Mission
          </Typography>
          <br/>
          <Typography variant="body" align="center">
        Gaming Hub is all about promoting and cultivating the game development scene in our region. Any game development team and company working actively can join. The goal of the organization is to unify the game development scene.
        We believe that by unifying all game developers under the same organization we can make an amazing community, bringing new jobs, talent and game studios to the region.
        We run multiple game incubator programs, help out with mentoring and advise local game companies in publishing deals, fundraising, pitching and networking. Get in touch should you need these services – offered free of charge!</Typography>
        <br/>
        <br/>

        <Typography variant="h5" gutterBottom marked="center" align="center">
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Typography variant="body" align="center">
          <br/><b>What does the Gaming Hub provide?</b><br/>
Think of Gaming Hub as an umbrella organization for all the companies in the region. We want to provide mentoring, networking opportunities, business delegations, office spaces, special equipment for game developers and developer gatherings in the region. Additionally, we will host incubation programs and special events that link other cities to game development talent in Palestine.

<br/><b>Why in Palestine?</b><br/>
The better question is, why not? Palestine is full of amazing gamers and developers . The opportunities in the country are insane for growth of companies and talented game developers. Even if you are just starting your game development career, you’ll do better here than anywhere else, thanks to our supporting organizations and tightly-knitted community with a friendly atmosphere.

<br/><b>How many game companies are in Palestine region?</b><br/>
There are over 30 game development companies in Palestine according to this list from Neogames. Our database also includes game teams (not yet registered companies) which might differ from the official listings.

<br/><b>How do I join? How much does membership in Gaming Hub cost?</b><br/>
Membership is free! You just have to be an active senior member of a game company. We will give you access to your own company profile. Later, we might induct other members from all around the scene – once we’ve got a healthy chunk of active game companies in the area.
</Typography>
        <br/>
        <br/>
        <img align='center'
          src="https://images.squarespace-cdn.com/content/v1/5c0023215417fc782bf587d9/1602701799398-RQC0ICRDQ7S7FHZTJEYL/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/Gamer%E2%80%99s+Guide%3A+Optimizing+Your+Gaming+Hub"
          alt="Gaming Hub"
          width="460"
        />
        </React.Fragment>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(About);