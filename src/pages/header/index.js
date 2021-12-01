import React, { useState } from 'react';
import clsx from 'clsx';
// import styled from 'styled-components/macro';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import TreeView from '@material-ui/lab/TreeView';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import TreeItem from '@material-ui/lab/TreeItem';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import List from '@material-ui/core/List';
// import StarBorder from '@material-ui/icons/StarBorder';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PersonIcon from '@material-ui/icons/Person';
// import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NestedList from './NestedList';
import Logo from '../../assets/images/logo.png';
import MenuProfile from './MenuProfile';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  Itemicon: {
    width: 40,
    height: 40,
  },
  toolbarhead: {
    display: 'flex',
    alignItems: 'center',
    background: '#EB5569',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  Toolbar: {
    padding: '0px 0px 0px 0px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#ffffff',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    borderRadius: 0,
    color: '#FFFFFF ',
    marginLeft: 0,
    width: 65,
    height: 65,
    background: '#EB5569',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: '#1D2837',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: '#1D2837',
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
    height: 55,
  },
  menuItem: {
    color: '#505F75',
    textDecoration: 'none',
  },
}));

export default function MiniDrawer({ children, location }) {
  console.log('location:', location);
  const classes = useStyles();
  const theme = createTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.Toolbar}>
            <Grid container>
              <Grid
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                item
                xs={8}
              >
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
                <img src={Logo} alt="logo" />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                xs={4}
              >
                <IconButton aria-label="show 1 new notifications" style={{ marginRight: 20, color: '#1e1e1e' }}>
                  <Badge badgeContent={1} color="Error">
                    <NotificationsIcon style={{ color: '#AFB6C7' }} />
                  </Badge>
                </IconButton>
                <MenuProfile />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
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
        >
          <div className={classes.toolbarhead}>
            <IconButton
              onClick={handleDrawerClose}
              className={classes.menuButton}
            >
              {theme.direction === 'rtl'}
              <MenuIcon />
            </IconButton>
          </div>
          <Divider />
          <NestedList />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            {children}
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}

MiniDrawer.defaultProps = {
  location: undefined,
  children: undefined,
};

MiniDrawer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.shape({}),
};
