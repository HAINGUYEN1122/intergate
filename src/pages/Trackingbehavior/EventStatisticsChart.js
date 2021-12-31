import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Divider, Grid,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import BreadcrumbCustom from '../../components/BreadcrumbCustom';

// import CustomerProfile from './CustomerProfile';
// import { Search } from '@material-ui/icons';
// import settings from '../../assets/icons/Settings.svg';
// import cancelFilter from '../../assets/icons/FilterCancel.svg';
// import filter from '../../assets/icons/Filter.svg';
// import expand from '../../assets/icons/Expand.svg';
// import BreadcrumbCustom from '../../components/BreadcrumbCustom';/
// import DateRangePicker from '../../components/DateRangePicker';
// import StatisticsCard from '../../components/StatisticsCard';

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
  scollcontent: {
    height: 390,
    overflowY: 'auto',
  },
}));

function EventStatisticsChart() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const optionsCloumnrageChart = {
    chart: {
      type: 'bar',
      height: 252,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Page view', 'Content view', 'Submit contact',
        'Product view', 'Add to cart', 'Checkout', 'First purchase'],
      style: {
        fontSize: 11,
      },
    },

    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: 'view',
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },

    legend: {
      enabled: false,
    },

    series: [{
      name: 'Temperatures',
      data: [{
        y: 220,
        name: 'Page view',
        color: '#826AF9',
      },
      {
        y: 342,
        name: 'Content view',
        color: '#FFE700',
      },
      {
        y: 710,
        name: 'Submit contact',
        color: '#FF6C40CC',
      },
      {
        y: 1150,
        name: 'Product view',
        color: '#2D99FFCC',
      },
      {
        y: 1344,
        name: 'Add to cart',
        color: '#9DA4AECC',
      },
      {
        y: 1678,
        name: 'Checkout',
        color: '#2CD9C5CC',
      },
      {
        y: 1233,
        name: 'First purchase',
        color: '#FFA3B0',
      }],
    }],
  };
  useEffect(() => {
    // dispatch(getNews());
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  return (
    <Paper className={classes.paper} elevation={3}>
      <TitleChart>Event Statistics</TitleChart>
      <Divider />
      <Grid>
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsCloumnrageChart}
        />
      </Grid>
    </Paper>
  );
}

export default EventStatisticsChart;

// const Container = styled.div`
//   margin-top: 70px;
// `;
// const Box = styled.div`
//     border-radius: 100px;
//     padding: 10px;
//     background-Color: #DFDFDF;
//     margin: 10px 5px 5px 5px;
//     text-align: flex-start;
//     font-size: 14px;
//     font-style: bold;
//     color: #000000;
// `;
// const Title = styled.h1`
//   margin-top: 6px;
//   margin-bottom: 6px;
//   text-align: flex-start;
//   font-size: 14px;
//   font-style: bold;
//   color: #000000;
// `;
// const VisitorTime = styled.span`
//   font-size: 8px;
//   color: #8D9297;
//   font-weight: 400;
//   position: absolute;
//   transform: scale(1) translate(10%, -30%);
// `;
// const RightContent = styled.div`
//   display: inherit;
//   align-items: center;
// `;

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

// const StatusText = styled.span`
//   font-size: 14px;
//   color: #000000;
// `;

// const StatusContent = styled.div`
//   display: -webkit-box;
//   margin-top: 15px;
// `;

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
