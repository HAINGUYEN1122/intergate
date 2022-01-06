/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import {
  Paper, Grid, Divider,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components/macro';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import CreateIcon from '@material-ui/icons/Create';
// import IconButton from '@material-ui/core/IconButton';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import SearchIcon from '@material-ui/icons/Search';
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
// import CardContent from '@material-ui/core/CardContent';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import { Divider } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import defaultAVT from '../../assets/icons/avatar-default-icon.png';
import { DataGrid } from '@material-ui/data-grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DateRangePicker from '../../components/DateRangePicker';
// import BreadcrumbCustom from '../../components/BreadcrumbCustom';
// import Data from './product.json';
// import product from '../../assets/images/product.svg';
// import { useCheckbox } from '../../hooks/input.hooks';

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
  table: {
    border: 0,
    '& .MuiDataGrid-footerContainer ': {
      display: 'none',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize: 14,
      fontWeight: 400,
      color: '#22215B',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiDataGrid-cell--withRenderer': {
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiDataGrid-cell--textLeft': {
      fontfamily: 'Inter',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 500,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiDataGrid-cell ': {
      border: 0,
    },
  },
  ChartContainer: {
    padding: theme.spacing(1),
  },
  CAMPAIGN: {
    color: '#4E8FF0',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  startdate: {
    color: '#22215B',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
}));
// const theme = createTheme();

export default function Product() {
//   const [open, setOpen] = useState(false);
  const rows = [
    {
      id: 1,
      startdate: '12/06/2021',
      CAMPAIGN: 'Campaign Name 1',
      FIRST_GOAL: 'completed',
      FINAL_GOAL: 'completed',
      OPPOTURNITY: 'completed',
    },
    {
      id: 2,
      startdate: '12/06/2021',
      CAMPAIGN: 'Campaign Name 1',
      FIRST_GOAL: 'completed',
      FINAL_GOAL: 'uncompleted',
      OPPOTURNITY: 'uncompleted',
    },
    // {
    //   id: 3,
    //   startdate: '12/06/2021',
    //   CAMPAIGN: 'Campaign Name 1',
    //   FIRST_GOAL: 'completed',
    //   FINAL_GOAL: 'uncompleted',
    //   OPPOTURNITY: 'uncompleted',
    // },
    // {
    //   id: 4,
    //   startdate: '12/06/2021',
    //   CAMPAIGN: 'Campaign Name 1',
    //   FIRST_GOAL: 'completed',
    //   FINAL_GOAL: 'uncompleted',
    //   OPPOTURNITY: 'uncompleted',
    // },
  ];
  const classes = useStyles();
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      sortable: false,
      width: 80,
    },
    {
      field: 'startdate',
      headerName: 'START DATE',
      width: 240,
      editable: true,
      sortable: false,
      menu: false,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.startdate}>
            {params.row.startdate}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'CAMPAIGN',
      headerName: 'CAMPAIGN',
      width: 240,
      sortable: false,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.CAMPAIGN}>
            {params.row.CAMPAIGN}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'FIRST_GOAL',
      headerName: 'FIRST GOAL',
      sortable: false,
      width: 240,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {params.row.FIRST_GOAL == 'completed' ? <Button style={{ color: '#2DD183' }}><CheckCircleIcon /></Button> : <Button style={{ color: '#ED455C' }}><CheckCircleIcon /></Button> }

        </Grid>
      ),
    },
    {
      field: 'FINAL_GOAL',
      headerName: 'FINAL GOAL',
      sortable: false,
      width: 240,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {params.row.FINAL_GOAL == 'completed' ? <Button style={{ color: '#2DD183' }}><CheckCircleIcon /></Button> : <Button style={{ color: '#ED455C' }}><CheckCircleIcon /></Button> }
        </Grid>
      ),
    },
    {
      field: 'OPPOTURNITY',
      headerName: 'OPPOTURNITY',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {params.row.OPPOTURNITY == 'completed' ? <Button style={{ color: '#2DD183' }}><CheckCircleIcon /></Button> : <Button style={{ color: '#ED455C' }}><CheckCircleIcon /></Button> }
        </Grid>
      ),
    },
  ];
  return (
    <Container>
      <Paper className={classes.root}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.ChartContainer}>
          <TitleCard> REACTION TO MAKETING CAMPAIGNS</TitleCard>
          <RightContent>
            <DateRangePicker />
          </RightContent>
        </Grid>
        <Divider />
        <Grid>
          <div style={{ height: 250, width: '100%' }}>
            <DataGrid
              rowHeight={95}
              rows={rows}
              columns={columns}
              className={classes.table}
              disableSelectionOnClick
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
            />
          </div>
        </Grid>
      </Paper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;
// const Container = styled.div`
//   margin-top: 70px;
// `;

// const Title = styled.h1`
// `;
const TitleCard = styled.h1`
  margin-bottom: 12px;
  text-transform: uppercase;
  text-align: start;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #505D6F;
`;
// const TitleCardSearch = styled.div`
//   text-align: start;
//   margin-bottom: 16px;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 400;
//   color: #4D627A;
// `;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;

// const TitleChart = styled.div`
//   margin: 18px;
//   text-align: start;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   color: #505D6F;
// `;

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
//   width: 29px;
//   height: 25px;
//   background-color: #FFE700;
//   margin-Bottom: 24px;
//   margin-Right: 5px
// `;

// const OfflineColor = styled.div`
//   width: 29px;
//   height: 25px;
//   background-color: #826AF9;
//   margin-Right: 5px
// `;

// const StatusText = styled.span`
//   font-size: 14px;
//   color: #505D6F;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 30px;
//   text-align: center;

// `;

// const StatusContent = styled.div`
//   display: -webkit-box;
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
