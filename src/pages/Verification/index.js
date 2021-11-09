/* eslint-disable max-len */
import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useCheckbox } from '../../hooks/input.hooks';
import phone from '../../assets/images/Phone.svg';
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
    margin: theme.spacing(2, 0, 2, 0),
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 0, 0),
  },
  descriptionEmail: {
    color: '#1565D8',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    margin: theme.spacing(0, 0, 4, 0),
  },
  field: {
    background: '#ECF2F7',
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
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
    margin: theme.spacing(2, 0, 2, 0),
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
}));

export default function Verification() {
  const classes = useStyles();
  const { value: isSubmit } = useCheckbox(false);
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
          <Typography className={classes.title} align="center"> Second Step Verification </Typography>
          <Grid
            container
            direction="column"
            justifyContent="start"
            alignItems="center"
          >
            <img src={phone} alt="phone" />
          </Grid>
          <Typography className={classes.description} align="center">Enter the verification code we sent to</Typography>
          <Typography className={classes.descriptionEmail} align="center">ducminhvo@gmail.com</Typography>
          <TextField
            id="outlined-code-input"
            label="Type code here"
            type="code"
            autoComplete="current-code"
            variant="outlined"
            size="small"
            className={classes.field}
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: isSubmit,
            })}
            href="/newpassword"
          >
            Verify
          </Button>
          <Grid container>
            <Grid item xs={12} style={{ textAlign: 'center', fontWeight: 600 }}>
              Didn&apos;t gate the code?
              <Link href="#/" className={classes.hyperlink}>
                Resend
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link href="#/" className={classes.hyperlink}>
                Call Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </BackgroundForm>
  );
}
