import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Divider,
} from '@material-ui/core';
import styled from 'styled-components/macro';
// import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';
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
    height: 320,
  },
}));

function TopVisitedProducts() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const data = [
    {
      Product: 'Kappa dép quai ngang 351559W ',
      link: '/nam/dep/dep-quai-ngang',
      access_times: '7555',
    },
    {
      Product: 'Replay áo khoác thun nam M3322',
      link: '/nam/ao/ao-khoac-thun',
      access_times: '6457',
    },
    {
      Product: 'Dr. Martens dép nam 21115001',
      link: '/nam/dep/dep-quai-ngang',
      access_times: '5754',
    },
    {
      Product: 'Superga giày cổ cao nữ 121SSWS',
      link: '/nu/giay/giay-cao-co',
      access_times: '5862',
    },
    {
      Product: 'Staple áo khóac jean nam 2102O',
      link: '/nam/ao/ao-khoac',
      access_times: '4569',
    },
  ];

  useEffect(() => {
    // dispatch(getNews());
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  return (
    <Paper className={classes.paper} elevation={3}>
      <TitleChart>Top 5 number of visitor by product</TitleChart>
      <Divider />
      {data.map((menuitem) => (
        <Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid>
              <Title>
                {menuitem.Product}
              </Title>
              <Text>
                {menuitem.link}
              </Text>
            </Grid>
            <Grid>
              <Box>
                {menuitem.access_times}
                <VisitorTime>lượt</VisitorTime>
              </Box>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      ))}
    </Paper>
  );
}

export default TopVisitedProducts;

// const Container = styled.div`
//   margin-top: 70px;
// `;
const Box = styled.div`
  width: 80px;
  height: 35px;
  border: 1px solid #C4C4C4;
  padding: 8px;
  color: #000000;
  font-size: 14px;
  font-style: normal;
  text-align: flex-start;
`;
const Title = styled.h1`
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-style: bold;
  color: #000000;
`;
const Text = styled.h1`
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-weight: normal;
  color: #9D9D9D;
`;
const VisitorTime = styled.span`
  font-size: 8px;
  color: #8D9297;
  font-weight: 400;
  position: absolute;
  transform: scale(1) translate(10%, -30%);
`;
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
