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
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DateRangePicker from '../../components/DateRangePicker';
import Data from './product.json';
import product from '../../assets/images/product.svg';

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
  Cardcontent: {
    width: '100%',
    height: 190,
    background: ' #E7EAEC70',
    borderRadius: 20,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  cardProduct: {
    height: 90,
    width: 93,
    borderRadius: 20,
    padding: theme.spacing(1),
  },
  cardtitle: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#22215B',
  },
  cardtext: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  cardtextcolor: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#4E8FF0',
  },
  name: {
    fontfamily: 'Roboto',
    fontSize: 16,
    fontWeight: 800,
    textAlign: 'center',
    color: '#22215B',
    textTransform: 'uppercase',
  },
  id: {
    fontfamily: 'Roboto',
    fontSize: 16,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#4E8FF0',
  },
}));

export default function Product() {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.root}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.ChartContainer}>
          <TitleCard> Average spending</TitleCard>
          <RightContent>
            <DateRangePicker />
          </RightContent>
        </Grid>
        <Divider />
        <Paper className={classes.Cardcontent}>
          {
            Data.map((menuItem) => (
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                  <Card className={classes.cardProduct}>
                    <img src={product} crt="product" />
                  </Card>
                </Grid>
                <Grid item xs={11}>
                  <Grid container style={{ marginBottom: '20px' }}>
                    <Grid xs={3}>
                      <Grid container justifyContent="space-evenly" alignItems="center">
                        <Typography className={classes.name}>
                          {menuItem.Product.NAME}
                        </Typography>
                        <Typography className={classes.id}>
                          {menuItem.Product.ID}
                        </Typography>
                      </Grid>
                      <Divider />
                    </Grid>
                    <Grid xs={9}>
                      <Grid container justifyContent="flex-end" alignItems="flex-en">
                        <Link href="#">
                          View report
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '20px' }}>
                        <Typography className={classes.cardtitle}>
                          NAME
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.NAME}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          ID
                        </Typography>
                        <Typography className={classes.cardtextcolor}>
                          {menuItem.Product.ID}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '15px' }}>
                        <Typography className={classes.cardtitle}>
                          CATEGORIES
                        </Typography>
                        <Typography className={classes.cardtextcolor}>
                          {menuItem.Product.CATEGORIES}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          PROPERTIES
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.PROPERTIES}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '15px' }}>
                        <Typography className={classes.cardtitle}>
                          PRICE
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.PRICE}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          AMOUNT
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.AMOUNT}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '15px' }}>
                        <Typography className={classes.cardtitle}>
                          TOTAL
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.TOTAL}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          STATUS
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.STATUS}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '15px' }}>
                        <Typography className={classes.cardtitle}>
                          STORE
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.STORE}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          AREA
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.AREA}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item lg={2}>
                      <Grid style={{ marginBottom: '15px' }}>
                        <Typography className={classes.cardtitle}>
                          TRANSACTION DATE
                        </Typography>
                        <Typography className={classes.cardtextcolor}>
                          {menuItem.Product.TRANSACTION_DATE}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography className={classes.cardtitle}>
                          PAYMENT METHOD
                        </Typography>
                        <Typography className={classes.cardtext}>
                          {menuItem.Product.PAYMENT_METHOD}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))
          }
        </Paper>
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
