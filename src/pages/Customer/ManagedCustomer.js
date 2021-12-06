import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Divider, Button,
  FormControl, OutlinedInput, InputAdornment, IconButton,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Search } from '@material-ui/icons';
import settings from '../../assets/icons/Settings.svg';
import cancelFilter from '../../assets/icons/FilterCancel.svg';
import filter from '../../assets/icons/Filter.svg';
import expand from '../../assets/icons/Expand.svg';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';
import DateRangePicker from '../../components/DateRangePicker';
// import getNews from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  titleContainer: {
    margin: theme.spacing(1, 0, 4, 0),
  },
  customerPaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(10),
  },
  button: {
    textTransform: 'initial',
  },
  inputSearch: {
    float: 'right',
  },
  marginDivider: {
    margin: theme.spacing(2, 0),
  },
}));

function ManageCustomer() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.news);

  useEffect(() => {
    // dispatch(getNews());
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  const optionsAreaChart = {
    chart: {
      type: 'areaspline',
      height: 300,
    },
    title: {
      text: '',
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
        lineWidth: 0,
      },
      // line: {
      //   marker: {
      //     enabled: false,
      //   },
      //   states: {
      //     hover: {
      //       enabled: false,
      //     },
      //   },
      // },
    },
    legend: {
      // layout: 'vertical',
      align: 'center',
      verticalAlign: 'top',
      // x: 150,
      // y: 100,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor:
      //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    },
    xAxis: {
      title: {
        text: 'Day',
        align: 'high',
        rotation: 0,
        offset: 0,
        x: 10,
        y: 7,
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
      ],
    },
    yAxis: {
      title: {
        text: 'Customer',
        align: 'high',
        rotation: 0,
        offset: 0,
        y: -20,
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units',
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'New customer',
      data: [200, 420, 490, 750, 460, 420, 730],
      fillColor: {
        linearGradient: {
          x1: 0, x2: 0, y1: 0, y2: 1,
        },
        stops: [
          [0, '#99A4FF'],
          [1, '#001CFC'],
        ],
      },
      color: '#5F70FE',
    }, {
      name: 'Male',
      data: [180, 160, 185, 250, 200, 150, 160],
      fillColor: {
        linearGradient: {
          x1: 0, x2: 0, y1: 0, y2: 1,
        },
        stops: [
          [0, '#CFD4FF'],
          [1, '#2039FF'],
        ],
      },
      color: '#8D99FF',
    }],
  };

  const optionsDonutChart = {
    chart: {
      renderTo: 'container',
      type: 'pie',
      height: 300,
    },
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: 'Total percent market share',
      },
    },
    plotOptions: {
      pie: {
        shadow: false,
        colors: ['#FFE700', '#826AF9'],
      },
    },
    series: [{
      name: 'Customers',
      data: [['Online', 75000], ['Offline', 25000]],
      size: '100%',
      innerSize: '65%',
      dataLabels: {
        enabled: true,
        formatter() {
          const chart = this;
          return `${Math.round(chart.percentage * 100) / 100} %`;
        },
        distance: -30,
        color: 'white',
      },
    }],
  };

  const breadcrumbsList = {
    list: [
      { text: 'Profile', link: '/home' },
    ],
    active: 'Manage Customer',
  };

  console.log(data);
  return (
    <Container>
      <BreadcrumbCustom breadcrumbsList={breadcrumbsList} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.titleContainer}
      >
        <Title>Overview</Title>
        <RightContent>
          <DateRangePicker />
        </RightContent>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <TitleChart TitleChart>Customer Overview</TitleChart>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsAreaChart}
            />
          </Paper>
        </Grid>
        <Grid item lg={8}>
          <Paper className={classes.paper} elevation={3}>
            <TitleChart>Customer by Channel</TitleChart>
            <Divider />
            <Grid container spacing={3}>
              <Grid item lg={5}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionsDonutChart}
                />
              </Grid>
              <Grid item lg={7}>
                <TotalCustomerContainer>
                  <LabelCustomer>TOTAL CUSTOMER</LabelCustomer>
                  <LabelValue>
                    <Value>100.000</Value>
                    <Unit>customers</Unit>
                  </LabelValue>
                  <Divider />
                </TotalCustomerContainer>
                <Grid container spacing={3}>
                  <Grid item lg={6}>
                    <LabelChannelCustomer>CHANNELS</LabelChannelCustomer>
                    <StatusContent>
                      <OnlineColor />
                      <StatusValue>
                        <StatusText>Online: 75.000</StatusText>
                        <Unit>customers</Unit>
                        <ArrowContent>
                          <ArrowUp />
                          <ArrowValue>12% over last month</ArrowValue>
                        </ArrowContent>
                      </StatusValue>
                    </StatusContent>
                    <StatusContent>
                      <OfflineColor />
                      <StatusValue>
                        <StatusText>Offline: 25.000</StatusText>
                        <Unit>customers</Unit>
                        <ArrowContent>
                          <ArrowUp />
                          <ArrowValue>12% over last month</ArrowValue>
                        </ArrowContent>
                      </StatusValue>
                    </StatusContent>
                  </Grid>
                  <Grid item lg={6}>
                    <LabelCustomer>STATUS</LabelCustomer>
                    <StatusContent>
                      <StatusValue>
                        <StatusText>New: 35.000</StatusText>
                        <Unit>customers</Unit>
                        <ArrowContent>
                          <ArrowUp />
                          <ArrowValue>12% over last month</ArrowValue>
                        </ArrowContent>
                      </StatusValue>
                    </StatusContent>
                    <StatusContent>
                      <StatusValue>
                        <StatusText>Lost: 36.000</StatusText>
                        <Unit>customers</Unit>
                        <ArrowContent>
                          <ArrowDown />
                          <ArrowValue>12% over last month</ArrowValue>
                        </ArrowContent>
                      </StatusValue>
                    </StatusContent>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.customerPaper} elevation={3}>
        <ActionContainer>
          <Button
            className={classes.button}
            startIcon={<img src={settings} alt="settings" />}
          >
            Search & filter index
          </Button>
          <Button
            className={classes.button}
            startIcon={<img src={cancelFilter} alt="cancel filter" />}
          >
            Cancel filter
          </Button>
          <Button
            className={classes.button}
            startIcon={<img src={filter} alt="filter" />}
          >
            Filter
          </Button>
          <Button
            className={classes.button}
            startIcon={<img src={expand} alt="expand" />}
          >
            Expand
          </Button>
          <FormControl className={classes.inputSearch} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              placeholder="Search Customer..."
              margin="dense"
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )}
            />
          </FormControl>
        </ActionContainer>
        <Divider className={classes.marginDivider} />
      </Paper>
    </Container>
  );
}

