/* eslint-disable max-len */
import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useCheckbox } from '../../hooks/input.hooks';
import ticker from '../../assets/images/ticker.svg';
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
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    margin: theme.spacing(2, 0, 4, 0),
  },
  decription: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 4, 0),
    width: 400,
  },
  submit: {
    margin: theme.spacing(4, 0, 5),
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
    fontStyle: 'normal',
    fontWeight: 600,
  },
  containerLogin: {
    height: '100%',
  },
}));

export default function Verification3() {
  const classes = useStyles();
  const { value: isSubmit } = useCheckbox(false);
  return (
    <BackgroundForm>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.containerLogin}
      >
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="xs"
          >
            <Typography className={classes.title} align="center"> Your password has been changed </Typography>
            <img src={ticker} alt="ticker" />
            <Link href="/login" className={classes.hyperlink}>
              Login now!
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={clsx(classes.submit, {
                [classes.disabled]: isSubmit,
              })}
              href="/login"
            >
              Login
            </Button>
          </Grid>
          {/* <Box mt={8}>
            <Copyright />
          </Box> */}
        </Container>
      </Grid>
    </BackgroundForm>

  );
}
