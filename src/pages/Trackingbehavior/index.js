import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Divider,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';

// import CustomerProfile from './CustomerProfile';
// import { Search } from '@material-ui/icons';
// import settings from '../../assets/icons/Settings.svg';
// import cancelFilter from '../../assets/icons/FilterCancel.svg';
// import filter from '../../assets/icons/Filter.svg';
// import expand from '../../assets/icons/Expand.svg';
// import BreadcrumbCustom from '../../components/BreadcrumbCustom';/
import DateRangePicker from '../../components/DateRangePicker';
import StatisticsCard from '../../components/StatisticsCard';

// import getNews from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  des: {
    height: 250,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: 320,
  },
  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
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
  dotComplete: {
    height: 15,
    width: 15,
    color: '#2CD9C5',
  },
  dotCancle: {
    height: 15,
    width: 15,
    color: '#CDFDF1',
  },
  DrMartens: {
    height: 15,
    width: 15,
    color: '#826AF9',
  },
  Replay: {
    height: 15,
    width: 15,
    color: '#FFE700',
  },
  Kappa: {
    height: 15,
    width: 15,
    color: '#2D99FF',
  },
  Superga: {
    height: 15,
    width: 15,
    color: '#2CD9C5',
  },
  Staple: {
    height: 15,
    width: 15,
    color: '#FF6C40',
  },
}));

function Trackingbehavior() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.news);

  useEffect(() => {
    // dispatch(getNews());
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  const optionsDonutChart = {
    chart: {
      renderTo: 'container',
      type: 'pie',
      height: 190,
      width: 200,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Total Order',
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
      text: '(add to cart)',
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
      title: {
        text: 'Total percent market share',
      },
    },
    plotOptions: {
      pie: {
        shadow: false,
        colors: ['#CDFDF1', '#2CD9C5'],
        radius: 19,
      },
    },
    series: [{
      name: 'Odered',
      data: [['Cancel/Pendin', 2400], ['Completed Successfully', 7600]],
      size: '100%',
      innerSize: '75%',
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
  const Top5vistedbrand = {
    chart: {
      renderTo: 'container',
      type: 'pie',
      height: 250,
      width: 185,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: 'Total percent market share',
      },
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>'
            + 'Percentage: <b>{point.y}</b><br/>',
    },
    plotOptions: {
      variablepie: {
        shadow: false,
        allowPointSelect: true,
        cursor: 'pointer',
        // showInLegend: true,
      },
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    series: [{
      name: 'Brand',
      data: [{
        name: 'Dr.Martens',
        y: 2500,
        color: '#826AF9',
        sliced: true,
        selected: true,
      }, {
        name: 'Kappa',
        y: 2500,
        color: '#2D99FF',
      }, {
        name: 'Replay',
        y: 5000,
        color: '#FFE700',
      }, {
        name: 'Superga',
        y: 0,
        color: '#2CD9C5',
      }, {
        name: 'Staple',
        y: 0,
        color: '#FF6C40',
      }],
      size: '100%',
      dataLabels: {
        enabled: true,
        format: '{point.percentage} %',
        distance: -30,
        color: 'Black',
      },
      fontFamily: 'monospace',
      fontSize: '1.2em',
    },
    ],
  };
  const breadcrumbsList = {
    list: [
      { text: 'BI Dashboard', link: '/home' },
      { text: 'Tracking behavior', link: '/home' },
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
        <Title>Customer behaviors</Title>
        <RightContent>
          <DateRangePicker />
        </RightContent>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.headpaper} elevation={3}>
            <StatisticsCard title="Purchased click" value={73} rate={12} type="percent" total="increase" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.headpaper} elevation={3}>
            <StatisticsCard title="Cancel rate" value={27} rate={12} type="percent" total="increase" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.headpaper} elevation={3}>
            <StatisticsCard title="Total visited on site" value={15475} rate={12} total="increase" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.headpaper} elevation={3}>
            <StatisticsCard title="Total time on site" value={566} rate={12} total="decrease" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <TitleChart>Ordered/ Cancel - Pending (add to cart)</TitleChart>
            <Divider />
            <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
              <Grid item>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionsDonutChart}
                />
              </Grid>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <StatusValue>
                  <FiberManualRecordIcon className={classes.dotComplete} />
                  <StatusText>Completed Successfully</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>12% over last month</ArrowValue>
                  </ArrowContent>
                </StatusValue>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.dotCancle} />
                  <StatusText>Cancel/Pending</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>(12% over last month)</ArrowValue>
                  </ArrowContent>
                </StatusValue>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <TitleChart>Top 5 number of visited by brand</TitleChart>
            <Divider />
            <Grid container spacing={3} display="collumn">
              <Grid item lg={7}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={Top5vistedbrand}
                />
              </Grid>
              <Grid item lg={5}>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.DrMartens} />
                  <StatusText>Dr.Martens</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>12% over last month</ArrowValue>
                  </ArrowContent>
                </StatusValue>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.Kappa} />
                  <StatusText>Kappa</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>(12% over last month)</ArrowValue>
                  </ArrowContent>
                </StatusValue>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.Replay} />
                  <StatusText>Replay</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>(12% over last month)</ArrowValue>
                  </ArrowContent>
                </StatusValue>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.Superga} />
                  <StatusText>Superga</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>(12% over last month)</ArrowValue>
                  </ArrowContent>
                </StatusValue>
                <StatusValue>
                  <FiberManualRecordIcon className={classes.Staple} />
                  <StatusText>Staple</StatusText>
                  <ArrowContent>
                    <ArrowUp />
                    <ArrowValue>(12% over last month)</ArrowValue>
                  </ArrowContent>
                </StatusValue>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Trackingbehavior;

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

// const OnlineColor = styled.div`
//   width: 13px;
//   height: 10px;
//   background-color: #FFE700;
//   margin-right: 10px;
//   margin-top: 5px;
// `;

// const OfflineColor = styled.div`
//   width: 13px;
//   height: 10px;
//   background-color: #826AF9;
//   margin-right: 10px;
//   margin-top: 5px;
// `;

const StatusText = styled.span`
  font-size: 14px;
  color: #000000;
`;

// const StatusContent = styled.div`
//   display: -webkit-box;
//   margin-top: 15px;
// `;

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #4CFA9D;
`;

// const ArrowDown = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 7px solid #ED455C;
// `;

const ArrowContent = styled.div`
  display: -webkit-box;
  align-items: center;
  margin-left: 10px;
`;

const ArrowValue = styled.span`
  font-size: 10px;
  color: #8D9297;
  padding-left: 2px;
`;

const StatusValue = styled.div`
  margin-top: 10px;
`;

// const ActionContainer = styled.div`

// `;
