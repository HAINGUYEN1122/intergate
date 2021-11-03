import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import authenticationService from '../../services/authentication';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    color: 'inherit !important',
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const user = authenticationService.currentUserValue;
  const [anchorEl, setAnchorEl] = useState(null);
  const [userProfile] = useState(user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    authenticationService.logout();
  };
  console.log(userProfile);

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <GroupName>
          <Name>{`${userProfile.firstName} ${userProfile.lastName}`}</Name>
          <Position>Data Scientist</Position>
        </GroupName>
        <Avatar>{`${userProfile.firstName[0]}${userProfile.lastName[0]}`}</Avatar>
        <KeyboardArrowDownIcon fontSize="small" style={{ color: '#1e1e1e' }} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem component={Link} to="/login" onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}

const GroupName = styled.div`
  text-transform: none;
`;

const Name = styled.p`
  color: #333333;
  font-size: 12px;
  padding-right: 7px;
  margin: auto;
  text-align: right;
`;

const Position = styled.p`
  color: #666666;
  font-size: 10px;
  padding-right: 7px;
  margin: auto;
  text-align: right;
`;