export default ManageCustomer;

const Container = styled.div`
  margin-top: 70px;
`;

const Title = styled.h1`
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;

const TitleChart = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

const TotalCustomerContainer = styled.div`
  padding: 10px 20px;
`;

const LabelCustomer = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

const LabelChannelCustomer = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  padding-left: 20px;
`;

const LabelValue = styled.div`
  padding: 15px 0;
`;

const Value = styled.span`
  font-size: 14px;
  color: #000000;
`;

const Unit = styled.span`
  color: #9D9D9D;
  font-size: 10px;
  position: absolute;
  transform: scale(1) translate(10%, 0%);
`;

const OnlineColor = styled.div`
  width: 13px;
  height: 10px;
  background-color: #FFE700;
  margin-right: 10px;
  margin-top: 5px;
`;

const OfflineColor = styled.div`
  width: 13px;
  height: 10px;
  background-color: #826AF9;
  margin-right: 10px;
  margin-top: 5px;
`;

const StatusText = styled.span`
  font-size: 14px;
  color: #000000;
`;

const StatusContent = styled.div`
  display: -webkit-box;
  margin-top: 15px;
`;

const ArrowUp = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #4CFA9D;
`;

const ArrowDown = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #ED455C;
`;

const ArrowContent = styled.div`
  display: -webkit-box;
  align-items: center;
`;

const ArrowValue = styled.span`
  font-size: 12px;
  color: #8D9297;
  padding-left: 10px;
`;

const StatusValue = styled.div`
`;

const ActionContainer = styled.div`

`;
