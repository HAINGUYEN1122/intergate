import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/images/logo.png';
import Banned from '../../assets/images/11.png';
import DotBackground from '../../assets/images/DotBackground.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E2F0FF',
  },
  fullHeight: {
    height: '100%',
  },
  title: {
    fontFamily: 'Noto Sans',
    color: '#686868',
    fontWeight: 500,
    fontSize: 40,
  },
  titleFooter: {
    fontFamily: 'Noto Sans',
    color: '#222222',
    fontWeight: 400,
    fontSize: 60,
  },
  descriptionFooter: {
    fontFamily: 'Noto Sans',
    color: '#222222',
    fontWeight: 400,
    fontSize: 32,
  },
  title1: {
    fontFamily: 'Noto Sans',
    color: '#1565D8',
    fontWeight: 800,
    fontSize: 40,
  },
  logo: {
    margin: theme.spacing(4, 0, 0, 4),
    width: 230,
    height: 54,
  },
  containerLogin: {
    height: '100%',
  },
  backButton: {
    height: '100%',
    margin: theme.spacing(3),
    '& .MuiButton-label': {
      textTransform: 'none',
      color: '#8692A6',
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  menuLabel: {
    color: '#686868',
    fontSize: 18,
  },
  menuLabelActive: {
    color: '#1565D8',
    fontWeight: 700,
    fontSize: 18,
  },
  textButton: {
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 700,
  },
  greyColor: {
    color: '#686868',
  },
  banner: {
    margin: theme.spacing(10, 0),
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridBanner: {
    maxWidth: '55%',
    maxHeight: '50%',
  },
  startButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    color: '#1565D8',
    fontWeight: 700,
    marginTop: 20,
    height: 50,
    textTransform: 'none',
    fontSize: 18,
  },
  gridFooter: {
    textAlign: 'center',
    margin: theme.spacing(5, 20),
  },
  customTextStyle: {
    padding: theme.spacing(0, 2),
    fontFamily: 'Noto Sans',
    color: '#fcd95f',
    fontWeight: 800,
    backgroundColor: '#1565D8',
  },
  dotBackground: {
    position: 'absolute',
    left: 100,
    bottom: 60,
  },
}));

export default function HomePage({ history }) {
  HomePage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  const classes = useStyles();
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      wrap="nowrap"
      className={classes.fullHeight}
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        className={classes.container}
      >
        <Grid
          container
          direction="row"
          wrap="nowrap"
          item
          className={classes.menu}
        >
          <Grid item md={4} xs={4}>
            <img
              justifyContent="flex-start"
              src={Logo}
              className={classes.logo}
              alt="Logo"
            />
          </Grid>
          <Grid item md={3} xs={3} className="align-self-center">
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Link href="/#" className={classes.menuLabelActive}>
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="/#" className={classes.menuLabel}>
                  Explore
                </Link>
              </Grid>
              <Grid item>
                <Link href="/#" className={classes.menuLabel}>
                  Pricing
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={3} className="align-self-center">
            <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.textButton}
                  color="primary"
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={clsx(classes.textButton, classes.greyColor)}
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={2} className="align-self-center">
            <Select
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={1}>EN</MenuItem>
              <MenuItem value={2}>VN</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.fullHeight}
        >
          <Grid container item md={6} xs={6} justifyContent="center">
            <Grid item>
              <Typography
                className={classes.title}
              >
                GROW YOUR BUSINESS
              </Typography>
              <Typography
                className={classes.title1}
              >
                FASTER WITH BATTLECRY
              </Typography>
              <Button variant="contained" className={classes.startButton}>Start with BattleCry</Button>
            </Grid>
          </Grid>
          <Grid container item md={6} xs={6} justifyContent="center">
            <Grid item className={classes.gridBanner}>
              <img
                src={Banned}
                alt="Banned"
                className={classes.banner}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        className={classes.fullHeight}
      >
        <Grid item className={classes.gridFooter}>
          <img src={DotBackground} alt="dot" className={classes.dotBackground} />
          <Typography
            className={classes.titleFooter}
          >
            We help your business&nbsp;
            <span
              className={classes.customTextStyle}
            >
              Faster!
            </span>
          </Typography>
          <Typography
            className={classes.descriptionFooter}
          >
            Customer 360, Marketing Report, Business Intellignece
            Start now with us!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
