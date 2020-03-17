import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInFormBase(props) {
  const classes = useStyles();

  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
  const [state, setState] = useState(INITIAL_STATE);

  const isInvalid = () => (state.email === '' || state.password === '');

  const onChange = (e) => {
    const newState = {...state};
    newState[e.target.name] = e.target.value;
    setState({ ...newState });
  }

  const onSubmit = (e) => {
    const { email, password } = state;
    console.log('SignIn.onSubmit.start');

    props.firebase.signInWithEmialAndPassword(email, password)
      .then( () => {
        console.log('SignIn.onSubmit.ok');
        setState(INITIAL_STATE);
        props.history.push(ROUTES.HOME);
      })
      .catch( error => {
        console.log('SignIn.onSubmit.error', error);
        let newState = {...state};
        newState.error = error;
        setState({ ...newState });
      });

    console.log('SignIn.onSubmit.stop');
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={onChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid()}
          >
            Sign In
          </Button>
        </form>
        {state.error && <Grid item>{state.error.message}</Grid>}
        <SignUpLink />
      </div>
    </Container>
  );
}

const SignUpLink = () => (
  <Grid container justify="flex-end">
    <Grid item>
      Don't have an account?
      <Link to={ROUTES.SIGN_UP} variant="body2">Sign Up</Link>
    </Grid>
  </Grid>
);

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

function SignInPage(props) {
  return (
    <div>
      <SignInForm />
    </div>
  );
}

export default SignInPage;
export { SignInForm };
