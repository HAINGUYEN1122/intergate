/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
import React, { useState } from 'react';
import clsx from 'clsx';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { InputLabel } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
// import Carousel from 'react-material-ui-carousel';
// import ImageList from '@material-ui/core/ImageList';
// import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useInput, useCheckbox } from '../../hooks/input.hooks';
import authenticationService from '../../services/authentication';
import Logo from '../../assets/images/logo.png';
import Banned from '../../assets/images/11.png';
import hand from '../../assets/images/waving-hand.png';
import {
  BAD_REQUEST,
  OK,
  USER_REMEMBER_LOCAL_STORE,
} from '../../constants';
// import styled from 'styled-components';

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
// const Titile = styled.h1'
// '
const useStyles = makeStyles((theme) => ({
  title: {
    width: '400px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    marginTop: theme.spacing(2),
  },
  decription: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 5, 0),
    width: 400,
    // lineHeight: 170,
    // /* or 27px */
  },
  label: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    width: 400,
    margin: theme.spacing(4, 0, 1, 0),
    // lineHeight: 170,
    // /* or 27px */
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: 350,
    marginTop: theme.spacing(1),
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    background: '#ECF2F7',
    height: 40,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#1565D8',
    borderradius: 10,
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
  link: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#66BCE8',
  },
  logo: {
    margin: theme.spacing(4),
    width: 230,
    height: 54,
    left: 41,
    top: 40,
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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    <Grid container>
      <Grid
        item
        xs={6}
        style={{ backgroundColor: '#E2F0FF', height: '200%' }}
      >
        <img
          justifyContent="flex-start"
          src={Logo}
          className={classes.logo}
          alt="Logo"
        />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={Banned}
            alt="Banned"
          />
          <Typography
            align="center"
            textAlign="left"
            className={classes.title}
          >
            Grow your business faster with BattleCry
          </Typography>
          <Typography
            align="center"
            className={classes.decription}
          >
            Connect your bank card, and create accounts in the selected currency.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Container component="main">
          <CssBaseline />
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="baseline"
          >
            <IconButton aria-label="ArrowBackIos">
              <ArrowBackIos />
              Back
            </IconButton>
            <div className={classes.paper}>
              <div className={classes.form}>
                <img src={hand} alt="hand" />
                <Typography
                  align="justify"
                  className={classes.title}
                >
                  Welcome Back!
                </Typography>
                <Typography className={classes.decription}> Please login to access your account. </Typography>
                <InputLabel className={classes.label} htmlFor="outlined-adornment-password">E-mail or phone number</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={onChangeEmail}
                  className={classes.field}
                />
                <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  className={classes.field}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  endAdornment={(
                    <InputAdornment
                      position="end"
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {{ password }.showPassword
                          ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                )}
                  value={password}
                  onChange={onChangePassword}
                />
                <Grid item xs>
                  <Link href="#/" className={classes.link}>
                    Forgot password?
                  </Link>
                </Grid>
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
                  {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Login'}
                </Button>
                <Grid container>
                  <Grid item xs={12} className={classes.link}>
                    <Link href="#/" className={classes.link}>
                      Don&apos;t have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          {/* <Box mt={8}>
            <Copyright />
          </Box> */}
        </Container>
      </Grid>
    </Grid>
  );
}
