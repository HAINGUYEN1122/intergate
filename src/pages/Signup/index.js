/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-duplicates */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import clsx from 'clsx';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { DatePicker } from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { InputLabel, Radio } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import 'react-bootstrap-daterangepicker';
// import date from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import guy from '../../assets/images/guy.png';
import Logo from '../../assets/images/logo.png';
import { useCheckbox, useInput } from '../../hooks/input.hooks';
// import {
// BAD_REQUEST,
// OK,
//   USER_REMEMBER_LOCAL_STORE,
// } from '../../constants';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E2F0FF',
  },
  containerform: {
    padding: theme.spacing(1, 10, 1, 10),
  },
  fullHeight: {
    height: '100%',
  },
  gridBanner: {
    maxWidth: '80%',
    maxHeight: '50%',
  },
  banner: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    width: '400px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '26px',
    color: '#686868',
  },
  decription: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    margin: theme.spacing(2, 0, 5, 0),
    width: 400,
  },
  label: {
    color: '#696F79',
    fontFamily: 'Poppins',
    fontSize: '16px',
    margin: theme.spacing(1, 0, 1, 0),
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  datefield: {
    height: 44,
    width: 400,
  },
  field: {
    height: 44,
    width: 310,
    fontfamily: 'Poppins',
    fontsize: 14,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#1565D8',
    width: 426,
    height: 64,
    '& .MuiButton-label': {
      fontfamily: 'Inter',
      fontsize: 16,
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
  month: {
    width: 259,
    border: 6,
  },
  dateyear: {
    width: 159,
    border: 6,
  },
  imageContainer: {
    textAlign: '-webkit-right',
  },
}));

export default function signup() {
  const classes = useStyles();
  const history = useHistory();
  // const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
  const { value: email, onChange: onChangeEmail } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const { value: repassword, onChange: onChangeRepassword } = useInput();
  const { value: name, onChange: onChangeName } = useInput();
  const { value: username, onChange: onChangeUsername } = useInput();
  const { value: phone, onChange: onChangePhone } = useInput();
  const { value: country, onChange: onChangeCountry } = useInput();
  const { value: address, onChange: onChangeaAddress } = useInput();
  const { value: checked, onChange: onChangeChecked } = useCheckbox();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [messErr, setMessErr] = useState('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);
  const submit = async () => {
    setError(false);
    if (!email || !password || !name || !username || !country || !address || !phone) {
      setError(true);
      setMessErr('Please input all label');
      if (password !== repassword) {
        setError(true);
        setMessErr('Passwords do not match.');
      }
    } else {
      setSubmit(true);
    }
  };
  return (
    <Grid container className={classes.fullHeight}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        xs={4}
        className={classes.container}
      >
        <img
          src={Logo}
          className={classes.logo}
          alt="Logo"
        />
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.fullHeight}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              align="auto"
              className={classes.title}
            >
              Grow your business faster with BattleCry
            </Typography>
          </Grid>
          <Grid item className={classes.imageContainer}>
            <div className={classes.gridBanner}>
              <img
                src={guy}
                alt="guy"
                className={classes.banner}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        direction="row"
        xs={8}
      >
        <div className={classes.backButton}>
          <Button
            startIcon={<ArrowBackIos />}
            onClick={() => {
              history.push('/home');
            }}
          >
            Back
          </Button>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.containerform}
        >
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-Email-address*">Email address*</InputLabel>
            <OutlinedInput
              id="outlined-email"
              placeholder="Enter email address"
              size="small"
              value={email}
              onChange={onChangeEmail}
              className={classes.field}
            />
          </Grid>
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-name"
              placeholder="Enter name"
              size="small"
              className={classes.field}
              value={name}
              onChange={onChangeName}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.containerform}
        >
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              size="small"
              className={classes.field}
              value={password}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid
            justifyContent="space-evenly"
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-User">User name*</InputLabel>
            <OutlinedInput
              id="outlined-user"
              placeholder="Enter User name"
              size="small"
              className={classes.field}
              value={username}
              onChange={onChangeUsername}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.containerform}
        >
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-adornment-repassword">Repeat password</InputLabel>
            <OutlinedInput
              id="outlined-repassword-input"
              placeholder="Repeat password"
              type="password"
              autoComplete="current-repassword"
              size="small"
              className={classes.field}
              value={repassword}
              onChange={onChangeRepassword}
            />
          </Grid>
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-Country">Country</InputLabel>
            <OutlinedInput
              id="outlined-country"
              placeholder="Country"
              size="small"
              className={classes.field}
              value={country}
              onChange={onChangeCountry}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.containerform}
        >
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-Phonenumber">Phone number*</InputLabel>
            <OutlinedInput
              id="outlined-Phonenumber"
              placeholder="Enter phone number"
              type="text"
              size="small"
              className={classes.field}
              value={phone}
              onChange={onChangePhone}
            />
          </Grid>
          <Grid
            alignItems="center"
            direction="column"
          >
            <InputLabel className={classes.label} htmlFor="outlined-address">Address</InputLabel>
            <OutlinedInput
              id="outlined-address"
              placeholder="Address"
              type="search"
              size="small"
              className={classes.field}
              value={address}
              onChange={onChangeaAddress}
            />
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          direction="column"
          className={classes.containerform}
        >
          <InputLabel className={classes.label} htmlFor="outlined-birthday">Date of birth*</InputLabel>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          className={classes.containerform}
        >
          <DatePicker
            views={['month']}
            label="Month"
            format="MM"
            disableToolbar
            leftArrowIcon={null}
            rightArrowIcon={null}
            className={classes.month}
            value={selectedDate}
            onChange={handleDateChange}
            size="small"
            variant="inline"
            inputVariant="outlined"
          />
          <DatePicker
            views={['date']}
            label="Date"
            format="dd"
            disableToolbar
            leftArrowIcon={null}
            rightArrowIcon={null}
            variant="inline"
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
            className={classes.dateyear}
            size="small"
          />
          <DatePicker
            views={['year']}
            label="Year"
            format="yyyy"
            disableToolbar
            leftArrowIcon={null}
            rightArrowIcon={null}
            className={classes.dateyear}
            value={selectedDate}
            onChange={handleDateChange}
            size="small"
            variant="inline"
            inputVariant="outlined"
          />
        </Grid>
        <Grid
          alignItems="center"
          direction="column"
          className={classes.containerform}
        >
          <FormControlLabel
            control={<Radio checked={checked} onChange={onChangeChecked} value="remember" color="primary" />}
            label="I agree to terms and conditions"
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: isSubmit,
            })}
            onClick={submit}
            disabled={isSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Register account'}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
