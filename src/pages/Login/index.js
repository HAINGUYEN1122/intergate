/* eslint-disable max-len */
import React, { useState } from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { useInput, useCheckbox } from '../../hooks/input.hooks';
import authenticationService from '../../services/authentication';
import {
  BAD_REQUEST,
  OK,
  USER_REMEMBER_LOCAL_STORE,
} from '../../constants';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>
//       {' '}
//       {new Date().getFullYear()}
//       .
//     </Typography>
//   );
// }

// function onLogin() {
//   const { isChecked, username, password } = this.state;
//   if ((username === undefined || username.trim().length === 0) && (password === undefined || password.trim().length === 0)) {
//     this.setState({ error: "ERROR_USER_PASSWORD_NOT_NULL" });
//   } else {
//     const value = await authenticationService.login(this.state.username, this.state.password);
//     if (value.isValid !== false) {
//       localStorage.setItem('rememberMe', isChecked);
//       localStorage.setItem('user', isChecked ? JSON.stringify({ username, password }) : JSON.stringify({ username: '', password: '' }));
//       const { from } = this.props.location.state || { from: { pathname: "/" } };
//       this.setState({ isLogged: true })
//       this.props.history.push(from);
//     } else {
//       this.setState({ error: value.message });
//     }
//   }
// }

const useStyles = makeStyles((theme) => ({
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
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
}));

export default function SignIn(props) {
  SignIn.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));

  const { value: email, onChange: onChangeEmail } = useInput(user ? user.email : '');
  const { value: password, onChange: onChangePassword } = useInput(user ? user.password : '');
  const [messErr, setMessErr] = useState('');
  const { value: checked, onChange: onChangeChecked } = useCheckbox(!!user);
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

  const login = async () => {
    setError(false);
    if (!email || !password) {
      setError(true);
      setMessErr('Please input username or password.');
    } else {
      setSubmit(true);
      try {
        const value = await authenticationService.login(email, password);
        const { status, data } = value;
        if (status === OK) {
          authenticationService.updateUser(data);
          localStorage.setItem(USER_REMEMBER_LOCAL_STORE, checked ? JSON.stringify({ email, password }) : null);
          props.history.push('/');
        }
      } catch (error) {
        setError(true);
        if (error.response && error.response.status === BAD_REQUEST) {
          setMessErr('username or password is incorrect.');
        } else {
          setMessErr(error.message);
        }
      }
      setSubmit(false);
    }
  };

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
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChangeChecked} value="remember" color="primary" />}
            label="Remember me"
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: isSubmit,
            })}
            onClick={login}
            disabled={isSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Sign in'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#/" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
