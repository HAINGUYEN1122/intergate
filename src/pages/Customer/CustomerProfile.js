/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import clsx from 'clsx';
// import ListItemText from '@material-ui/core/ListItemText';
// import Box from '@material-ui/core/Box';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import Carousel from 'react-material-ui-carousel';
// import Carousel from 'react-elastic-carousel';
import Drawer from '@material-ui/core/Drawer';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
// import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import { Divider, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import defaultAVT from '../../assets/icons/avatar-default-icon.png';
import settings from '../../assets/icons/Settings.svg';
import cancelFilter from '../../assets/icons/FilterCancel.svg';
import filter from '../../assets/icons/Filter.svg';
import expand from '../../assets/icons/Expand.svg';
import Data from './CHI PHUONG.json';
import { useCheckbox } from '../../hooks/input.hooks';

const drawerWidth = 400;
const drawerHeight = 'auto';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    background: '#FFFFFFCC',
    padding: theme.spacing(2),
    borderRadius: 20,
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  List: {
    paddingLeft: theme.spacing(3),
  },
  ListItemText: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#22215B',
    marginLeft: theme.spacing(1),
  },
  drawer: {
    // overflowY: 'hidden',
    position: 'relative',
    marginLeft: 'auto',
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      borderRadius: 20,
      height: drawerHeight,
      position: 'absolute',
      padding: theme.spacing(2),
      transition: 'none !important',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  searchdrawer: {
    width: 350,
    height: 32,
    paddingRight: theme.spacing(0),
    margin: theme.spacing(2, 0, 2, 0),
    color: '#94A4B7',
  },
  cardcontent: {
    padding: theme.spacing(2),
  },
  titlecard: {
    fontfamily: 'Inter',
    fontSize: 24,
    fontWeight: 700,
    margin: theme.spacing(2),
  },
  boxsize: {
    width: 1186,
    color: '#979797',
  },
  headercard: {
    margin: theme.spacing(2, 0, 2),
  },
  line: {
    width: 313,
    color: '#979797',
  },
  search: {
    width: 350,
    height: 32,
    paddingRight: theme.spacing(0),
    color: '#94A4B7',
  },
  filter: {
    alignItems: 'center',
    fontfamily: 'Inter',
    fontSize: 15,
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  cardlist: {
    width: 380,
    height: 340,
    borderRadius: 20,
    margin: theme.spacing(2, 3, 2, 2),
  },
  name: {
    fontfamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
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
  },
  sex: {
    color: ' #2074F2',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
  },
  cardtext: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
    padding: theme.spacing(0, 2, 3, 0),
  },
  cardtitle: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#22215B',
  },
  cardtext1: {
    fontfamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#22215B',
  },
  viewmore: {
    color: '#2074F2',
    fontfamily: 'ABeeZee',
    fontSize: 13,
    fontWeight: 400,
    textTransform: 'capitalize',
    padding: theme.spacing(1, 0),
  },
  scrollContent: {
    height: 290,
    overflowY: 'auto',
  },
  datascroll: {
    height: 400,
    overflowY: 'auto',
  },
}));
export default function CustomerProfile() {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const { value: checked, onChange: onChangeChecked } = useCheckbox();
  const handleFilterIconClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Card
        position="fixed"
        className={classes.root}
      >
        <Grid
          container
        >
          <Grid item lg={8}>
            <Button
              startIcon={<img src={settings} alt="Setting" />}
              className={classes.filter}
            >
              Search & filter index
            </Button>
            <Button
              startIcon={<img src={cancelFilter} alt="CancleFilter" />}
              className={classes.filter}
            >
              Cancel filter
            </Button>
            <Button
              startIcon={<img src={filter} alt="Filter" />}
              className={classes.filter}
              onClick={handleFilterIconClick}
            >
              Filter
            </Button>
            <Button
              startIcon={<img src={expand} alt="CancleFilter" />}
              className={classes.filter}
            >
              Expand
            </Button>
          </Grid>
          <Grid item lg={4}>
            <OutlinedInput
              disableUnderline
              className={classes.search}
              id="adornment-weight"
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={<InputAdornment sposition="end"><SearchIcon /></InputAdornment>}
            />
          </Grid>
        </Grid>
        <Divider />
        <Drawer
          open={open}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          variant="persistent"
          anchor="right"
        >
          <Typography className={classes.name}>
            Customer
          </Typography>
          <OutlinedInput
            disableUnderline
            className={classes.searchdrawer}
            id="adornment-weight"
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            endAdornment={<InputAdornment sposition="end"><SearchIcon /></InputAdornment>}
          />
          <Divider />
          <div className={classes.scrollContent}>
            <List className={classes.List}>
              <ListItemText>Country</ListItemText>
              {
                Data.map((data) => (
                  <ListItem>
                    <Grid container>
                      <Grid item lg={1}>
                        <CheckBoxIcon
                          checked={checked}
                          onChange={onChangeChecked}
                          value={data.customer_sources.Country}
                          color="primary"
                        />
                      </Grid>
                      <Grid item lg={11} alignItems="center">
                        <Typography className={classes.ListItemText}>{data.customer_sources.Country}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
                }
            </List>
            <List className={classes.List}>
              <ListItemText>Location</ListItemText>
              {
                Data.map((data) => (
                  <ListItem>
                    <Grid container>
                      <Grid item lg={1}>
                        <CheckBoxIcon
                          checked={checked}
                          onChange={onChangeChecked}
                          value={data.customer_sources.Country}
                          color="primary"
                        />
                      </Grid>
                      <Grid item lg={11} alignItems="center">
                        <Typography className={classes.ListItemText}>{data.customer_sources.City}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
                }
            </List>
          </div>
        </Drawer>
        <Grid container justifyContent="space-between" alignItems="center" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
          <Typography className={classes.titlecard}>
            Customer
          </Typography>
          <Pagination count={10} shape="rounded" />
        </Grid>
        <Grid
          container
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.datascroll}
          >
            {
                Data.map((menuItem) => (
                  <Card className={classes.cardlist}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-end"
                        className={classes.headercard}
                      >
                        {menuItem.avt == '' || 'undefine' ? <img src={defaultAVT} alt="defaultAVT" /> : menuItem.avt }
                        <Grid
                          direction="column"
                        >
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
                      <Divider />
                      <Grid
                        container
                        className={classes.cardcontent}
                      >
                        <Grid direction="column" xs={6}>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              PHONE
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.customer_sources.telephone}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              ADDRESS
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.customer_sources.Address}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              LOCATION
                            </Typography>
                            <Typography className={classes.cardtext1}>
                              {menuItem.customer_address.City}
                              {menuItem.customer_address.Country}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid xs={6} justifyContent="space-between">
                          <Grid>
                            <Typography className={classes.cardtitle}>
                              EMAIL
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.customer_sources.email}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              AGE
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.customer_sources.Date_of_Birth}
                            </Typography>
                          </Grid>
                          <Grid direction="column">
                            <Typography className={classes.cardtitle}>
                              EMPLOYER
                            </Typography>
                            <Typography className={classes.cardtext}>
                              {menuItem.empolyer}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Button className={classes.viewmore}>View more</Button>
                      </Grid>
                    </Grid>
                  </Card>
                ))
          }
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;
