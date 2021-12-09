/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Connection from '@material-ui/icons/AccountBalanceWallet';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SwapVertIcon from '@material-ui/icons/SwapVert';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  submenuitem: {
    backgroundColor: '#0B0F14',
  },
  subtext: {
    color: '#B0B6C6',
    '& .MuiTypography-body1': {
      fontFamily: 'Titillium Web',
      fontSize: 16,
      fontStyle: 'normal',
    },
  },
  text: {
    margin: theme.spacing(1),
    '& .MuiTypography-body1': {
      fontFamily: 'Titillium Web',
      fontSize: 16,
      fontStyle: 'normal',
    },
    color: '#B0B6C6',
  },
  icon: {
    color: '#B0B6C6',
    paddingRight: theme.spacing(0),
  },
  menuItem: {
    '&:hover': {
      backgroundColor: '#0B0F14',
    },
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  activeMenu: {
    color: '#EB5569',
    backgroundColor: '#0B0F14',
  },
  hoverMenu: {
    '&:hover': {
      color: '#EB5569',
    },
  },
  subactiveMenu: {
    '&:hover': {
      backgroundColor: '#EB5569',
      color: '#FFFFFF',
    },
  },
}));

export default function MenuSidebarList({ location, openDrawer }) {
  const MenuList = [
    {
      key: 'dashboard',
      name: 'BI dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />,
      items: [
        {
          key: 'information',
          name: 'General information',
          path: '/dashboard',
        },
        {
          key: 'behavior',
          name: 'Tracking behavior',
          path: '/dashboard',
        },
        {
          key: 'report',
          name: 'Marketing report',
          path: '/dashboard',
        },
      ],
    },
    {
      key: 'connection',
      name: 'Source connection',
      path: '/sconnection',
      icon: <Connection />,
      items: [{
        key: 'connection', name: 'Source connection', path: '/sconnection',
      }],
    },
    {
      key: 'profile',
      name: 'Profile',
      path: '/profile',
      icon: <SendIcon />,
      items: [
        {
          key: 'manage_customer',
          name: 'Manage customer',
          path: '/manage_customer',
        },
        {
          key: 'customer_profile',
          name: 'Customer profile',
          path: '/customer_profile',
        },
        {
          key: 'customer_clustering',
          name: 'Customer clustering',
          path: '/customer_clustering',

        },
      ],
    },
    {
      key: 'campaign',
      name: 'Campaign',
      path: '/campaign',
      icon: <SwapVertIcon />,
      items: [
        {
          key: 'Campaign',
          name: 'Campaign',
          path: '/Campaign',
        },
      ],
    },
    {
      key: 'account_security',
      name: 'Account & Security',
      path: '/account_security',
      icon: <PersonIcon />,
      items: [
        {
          key: 'all_user',
          name: 'All user',
          path: '/all_user',
        },
        {
          key: 'account_setting',
          name: 'Account Setting',
          path: '/account_setting',
        },
        {
          key: 'security',
          name: 'Security',
          path: '/security',
        },
        {
          key: 'role_permission',
          name: 'Role & Permission',
          path: '/Role & Permission',
        },
      ],
    },
  ];
  const classes = useStyles();
  // const [close, setClose] = React.useState(true);
  const [key, setKey] = React.useState('');
  const handleClick = (keyMenu) => {
    if (keyMenu === key) {
      setKey('');
    } else {
      setKey(keyMenu);
    }
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      {
      MenuList.map((items) => {
        const open = key === items.key && openDrawer;
        return (
          <div>
            <ListItem
              component={Link}
              to={items.path}
              button
              key={items.key}
              onClick={() => handleClick(items.key)}
              className={clsx(classes.menuItem, {
                [classes.activeMenu]: location && location.pathname === items.path,
              })}
            >
              <ListItemIcon className={clsx(classes.icon, classes.hoverMenu, {
                [classes.activeMenu]: location && location.pathname === items.path,
              })}
              >
                {items.icon}
              </ListItemIcon>
              <ListItemText className={clsx(classes.text, classes.hoverMenu, {
                [classes.activeMenu]: location && location.pathname === items.path,
              })}
              >
                {items.name}
              </ListItemText>
              {open ? (
                <ExpandLess className={clsx(classes.icon, classes.hoverMenu, {
                  [classes.activeMenu]: location && location.pathname === items.path,
                })}
                />
              ) : (
                <ExpandMore className={clsx(classes.icon, classes.hoverMenu, {
                  [classes.activeMenu]: location && location.pathname === items.path,
                })}
                />
              )}
            </ListItem>
            <Collapse in={open} component="li" timeout="auto" unmountOnExit className={classes.nested}>
              <List
                component="div"
                disablePadding
              >
                {items.items.map((sub) => (
                  <ListItem
                    button
                    component={Link}
                    to={sub.path}
                    className={clsx(classes.submenuitem, classes.subactiveMenu)}
                  >
                    <ListItemText inset primary={sub.name} className={clsx(classes.subtext, classes.subactiveMenu)} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        );
      })
}
      <ListItem
        component={Link}
        button
        className={classes.menuItem}
      >
        <ListItemIcon className={clsx(classes.icon, classes.hoverMenu)}>
          <DoubleArrowIcon />
        </ListItemIcon>
        <ListItemText className={clsx(classes.text, classes.hoverMenu)}>Log out</ListItemText>
      </ListItem>
    </List>

  );
}
MenuSidebarList.defaultProps = {
  location: undefined,
  openDrawer: false,
};

MenuSidebarList.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  openDrawer: PropTypes.bool,
};
