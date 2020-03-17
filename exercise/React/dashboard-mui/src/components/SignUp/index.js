import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

function SignUpFormBase(props) {
  const classes = useStyles();

  const [state, setState] = useState(INITIAL_STATE);
  const { firstName, lastName, email, passwordOne, passwordTwo, error } = state;

  const isInvalid = () => (
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    firstName === ''||
    lastName === '');

  const onChange = (e) => {
    const newState = {...state};
    newState[e.target.name] = e.target.value;
    setState({ ...newState });
  }

  const onSubmit = (e) => {
    const { firstName, lastName, email, passwordOne } = state;

    props.firebase
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        setState(INITIAL_STATE);
        props.history.push(ROUTES.HOME); //history is got from withRouter HOC
      })
      .catch(error => {
        const newState = {...state};
        console.log(newState);
        newState['error'] = error;
        setState({ ...newState });
      })

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
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                value={firstName}
                label="First Name"
                variant="outlined"
                required
                fullWidth
                autoFocus
                autoComplete="fname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                value={lastName}
                label="Last Name"
                variant="outlined"
                required
                fullWidth
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password1"
                name="passwordOne"
                value={passwordOne}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                id="password2"
                name="passwordTwo"
                value={passwordTwo}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            disabled={isInvalid()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        {error && <Grid item>{error.message}</Grid>}
        <SignInLink />
      </div>
    </Container>
  );
}

const SignInLink = () => (
  <Grid container justify="flex-end">
    <Grid item>
      Already have an account?
      <Link to={ROUTES.SIGN_IN} variant="body2">
        Sign in
      </Link>
    </Grid>
  </Grid>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

export default SignUpPage;
export { SignUpForm };
