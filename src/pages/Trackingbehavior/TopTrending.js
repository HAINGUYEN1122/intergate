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
    height: 460,
  },
  scollcontent: {
    height: 390,
    overflowY: 'auto',
  },
}));

function TopTrending() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const data = [
    {
      Product: 'Dr. Martens',
      quantily: '100',
    },
    {
      Product: 'Superga',
      quantily: '90',
    },
    {
      Product: 'Kappa',
      quantily: '234',
    },
    {
      Product: 'Giày thể thao',
      quantily: '97',
    },
    {
      Product: 'Áo khoác gió',
      quantily: '94',
    },
    {
      Product: 'Áo nỉ',
      quantily: '92',
    },
    {
      Product: 'Quần jeans',
      quantily: '98',
    },
    {
      Product: 'Đầm',
      quantily: '90',
    },
    {
      Product: 'Quần shorts thể thao',
      quantily: '92',
    },
    {
      Product: 'Giày lười',
      quantily: '70',
    },
    {
      Product: 'Quần khaki',
      quantily: '89',
    },
    {
      Product: 'Giày cao cổ',
      quantily: '78',
    },
    {
      Product: 'Giày xăng đan',
      quantily: '4569',
    },
    {
      Product: 'Quần khaki',
      quantily: '45',
    },
    {
      Product: 'Chân váy',
      quantily: '78',
    },
    {
      Product: 'Quần thể thao',
      quantily: '97',
    },
    {
      Product: 'Giày sneakers',
      quantily: '67',
    },
    {
      Product: 'Dép kẹp',
      quantily: '15',
    },
    {
      Product: 'Quần shorts thể thao',
      quantily: '78',
    },
    {
      Product: 'Giày lười',
      quantily: '98',
    },
    {
      Product: 'Quần khaki',
      quantily: '78',
    },
    {
      Product: 'Quần shorts thể thao',
      quantily: '63',
    },
    {
      Product: 'Giày lười',
      quantily: '89',
    },
    {
      Product: 'Quần khaki',
      quantily: '4569',
    },
    {
      Product: 'Quần shorts thể thao',
      quantily: '12',
    },
    {
      Product: 'Giày lười',
      quantily: '345',
    },
    {
      Product: 'Quần khaki',
      quantily: '89',
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
      <TitleChart>Top trending</TitleChart>
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.scollcontent}
      >
        {data.map((menuitem) => (
          <Box>
            {menuitem.Product}
            (
            {menuitem.quantily}
            )
          </Box>
        ))}
      </Grid>
    </Paper>
  );
}

export default TopTrending;

// const Container = styled.div`
//   margin-top: 70px;
// `;
const Box = styled.div`
    border-radius: 100px;
    padding: 10px;
    background-Color: #DFDFDF;
    margin: 10px 5px 5px 5px;
    text-align: flex-start;
    font-size: 14px;
    font-style: bold;
    color: #000000;
`;
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
