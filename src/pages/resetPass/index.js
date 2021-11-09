/* eslint-disable no-empty */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-duplicate-props */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useInput, useCheckbox } from '../../hooks/input.hooks';
import hand from '../../assets/images/waving-hand.png';
import BackgroundForm from '../BackgroundForm';
import {
//   BAD_REQUEST,
//   OK,
  USER_REMEMBER_LOCAL_STORE,
} from '../../constants';

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
  containerLogin: {
    height: '100%',
  },
  backToLogin: {
    marginTop: theme.spacing(2),
  },
}));

export default function retsetpass(props) {
  retsetpass.propTypes = {
  };

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
  const { value: password, onChange: onChangePassword } = useInput(user ? user.password : '');
  const { value: repassword, onChange: onChangeRePassword } = useInput(user ? user.repassword : '');
  //   const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
  const [messErr, setMessErr] = useState('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const checkPass = async () => {
    setError(false);
    if (typeof password !== 'undefined' && typeof repassword !== 'undefined') {
      if (password !== repassword) {
        setError(true);
        setMessErr('Passwords do not match.');
      } else {
        props.history.push('/verification3');
      }
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
            Your new password!
          </Typography>
          <Typography className={classes.description}>
            Enter your new password, please.
          </Typography>
          <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            fullWidth
            name="password"
            type="password"
            id="password"
            placeholder="Type your password"
            className={classes.field}
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Re Password</InputLabel>
          <OutlinedInput
            fullWidth
            name="repassword"
            type="password"
            id="repassword"
            placeholder="Type your new password"
            className={classes.field}
            autoComplete="current-repassword"
            value={repassword}
            onChange={onChangeRePassword}
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
          <Grid item xs className={classes.backToLogin}>
            <Link href="/login" className={classes.hyperlink}>
              Login?
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={checkPass}
        //   disabled={isSubmit}
          >
            Submit
          </Button>
        </Container>
      </Grid>
    </BackgroundForm>
  );
}
