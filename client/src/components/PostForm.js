import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, {useState} from 'react';
import TextField from './modules/components/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
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
import axios from 'axios';
import {navigate} from '@reach/router'

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
  const [sent, setSent] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const validate = (values) => {
    const errors = required(['title', 'content', 'image','category'], values);

    if (!errors.title) {
      const titleError = title(values.title, values);
      if (titleError) {
        errors.title = title(values.title, values);
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    console.log("Title: "+title);
    console.log("Category "+ category);
    console.log("Content: "+content);
    console.log("Image "+ image);
    axios.post('http://localhost:8000/api/user/603619a1ca85f7b3bddfa281/createp', {
      title,
      content,
      category
  })
    .then( res =>  navigate ('/category/posts')  )
    .catch(err => console.log("there is an error"+err))
    setSent(true);
    console.log("Im Here");
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
            <Link href="/category/posts" underline="always">
              Go Back 
            </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
        {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="title"
                    fullWidth
                    label="Title"
                    name="title"
                    inputOnChange={(e) => setTitle(e.target.value) }
                    value={title}
                    required
                  />
                </Grid>
              </Grid>
              <br/>
              <Grid item xs={12} sm={12}>
              <TextField 
              fullWidth 
              id="select" 
              label="Category*" 
              onChange={(e) => setCategory(e.target.value) }
              value ={category}
              select>
                  <MenuItem value="arcade">Arcade</MenuItem>
                  <MenuItem value="adventure">Adventure</MenuItem>
                  <MenuItem value="action">Action</MenuItem>
                  <MenuItem value="shooting">Shooting</MenuItem>
                  <MenuItem value="simulation">Simulation</MenuItem>
                  <MenuItem value="online-multiplayer">Online Multiplayer</MenuItem>
                  <MenuItem value="racing">Racing</MenuItem>
                  <MenuItem value="survival">Survival</MenuItem>
                  <MenuItem value="strategy">Strategy</MenuItem>
              </TextField>
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
                inputOnChange={(e) => setImage(e.target.value) }
                value={image}
                required
              />
            <TextField
              name="content"
              label="Content *"
              fullWidth
              multiline 
              rows={20} 
              className={classes.textField} 
              placeholder="Post Content" 
              onChange={(e) => setContent(e.target.value) }
              value={content}
              />
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