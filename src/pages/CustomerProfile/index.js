/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ~ from '@material-ui/icons/CheckBox';
// import clsx from 'clsx';
// import ListItemText from '@material-ui/core/ListItemText';
// import Box from '@material-ui/core/Box';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import Carousel from 'react-material-ui-carousel';
// import Carousel from 'react-elastic-carousel';
// import Drawer from '@material-ui/core/Drawer';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import CustomerProfile from './CustomerProfile';
// import { Search } from '@material-ui/icons';
// import settings from '../../assets/icons/Settings.svg';
// import cancelFilter from '../../assets/icons/FilterCancel.svg';
// import filter from '../../assets/icons/Filter.svg';
// import expand from '../../assets/icons/Expand.svg';
// import BreadcrumbCustom from '../../components/BreadcrumbCustom';/
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import defaultAVT from '../../assets/icons/avatar-default-icon.png';
import facebook from '../../assets/images/Facebook.svg';
import ins from '../../assets/images/preferradchannel-ins.svg';
import phone from '../../assets/images/preferradchannel-phone.svg';
import DateRangePicker from '../../components/DateRangePicker';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';
import Data from './HA MANH CHIEN.json';
import Product from './Product';
import Reaction from './Reaction';
import Behaviour from './Behaviour';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    background: '#FFFFFFCC',
    borderRadius: 20,
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  ChartContainer: {
    padding: theme.spacing(1),
  },
  headercard: {
    margin: theme.spacing(2, 0, 2),
  },
  cardlist: {
    width: 380,
    height: 340,
    borderRadius: 20,
    margin: theme.spacing(2, 3, 2, 3),
  },
  name: {
    fontfamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  contact: {
    marginBottom: theme.spacing(0, 1, 0, 1),
  },
  contenttext: {
    padding: theme.spacing(1),
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
    margin: theme.spacing(0, 1, 0, 1),
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
    margin: theme.spacing(0, 1, 0, 1),
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
    margin: theme.spacing(0, 1, 0, 1),
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
    margin: theme.spacing(0, 1, 0, 1),
  },
  sex: {
    color: ' #2074F2',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    margin: theme.spacing(0, 1, 0, 1),
  },
  cardtext: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  cardtitle: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#22215B',
  },
  form: {
    width: '80%',
    marginBottom: theme.spacing(2),
  },
  form1: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  cardSearch: {
    borderRadius: 20,
  },
  search: {
    width: 445,
    height: 45,
    borderadius: 6,
  },
}));
// const theme = createTheme();

