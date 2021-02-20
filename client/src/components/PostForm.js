import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import TextField from './modules/components/TextField';
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

function PostForm() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

//   const validate = (values) => {
//     const errors = required(['title', 'content', 'image'], values);

//     if (!errors.title) {
//       const titleError = title(values.title, values);
//       if (titleError) {
//         errors.title = title(values.title, values);
//       }
//     }

//     return errors;
//   };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Create A New Post
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/" underline="always">
              Back to Home
            </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="title"
                    fullWidth
                    label="Title"
                    name="title"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="image"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                rows={20}
                label="Image Link"
                margin="normal"
                name="image"
                required
              />
              {/* <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="content"
                autoComplete="content"
                label="Content"
                margin="normal"
              /> */}
            <TextField name="content" label="Content *" fullWidth multiline rows={20} className={classes.textField} placeholder="Post Content" />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Create Post'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(PostForm);