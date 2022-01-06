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
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';
import DateRangePicker from '../../components/DateRangePicker';

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
  besttime: {
    color: '#4E8FF0',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  text: {
    color: '#22215B',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  producttype: {
    color: '#EB5569',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  campaignrate: {
    color: '#2DD183',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
  },
}));

export default function Behaviour() {
  const rows = [
    {
      id: 1,
      AVERAGE_TIME: '3.2 hours / day',
      BEST_TIME: '2 p.m / 8 p.m',
      ORDER_CHANNEL: 'Online (website)',
      PRODUCT_TYPE: 'Shoes',
      TIME_TO_BUY: 'Month: 3, 12',
      CAMPAIGN_RATE: '74.12 %',
    },
  ];
  const classes = useStyles();
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      sortable: false,
      width: 70,
    },
    {
      field: 'AVERAGE_TIME',
      headerName: 'AVERAGE TIME',
      width: 190,
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
          <Typography className={classes.text}>
            {params.row.AVERAGE_TIME}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'BEST_TIME',
      headerName: 'BEST TIME ',
      width: 190,
      sortable: false,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.besttime}>
            {params.row.BEST_TIME}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'ORDER_CHANNEL',
      headerName: 'ORDER CHANNEL',
      sortable: false,
      width: 190,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.text}>
            {params.row.ORDER_CHANNEL}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'PRODUCT_TYPE',
      headerName: 'PRODUCT TYPE',
      sortable: false,
      width: 190,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.producttype}>
            {params.row.PRODUCT_TYPE}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'TIME_TO_BUY',
      headerName: 'TIME TO BUY',
      sortable: false,
      width: 190,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.text}>
            {params.row.TIME_TO_BUY}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'CAMPAIGN_RATE',
      headerName: 'CAMPAIGN RATE',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.campaignrate}>
            {params.row.CAMPAIGN_RATE}
          </Typography>
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
          <div style={{ height: 150, width: '100%' }}>
            <DataGrid
              rowHeight={90}
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
const TitleCard = styled.h1`
  margin-bottom: 12px;
  text-transform: uppercase;
  text-align: start;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #505D6F;
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;