export default function CustomerProfile() {
//   const [open, setOpen] = useState(false);
  const optionsDonutChart = {
    chart: {
      renderTo: 'container',
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Total',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 700,
        align: 'center',
      },
    },
    subtitle: {
      text: '(Total)',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontFamily: 'Open Sans',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 300,
        align: 'center',
        paddingTop: 10,
      },
      y: 30,
    },
    yAxis: {
    },
    plotOptions: {
      pie: {
        shadow: false,
        colors: ['#FFE700', '#826AF9'],
        radius: 19,
      },
    },

    series: [{
      name: 'Chanel spending',
      data: [['Online', 7500], ['Offline', 2500]],
      size: '100%',
      innerSize: '70%',
      dataLabels: {
        enabled: true,
        formatter() {
          const chart = this;
          return `${Math.round(chart.percentage * 100) / 100} %`;
        },
        distance: 0,
        color: 'white',
      },
    }],
  };
  const barchart = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
            + '<td style="padding:0"><b>{point.y:.1f} vnd</b></td></tr>',
      // footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [{
      name: 'Month',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    }],
  };
  const classes = useStyles();
  const breadcrumbsList = {
    list: [
      { text: 'Profile', link: '/home' },
    ],
    active: 'Customer profile',
  };
  return (
    <Container>
      <BreadcrumbCustom breadcrumbsList={breadcrumbsList} />
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Title>Customer behaviors</Title>
        <Card>
          <CardContent className={classes.cardSearch}>
            <TitleCardSearch>Cutomer</TitleCardSearch>
            <OutlinedInput
              disableUnderline
              className={classes.search}
              id="adornment-weight"
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              startAdornment={<InputAdornment sposition="start"><SearchIcon /></InputAdornment>}
            />
          </CardContent>
        </Card>
      </Grid>
      <Card
        className={classes.root}
      >
        {
                Data.map((menuItem) => (
                  <div>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
                      {menuItem.avt == '' || 'undefine' ? <img src={defaultAVT} alt="defaultAVT" /> : menuItem.avt }

                      <Grid className={classes.contact}>
                        <Typography>
                          CONTACT
                        </Typography>
                        <Typography className={classes.name}>
                          {menuItem.customer_sources.Name}
                        </Typography>
                      </Grid>
                      <Button className={menuItem.rank == 'LOYAL' ? classes.rank : menuItem.rank == 'sliver' ? classes.sliver : classes.diamond}>
                        {menuItem.customer_sources.Club_Code}
                      </Button>
                      <Button className={classes.status}>
                        {menuItem.status}
                      </Button>
                      <Typography className={classes.sex}>
                        {menuItem.customer_sources.Gender}
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Grid item lg={5}>
                        <FormControl className={classes.form}>
                          <InputLabel htmlFor="standard-adornment-AUTHENTICATION">AUTHENTICATION</InputLabel>
                          <Input
                            id="standard-AUTHENTICATION"
                          // type={values.showPassword ? 'text' : 'password'}
                          // value={values.password}
                          // onChange={handleChange('password')}
                            endAdornment={(
                              <InputAdornment position="end">
                                <IconButton
                                  className={classes.buttonIcon}
                                  aria-label="PROFILE-SNAPSHOT"
                                >
                                  <CreateIcon />
                                </IconButton>
                              </InputAdornment>
                                )}
                          />
                        </FormControl>
                        <Grid container>
                          <Grid item lg={6}>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                PHONE
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.telephone}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                ADDRESS
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.Address}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                LOCATION
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_address.City}
                                {menuItem.customer_address.Country}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item lg={6}>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                EMAIL
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.email}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                AGE
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.Date_of_Birth}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                EMPLOYER
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.empolyer}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={5}>
                        <FormControl className={classes.form}>
                          <InputLabel htmlFor="standard-adornment-PROFILE-SNAPSHOT">PROFILE SNAPSHOT</InputLabel>
                          <Input
                            id="standard-adornment-password"
                          // type={values.showPassword ? 'text' : 'password'}
                          // value={values.password}
                          // onChange={handleChange('password')}
                            endAdornment={(
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="PROFILE-SNAPSHOT"
                                >
                                  <CreateIcon />
                                </IconButton>
                              </InputAdornment>
                                )}
                          />
                        </FormControl>
                        <Grid container>
                          <Grid item lg={6}>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                CUSTOMER SINCE
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.telephone}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                MARITAL STATUS
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.Address}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                CHILDREN
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_address.City}
                                {menuItem.customer_address.Country}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item lg={6}>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                CLIENT SEGMENT
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.email}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                CREDIT RATING
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.customer_sources.Date_of_Birth}
                              </Typography>
                            </Grid>
                            <Grid className={classes.contenttext}>
                              <Typography className={classes.cardtitle}>
                                PROFILE COMPLETENESS
                              </Typography>
                              <Typography className={classes.cardtext}>
                                {menuItem.empolyer}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2}>
                        <FormControl className={classes.form1}>
                          <InputLabel htmlFor="standard-adornment-PROFILE-SNAPSHOT">PREFERRED CHANNELS</InputLabel>
                          <Input />
                        </FormControl>
                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                          <img src={facebook} alt="facebook" />
                          <img src={ins} alt="ins" />
                          <img src={phone} alt="phone" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                ))
          }
      </Card>
      <Card className={classes.root}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.ChartContainer}>
          <TitleCard> Average spending</TitleCard>
          <RightContent>
            <DateRangePicker />
          </RightContent>
        </Grid>
        <Divider />
        <Grid container spacing={6}>
          <Grid item lg={8}>
            <TitleChart>Average spending</TitleChart>
            <HighchartsReact
              highcharts={Highcharts}
              options={barchart}
            />
          </Grid>
          <Grid item lg={4}>
            <Grid container>
              <Grid item lg={8}>
                <TitleChart> Channel spending</TitleChart>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionsDonutChart}
                />
              </Grid>
              <Grid item lg={4}>
                <Grid container justifyContent="flex-start" alignItems="center" style={{ height: '100%' }}>
                  <Grid>
                    <StatusContent>
                      <OnlineColor />
                      <StatusText> Online</StatusText>
                    </StatusContent>
                    <StatusContent>
                      <OfflineColor />
                      <StatusText> Offline</StatusText>
                    </StatusContent>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Product />
      <Reaction />
      <Behaviour />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;
// const Container = styled.div`
//   margin-top: 70px;
// `;

const Title = styled.h1`
`;
const TitleCard = styled.h1`
  margin-bottom: 12px;
  text-transform: uppercase;
  text-align: start;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #505D6F;
`;
const TitleCardSearch = styled.div`
  text-align: start;
  margin-bottom: 16px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #4D627A;
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;

const TitleChart = styled.div`
  margin: 18px;
  text-align: start;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #505D6F;
`;

// const TotalCustomerContainer = styled.div`
//   padding: 10px 20px;
// `;

// const LabelCustomer = styled.div`
//   font-size: 14px;
//   font-weight: 600;
//   color: #000000;
// `;

// const LabelChannelCustomer = styled.div`
//   font-size: 14px;
//   font-weight: 600;
//   color: #000000;
//   padding-left: 20px;
// `;

// const LabelValue = styled.div`
//   padding: 15px 0;
// `;

// const Value = styled.span`
//   font-size: 14px;
//   color: #000000;
// `;

// const Unit = styled.span`
//   color: #9D9D9D;
//   font-size: 10px;
//   position: absolute;
//   transform: scale(1) translate(10%, 0%);
// `;

const OnlineColor = styled.div`
  width: 29px;
  height: 25px;
  background-color: #FFE700;
  margin-Bottom: 24px;
  margin-Right: 5px
`;

const OfflineColor = styled.div`
  width: 29px;
  height: 25px;
  background-color: #826AF9;
  margin-Right: 5px
`;

const StatusText = styled.span`
  font-size: 14px;
  color: #505D6F;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: center;

`;

const StatusContent = styled.div`
  display: -webkit-box;
`;

// const ArrowUp = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-bottom: 7px solid #4CFA9D;
// `;

// const ArrowDown = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 7px solid #ED455C;
// `;

// const ArrowContent = styled.div`
//   display: -webkit-box;
//   align-items: center;
//   margin-left: 10px;
// `;

// const ArrowValue = styled.span`
//   font-size: 10px;
//   color: #8D9297;
//   padding-left: 2px;
// `;

// const StatusValue = styled.div`
//   margin-top: 10px;
// `;

// const ActionContainer = styled.div`

// `;
