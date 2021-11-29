/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
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
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Connection from '@material-ui/icons/AccountBalanceWallet';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#1D2837',
  },
  nested: {
    padding: theme.spacing(2, 0, 2, 0),
    backgroundColor: '#0B0F14',
  },
  activeMenu: {
    backgroundColor: '#0B0F14',
    color: '#EB5569',
  },
  text: {
    '& .MuiTypography-body1': {
      fontFamily: 'Titillium Web',
      fontSize: 16,
      fontStyle: 'normal',
    },
    color: '#B0B6C6',
  },
  icon: {
    color: '#B0B6C6',
  },
  menuItem: {
    color: 'inherit !important',
    textDecoration: 'none',
  },
}));

export default function NestedList(location) {
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
      path: '/drafts',
      icon: <Connection />,
      items: [{
        key: 'connection', name: 'Source connection', path: '/connection',
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
      icon: <PersonIcon />,
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
  const [open, setOpen] = React.useState(false);
  const handleClick = (key) => {
    console.log(key);
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      {
      MenuList.map((items) => (
        <div>
          <ListItem
            component={Link}
            to={items.path}
            button
            key={items.key}
            onClick={(key) => handleClick(key)}
            className={clsx(classes.menuItem, {
              [classes.activeMenu]: location && location.pathname === items.path,
            })}
          >
            <ListItemIcon className={classes.icon}>
              {items.icon}
            </ListItemIcon>
            <ListItemText className={classes.text}>{items.name}</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse component="li" timeout="auto" unmountOnExit className={classes.nested}>
            <List
              component="div"
              disablePadding
            >
              {items.items.map((sub) => (
                <ListItem
                  button
                  component={Link}
                  to={sub.path}
                >
                  <ListItemText inset primary={sub.name} className={classes.text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))
}
    </List>
  );
}
NestedList.defaultProps = {
  location: undefined,
  children: undefined,
};

NestedList.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.shape({}),
};
