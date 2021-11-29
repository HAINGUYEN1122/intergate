/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import JavaScriptLogo from '../../assets/images/JavaScriptLogo.png';
import GoogleAnalyticsLogo from '../../assets/images/GoogleAnalyticsLogo.png';
import FacebookInsightLogo from '../../assets/images/FacebookLogo.png';
import InstagramInsightsLogo from '../../assets/images/InstagramLogo.png';
import DatabaseLogo from '../../assets/images/DatabaseLogo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontfamily: 'Inter',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: 'left',
  },
  titlebox: {
    fontfamily: 'Inter',
    fontSize: 20,
    color: '#25213B',
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: 'left',
  },
  desbox: {
    fontfamily: 'Inter',
    fontSize: 18,
    color: '#25213B',
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'left',
    margin: theme.spacing(2, 0, 0, 2),
  },
  des: {
    fontfamily: 'Inter',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 500,
    textAlign: 'left',
  },
  ContainerBox: {
    margin: theme.spacing(2),
  },
  img: {
    margin: theme.spacing(0, 2, 2, 0),
  },
  img1: {
    margin: theme.spacing(0, 2, 0, 2),
  },
  filter: {
    width: 445,
    height: 45,
    borderadius: 6,
    margin: theme.spacing(2, 0, 4, 0),
    background: '#F2F9FF',
    color: '#0A7AFF',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  textField: {
    width: 445,
    background: '#F2F9FF',
    borderradius: 6,
    color: '#1565D8',
  },
  selectbtn: {
    width: 112,
    height: 41,
    margin: theme.spacing(2, 0, 0, 2),
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#0A7AFF',
  },
  box: {
    width: 330,
    height: 220,
    borderRadius: 16,
    color: '#979797',
    borderStyle: 'solid',
    borderWidth: 2,
    // style: { width: '5rem', height: '5rem' },
    margin: theme.spacing(2, 5, 5, 0),
    // borderColor: ,
  },
}));
const theme = createTheme();
export default function AddDataSource() {
  const classes = useStyles();

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/sconnection">
              Source connection
            </Link>
            <Typography color="textPrimary">Connector </Typography>
          </Breadcrumbs>
          <Box>
            <Typography
              sx={{ ml: 3, mt: 3 }}
              fontWeight="bold"
              className={classes.title}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                ml: 5,
                mt: 2,
                fontSize: 20,
              }}
              className={classes.des}
            >
              Select connector
            </Typography>
            <OutlinedInput
              disableUnderline
              className={classes.filter}
              id="adornment-weight"
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              startAdornment={<InputAdornment sposition="start"><SearchIcon /></InputAdornment>}
            />

            <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
              <Grid item>
                {/* Box connection */}
                <Box
                  className={classes.box}
                >
                  <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    className={classes.ContainerBox}
                  >
                    <Grid
                      direction="row"
                      container
                    >
                      <img
                        className={classes.img}
                        src={JavaScriptLogo}
                        alt="JavaScriptLogo"
                      />
                      <Grid
                        direction="column"
                      >
                        <Typography className={classes.titlebox}>
                          JavaScript
                        </Typography>
                        <Typography
                          color="#797979"
                        >
                          By Battlecry
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={10}
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Typography className={classes.desbox}>Connect to JavaScript</Typography>
                      <Button className={classes.selectbtn} variant="outlined" href="/jsconnection">
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                {/* Box connection */}
                <Box
                  className={classes.box}
                >
                  <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    className={classes.ContainerBox}
                  >
                    <Grid
                      direction="row"
                      container
                    >
                      <img
                        className={classes.img1}
                        src={GoogleAnalyticsLogo}
                        alt="GoogleAnalyticsLogo"
                      />
                      <Grid
                        direction="column"
                      >
                        <Typography className={classes.titlebox}>
                          Google Analytics
                        </Typography>
                        <Typography
                          color="#797979"
                        >
                          By Battlecry
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Typography className={classes.desbox}>Connect to Google Analytics</Typography>
                      <Button className={classes.selectbtn} variant="outlined" href="/jsconnection">
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item>
                {/* Box connection */}
                <Box
                  className={classes.box}
                >
                  <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    className={classes.ContainerBox}
                  >
                    <Grid
                      direction="row"
                      container
                    >
                      <img
                        className={classes.img}
                        src={FacebookInsightLogo}
                        alt="FacebookInsightLogo"
                      />
                      <Grid
                        direction="column"
                      >
                        <Typography className={classes.titlebox}>
                          Facebook Insights
                        </Typography>
                        <Typography
                          color="#797979"
                        >
                          By Battlecry
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Typography className={classes.desbox}>Connect to Facebook Insights</Typography>
                      <Button className={classes.selectbtn} variant="outlined" href="/jsconnection">
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item>
                {/* Box connection */}
                <Box
                  className={classes.box}
                >
                  <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    className={classes.ContainerBox}
                  >
                    <Grid
                      direction="row"
                      container
                    >
                      <img
                        className={classes.img}
                        src={InstagramInsightsLogo}
                        alt="InstagramInsightsLogo"
                      />
                      <Grid
                        direction="column"
                      >
                        <Typography className={classes.titlebox}>
                          Instagram Insights
                        </Typography>
                        <Typography
                          color="#797979"
                        >
                          By Battlecry
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Typography className={classes.desbox}>Connect to Instagram Insights</Typography>
                      <Button className={classes.selectbtn} variant="outlined" href="/jsconnection">
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item>
                {/* Box connection */}
                <Box
                  className={classes.box}
                >
                  <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    className={classes.ContainerBox}
                  >
                    <Grid
                      direction="row"
                      container
                    >
                      <img
                        className={classes.img}
                        src={DatabaseLogo}
                        alt="DatabaseLogo"
                      />
                      <Grid
                        direction="column"
                      >
                        <Typography className={classes.titlebox}>
                          Database
                        </Typography>
                        <Typography
                          color="#797979"
                        >
                          By Battlecry
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={10}
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Typography className={classes.desbox}>Connect to Database</Typography>
                      <Button className={classes.selectbtn} variant="outlined" href="/jsconnection">
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

// const Title = styled.h1`
// `;

// const RightContent = styled.div`
//   display: inherit;
//   align-items: center;
// `;
