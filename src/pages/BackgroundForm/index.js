/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Banned from '../../assets/images/11.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E2F0FF',
  },
  fullHeight: {
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
  gridBanner: {
    maxWidth: '80%',
    maxHeight: '50%',
  },
  banner: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function BackgroundForm({ children }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.fullHeight}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        xs={6}
        className={classes.container}
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
          className={classes.fullHeight}
        >
          <div className={classes.gridBanner}>
            <img
              src={Banned}
              alt="Banned"
              className={classes.banner}
            />
          </div>
          <Typography
            align="center"
            textAlign="left"
            className={classes.title}
          >
            Grow your business faster with BattleCry
          </Typography>
          <Typography
            align="center"
            className={classes.description}
          >
            Connect your bank card, and create accounts in the selected currency.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        xs={6}
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
        {children}
      </Grid>
    </Grid>
  );
}

BackgroundForm.defaultProps = {
//   location: undefined,
  children: undefined,
};

BackgroundForm.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired,
//   }),
  children: PropTypes.shape({}),
};
