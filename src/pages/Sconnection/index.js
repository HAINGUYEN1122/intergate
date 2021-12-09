import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import DateRangePicker from '../../components/DateRangePicker';
import Filter from '../../assets/icons/Vector.svg';
import Overview from './Overview';

const useStyles = makeStyles((theme) => ({
  Add: {
    margin: theme.spacing(0, 1, 4, 0),
    width: 250,
    height: 45,
    background: '#2DD183',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#2DD183',
    },
  },
  Remove: {
    width: 112,
    height: 45,
    background: '#EB5569',
    borderadius: 6,
    color: '#FFFFFF',
    margin: theme.spacing(0, 1, 4, 0),
  },
  filter: {
    width: 112,
    height: 45,
    borderadius: 6,
    margin: theme.spacing(0, 1, 4, 0),
    color: '#1565D8',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  textField: {
    width: 188,
    height: 37,
    background: '#F2F9FF',
    borderradius: 6,
    color: '#1565D8',
  },
}));

export default function Sconnection() {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography color="textPrimary">Source connection</Typography>
          <Title>Overview</Title>
        </Grid>
        <RightContent>
          <DateRangePicker />
        </RightContent>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Button
          className={classes.Add}
          variant="text"
          href="/adddatasource"
        >
          Add data connection
        </Button>
        <Button className={classes.Remove}> REMOVE </Button>
        <Button
          variant="outlined"
          startIcon={<img src={Filter} alt="filter" />}
          className={classes.filter}
          color="primary"
        >
          Filter
        </Button>
        <TextField
          size="small"
          label="Find data source"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
          variant="outlined"
        />
      </Grid>
      <Overview />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

const Title = styled.h1`
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;
