import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  label: {
    fontSize: 12,
    color: '#797979',
  },
  labelActive: {
    fontSize: 12,
    color: '#000000',
  },
}));

export default function BreadcrumbCustom({ breadcrumbsList }) {
  const classes = useStyles();

  return (
    <Breadcrumbs separator={<NavigateNextIcon htmlColor="#AFB6C7" fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbsList.list.map((item) => (
        <Link className={classes.label} color="inherit" href={item.link}>
          {item.text}
        </Link>
      ))}
      <Typography className={classes.labelActive} color="textPrimary">{breadcrumbsList.active}</Typography>
    </Breadcrumbs>
  );
}

BreadcrumbCustom.propTypes = {
  breadcrumbsList: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
    active: PropTypes.string.isRequired,
  }).isRequired,
};
