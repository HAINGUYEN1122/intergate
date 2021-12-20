/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';
import Filter from '../../assets/icons/Vector.svg';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import JavaScriptLogo from '../../assets/images/JavaScriptLogo.png';
// import GoogleAnalyticsLogo from '../../assets/images/GoogleAnalyticsLogo.png';
// import FacebookInsightLogo from '../../assets/images/FacebookLogo.png';
// import InstagramInsightsLogo from '../../assets/images/InstagramLogo.png';
// import DatabaseLogo from '../../assets/images/DatabaseLogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDataGrid-root': {
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontfamily: 'Inter',
      fontSize: 14,
      fontWeight: 600,
      color: '#6E6893',
      textAlign: 'left',
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      background: '#F2F9FF',
    },
    '& .MuiDataGrid-footerContainer': {
      background: '#F2F9FF',
      '& .MuiDataGrid-selectedRowCount': {
        fontfamily: 'Inter',
        fontSize: 12,
        fontStyle: 'uppercase',
        fontWeight: 600,
        color: '#6E6893',
        textAlign: 'left',
      },
    },
    '& .MuiDataGrid-cell--textLeft': {
      fontfamily: 'Inter',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 500,
      textAlign: 'left',
    },
    '& .MuiTablePagination-caption': {
      fontfamily: 'Inter',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 700,
      textAlign: 'left',
      background: '#E6E6F2',
      color: '#4A4AFF',
    },
  },
  title: {
    fontfamily: 'Inter',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 700,
    color: '#8B83BA',
    textAlign: 'left',
    margin: theme.spacing(2, 0, 2, 0),
  },
  boxtext: {
    fontfamily: 'Inter',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 500,
    color: '#25213B',
    textAlign: 'left',
    marginTop: theme.spacing(1),
  },
  filter: {
    width: 112,
    height: 45,
    borderadius: 6,
    margin: theme.spacing(2, 1, 4, 0),
    color: '#1565D8',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  titlebox: {
    fontfamily: 'Inter',
    fontSize: 20,
    color: '#25213B',
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: 'left',
  },
  desbox: {
    fontfamily: 'Inter',
    fontSize: 18,
    color: '#25213B',
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'left',
    margin: theme.spacing(2, 0, 0, 2),
  },
  search: {
    width: 445,
    height: 45,
    borderadius: 6,
    margin: theme.spacing(2, 0, 4, 0),
    background: '#F2F9FF',
    color: '#1565D8',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  delete: {
    width: 112,
    height: 41,
    margin: theme.spacing(2),
    background: '#D81C1C',
    color: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D81C1C',
    '&:hover': {
      background: '#D81C1C',
    },
  },
  email: {
    fontfamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'left',
    color: '#6E6893',
  },
  active: {
    width: 75,
    height: 20,
    borderRadius: 10,
    fontfamily: 'Inter',
    fontSize: 12,
    textTransform: 'capitalize',
    fontWeight: 500,
    textAlign: 'left',
    background: '#E6E6F2',
    color: '#4A4AFF',
  },
  inactive: {
    width: 75,
    height: 20,
    borderRadius: 10,
    fontfamily: 'Inter',
    textTransform: 'capitalize',
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'left',
    background: '#F2F0F9',
    color: '#6E6893',
  },
  showmore: {
    width: 100,
    height: 24,
    fontfamily: 'Inter',
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'left',
    color: '#6E6893',
    textTransform: 'capitalize',
    padding: theme.spacing(1),
    justifyContent: 'none',
  },
  new: {
    width: 112,
    height: 41,
    margin: theme.spacing(2, 2, 2, 0),
    background: '#007F00',
    color: '#FFFFFF',
    '&:hover': {
      background: '#007F00',
    },
  },
  boxsize: {
    width: '100%',
    color: '#979797',
  },
}));
const theme = createTheme();

