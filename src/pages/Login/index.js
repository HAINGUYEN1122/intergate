/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useInput, useCheckbox } from '../../hooks/input.hooks';
import authenticationService from '../../services/authentication';
import hand from '../../assets/images/waving-hand.png';
import {
  // BAD_REQUEST,
  // OK,
  USER_REMEMBER_LOCAL_STORE,
} from '../../constants';
import BackgroundForm from '../BackgroundForm';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E2F0FF',
    height: '100vh',
  },
  backgroundContainer: {
    height: '100%',
  },
  title: {
    width: '400px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    marginTop: theme.spacing(2),
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 5, 0),
    width: 400,
  },
  label: {
    color: '#455360',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    width: 400,
    margin: theme.spacing(4, 0, 1, 0),
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
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
    borderRadius: '8px',
    height: '44px',
    '& .MuiButton-label': {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '18px',
    },
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
  link: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
  },
  hyperlink: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
    color: '#66BCE8',
  },
  logo: {
    margin: theme.spacing(4),
    width: 230,
    height: 54,
  },
  containerLogin: {
    height: '100%',
  },
  backButton: {
    margin: theme.spacing(3),
    '& .MuiButton-label': {
      textTransform: 'none',
      color: '#8692A6',
      fontWeight: 600,
      fontSize: '16px',
    },
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
      const userData = {
        firstName: 'Hai',
        lastName: 'Nguyen',
        token: 'test',
      };
      await authenticationService.login(userData);
      authenticationService.updateUser(userData);
      props.history.push('/');
      setSubmit(false);
    }
  };
  return (
    <BackgroundForm>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerLogin}
      >
        <Container maxWidth="xs">
          <img src={hand} alt="hand" />
          <Typography
            align="justify"
            className={classes.title}
          >
            Welcome back!
          </Typography>
          <Typography className={classes.description}> Please login to access your account. </Typography>
          <InputLabel className={classes.label} color="secondary">E-mail or phone number</InputLabel>
          <OutlinedInput
            fullWidth
            name="email"
            autoComplete="email"
            placeholder="Type your e-mail or phone number"
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
            placeholder="Type your password"
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
            <Link href="/forgotpassword" className={classes.hyperlink}>
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
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Log In'}
          </Button>
          <Grid container>
            <Grid item xs={12} className={classes.link}>
              Don&apos;t have an account?
              <Link href="/signup" className={classes.hyperlink}>
                  &nbsp;Sign Up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </BackgroundForm>
  );
}
