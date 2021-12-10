/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import Carousel from 'react-material-ui-carousel';
// import Carousel from 'react-elastic-carousel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
// import CardContent from '@material-ui/core/CardContent';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import settings from '../../assets/icons/Settings.svg';
import cancelFilter from '../../assets/icons/FilterCancel.svg';
import filter from '../../assets/icons/Filter.svg';
import expand from '../../assets/icons/Expand.svg';
import avatar1 from '../../assets/images/avacustomer1.png';
import avatar2 from '../../assets/images/avacustomer2.png';
import avatar3 from '../../assets/images/avacustomer3.png';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 480,
    background: '#FFFFFFCC',
    borderRadius: 20,
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  cardcontent: {
    width: 351,
    padding: theme.spacing(2, 2, 0, 2),
  },
  titlecard: {
    fontfamily: 'Inter',
    fontSize: 24,
    fontWeight: 700,
    padding: theme.spacing(1, 7, 1, 7),
  },
  boxsize: {
    width: 1186,
    color: '#979797',
  },
  headercard: {
    margin: theme.spacing(2, 0, 2),
  },
  line: {
    width: 313,
    color: '#979797',
  },
  search: {
    width: 350,
    height: 32,
    margin: theme.spacing(2),
    paddingRight: theme.spacing(0),
    color: '#94A4B7',
  },
  filter: {
    alignItems: 'center',
    fontfamily: 'Inter',
    fontSize: 15,
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  cardlist: {
    width: 380,
    height: 333,
    borderRadius: 20,
  },
  name: {
    fontfamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  status: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#4CFA9D',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
  },
  rank: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#FFE700',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
  },
  sliver: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#E7EAEC',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
  },
  diamond: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#D3E8FF',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
  },
  sex: {
    color: ' #2074F2',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
  },
  cardtext: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
    padding: theme.spacing(0, 2, 3, 0),
  },
  cardtitle: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#22215B',
  },
  cardtext1: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  viewmore: {
    color: '#2074F2',
    fontfamily: 'ABeeZee',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'capitalize',
    padding: theme.spacing(1, 0),
  },
}));
const theme = createTheme();
const data = [
  {
    id: 1,
    avatar: <img src={avatar1} alt="avatar" />,
    status: 'Active',
    rank: 'gold',
    phone: '+84 936942807',
    address: '200 Nguyen Thai Hoc, Quy Nhon',
    location: 'Binh Dinh, Vietnam',
    name: 'Lannister',
    empolyer: 'RAD Designs',
    email: 'example@email.com',
    age: '22',
    sex: '#female',
  },
  {
    id: 2,
    avatar: <img src={avatar2} alt="avatar" />,
    status: 'Active',
    rank: 'sliver',
    phone: '+84 936942807',
    address: '200 Nguyen Thai Hoc, Quy Nhon',
    location: 'Binh Dinh, Vietnam',
    name: 'Lannister',
    empolyer: 'RAD Designs',
    email: 'example@email.com',
    age: '22',
    sex: '#female',
  },
  {
    id: 3,
    avatar: <img src={avatar3} alt="avatar" />,
    status: 'Active',
    rank: 'diamond',
    phone: '+84 936942807',
    address: '200 Nguyen Thai Hoc, Quy Nhon',
    location: 'Binh Dinh, Vietnam',
    name: 'Lannister',
    empolyer: 'RAD Designs',
    email: 'example@email.com',
    age: '22',
    sex: '#female',
  },
];
// const anArrayOfNumbers = [
//   <img src="http://random.com/one" />,
//   <img src="http://random.com/two" />,
//   <img src="http://random.com/three" />,
// ];
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];
export default function CustomerProfile() {
  const classes = useStyles();
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Card className={classes.root}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Button size="small"><ExpandMoreIcon /></Button>
                  <Button
                    startIcon={<img src={settings} alt="Setting" />}
                    className={classes.filter}
                  >
                    Search & filter index
                  </Button>
                  <Button
                    startIcon={<img src={cancelFilter} alt="CancleFilter" />}
                    className={classes.filter}
                  >
                    Cancel filter
                  </Button>
                  <Button
                    startIcon={<img src={filter} alt="Filter" />}
                    className={classes.filter}
                  >
                    Filter
                  </Button>
                  <Button
                    startIcon={<img src={expand} alt="CancleFilter" />}
                    className={classes.filter}
                  >
                    Expand
                  </Button>
                </Grid>
                <Grid>
                  <OutlinedInput
                    disableUnderline
                    className={classes.search}
                    id="adornment-weight"
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    endAdornment={<InputAdornment sposition="end"><SearchIcon /></InputAdornment>}
                  />
                </Grid>
              </Grid>
              <Box className={classes.boxsize} borderBottom={1} borderColor="grey.500" />
              <Grid
                container
                justifyContent="flex-start"
              >
                <Typography
                  className={classes.titlecard}
                >
                  Customer
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
              >
                {
                data.map((menuItem) => (
                  <Card className={classes.cardlist}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-end"
                        className={classes.headercard}
                      >
                        {menuItem.avatar}
                        <Grid
                          direction="column"
                        >
                          <Typography>
                            CONTACT
                          </Typography>
                          <Typography className={classes.name}>
                            {menuItem.name}
                          </Typography>
                        </Grid>
                        <Button className={menuItem.rank == 'gold' ? classes.rank : menuItem.rank == 'sliver' ? classes.sliver : classes.diamond}>
                          {menuItem.rank}
                        </Button>
                        <Button className={classes.status}>
                          {menuItem.status}
                        </Button>
                        <Typography className={classes.sex}>
                          {menuItem.sex}
                        </Typography>
                      </Grid>
                      <Box className={classes.line} borderBottom={1} borderColor="grey.500" />
                      <Grid
                        container
                        className={classes.cardcontent}
                      >
                        <Grid direction="column" xs={6}>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              PHONE
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.phone}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              ADDRESS
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.address}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              LOCATION
                            </Typography>
                            <Typography className={classes.cardtext1}>
                              {menuItem.location}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid xs={6} justifyContent="space-between">
                          <Grid>
                            <Typography className={classes.cardtitle}>
                              EMAIL
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.email}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              AGE
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.age}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              EMPLOYER
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.empolyer}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Button className={classes.viewmore}>View more</Button>
                      </Grid>
                    </Grid>
                  </Card>
                ))
          }
              </Grid>

            </Grid>
          </Card>
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