export default function Allusers() {
  const classes = useStyles();
  const rows = [
    {
      id: 1,
      status: 'Active',
      lastlogin: 'Last login: 14/APR/2020',
      role: 'Admin',
      name: 'Lannister',
      email: 'example@email.com',
      permission: 'Restrict',
    },
    {
      id: 2, name: 'Lannister', email: 'example@email.com', status: 'Active', lastlogin: 'Last login: 14/APR/2020', role: 'Admin', permission: 'Restrict',
    },
    {
      id: 3, name: 'Lannister', email: 'example@email.com', status: 'InActive', lastlogin: 'Last login: 14/APR/2020', role: 'Viewer', permission: 'Not restrict',
    },
    {
      id: 4, name: 'Stark', email: 'example@email.com', status: 'Inactive', lastlogin: 'Last login: 14/APR/2020', role: 'Viewer', permission: 'Not restrict',
    },
    {
      id: 5, name: 'Targaryen', email: 'example@email.com', status: 'Inactive', lastlogin: 'Last login: 14/APR/2020', role: 'Marketer', permission: 'Not restrict',
    },
    {
      id: 6, name: 'Melisandre', email: 'example@email.com', status: 'Active', lastlogin: 'Last login: 14/APR/2020', role: 'Manager', permission: 'Not restrict',
    },
    {
      id: 7, name: 'Clifford', email: 'example@email.com', status: 'Active', lastlogin: 'Last login: 14/APR/2020', role: 'Manager', permission: 'Not restrict',
    },
    {
      id: 8, name: 'Frances', email: 'example@email.com', status: 'Active', lastlogin: 'Last login: 14/APR/2020', role: 'Manager', permission: 'Not restrict',
    },
    {
      id: 9, name: 'Roxie', email: 'example@email.com', status: 'Active', lastlogin: 'Last login: 14/APR/2020', role: 'Admin', permission: 'Not restrict',
    },
  ];
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'name',
      headerName: 'NAME',
      width: 270,
      editable: true,
      renderCell: (params) => (
        <Grid>
          <Typography>
            {params.row.name}
          </Typography>
          <Typography className={classes.email}>
            {params.row.email}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'status',
      headerName: 'USER STATUS',
      width: 270,
      renderCell: (params) => (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Button className={params.row.status == 'Active' ? classes.active : classes.inactive} startIcon={<FiberManualRecordIcon style={{ fontSize: 'small' }} />}>
            {params.row.status == 'Active' ? 'Active' : 'Inactive'}
          </Button>
          <Typography className={classes.email}>
            {params.row.lastlogin}
          </Typography>
        </Grid>
      ),
    },
    {
      field: 'role',
      headerName: 'ROLE',
      width: 250,
    },
    {
      field: 'permission',
      headerName: 'PERMISSION',
      width: 200,
    },
    {
      field: 'ACTION',
      headerName: '',
      width: 200,
      renderCell: () => (
        <Button
          endIcon={<MoreVertIcon />}
          className={classes.showmore}
        >
          View more
        </Button>
      ),
    },
    {
      field: 'role',
      headerName: 'ROLE',
      type: 'string',
      width: 200,
      editable: true,
    },
  ];
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/sconnection">
              Account & Security
            </Link>
            <Typography color="textPrimary">All users </Typography>
          </Breadcrumbs>
          <Typography
            className={classes.title}
          >
            All the users
          </Typography>
          <Grid
            container
            alignItems="flex-start"
          >
            <Box borderBottom={1} className={classes.boxtext}>
              All
            </Box>
            <Box className={classes.boxsize} borderBottom={1} borderColor="grey.500" />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid
              xs={6}
            >
              <Button
                variant="outlined"
                startIcon={<img src={Filter} alt="filter" />}
                className={classes.filter}
                color="primary"
              >
                Filter
              </Button>
              <OutlinedInput
                disableUnderline
                className={classes.search}
                id="adornment-weight"
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                startAdornment={<InputAdornment sposition="start"><SearchIcon /></InputAdornment>}
              />
            </Grid>
            <Grid>
              <Button
                variant="outlined"
                className={classes.delete}
              >
                DELETE
              </Button>
              <Button
                variant="outlined"
                className={classes.new}
              >
                NEW
              </Button>
            </Grid>
          </Grid>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              className={classes.root}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

// const Title = styled.h1`
// `;

// const RightContent = styled.div`
//   display: inherit;
//   align-items: center;
// `;
