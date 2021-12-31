import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

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

function OnlineCustomeChart() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const optionsCloumnChart = {
    chart: {
      type: 'column',
      height: 252,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['New visitor', 'Engaged visitor', 'Customer lead',
        'Prospective customer', 'First time customer', 'Repeat customer'],
      labels: {
        style: {
          fontSize: '9px',
          width: '5px',
          height: '30px',
          algin: 'center',
        },
      },
    },
    yAxis: {
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
      column: {
        pointPadding: 0.2,
      },
    },

    legend: {
      enabled: false,
    },

    series: [{
      name: 'Visitor',
      data: [{
        y: 220,
        name: 'New visitor',
        color: '#826AF9',
      },
      {
        y: 342,
        name: 'Engaged visitor ',
        color: '#FFE700',
      },
      {
        y: 710,
        name: 'Customer lead',
        color: '#FF6C40CC',
      },
      {
        y: 1150,
        name: 'Prospective customer',
        color: '#2D99FFCC',
      },
      {
        y: 1344,
        name: 'First time customer',
        color: '#9DA4AECC',
      },
      {
        y: 1678,
        name: 'Repeat customer',
        color: '#2CD9C5CC',
      }],
      dataLabels: {
        enabled: true,
        rotation: 0,
        color: 'black',
        align: 'center',
        format: '{point.y}', // one decimal
      },
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
      <TitleChart>Online Customer Engagement</TitleChart>
      <Grid>
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsCloumnChart}
        />
      </Grid>
    </Paper>
  );
}

export default OnlineCustomeChart;

const TitleChart = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;
