/* eslint-disable no-shadow */
/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CopyCode from '../../assets/images/CopyCode.png';
import PasteCode from '../../assets/images/PasteCode.png';
import DateRangePicker from '../../components/DateRangePicker';
import JavaScriptLogo from '../../assets/images/JavaScriptpreview.png';

const useStyles = makeStyles((theme) => ({
  title: {
    fontfamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 23,
  },
  titlehead: {
    fontfamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
  },
  description: {
    fontfamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
  },
  Setup: {
    width: 112,
    height: 45,
    background: '#1565D8',
    borderadius: 10,
    color: '#FFFFFF',
    margin: theme.spacing(2, 0, 0, 0),
    '&:hover': {
      backgroundColor: '#1565D8',
    },
  },
  copy: {
    width: 82,
    height: 31,
    background: '#EEEEEE',
    borderadius: 6,
    color: '#000000',
    margin: theme.spacing(2, 0, 0, 0),
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
  },
  Cancel: {
    width: 100,
    height: 35,
    background: '#EEEEEE',
    borderadius: 6,
    color: '#000000',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
  },
  Next: {
    width: 100,
    height: 35,
    background: '#1565D8',
    borderadius: 10,
    color: '#FFFFFF',
    margin: theme.spacing(14, 2, 0, 1),
    '&:hover': {
      backgroundColor: '#1565D8',
    },
  },
  Back: {
    width: 100,
    height: 35,
    background: '#EEEEEE',
    borderadius: 6,
    color: '#000000',
    margin: theme.spacing(4, 2, 2, 0),
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
  },
  Complete: {
    width: 100,
    height: 35,
    background: '#1565D8',
    borderadius: 10,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#1565D8',
    },
    margin: theme.spacing(4, 2, 2, 0),
  },
  Close: {
    width: 100,
    height: 35,
    background: '#1565D8',
    borderadius: 10,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#1565D8',
    },
    margin: theme.spacing(11, 2, 2, 0),
  },
  icon: {
    height: 23,
    width: 25,
    color: '#6c757d',
  },
  textField: {
    width: 424,
    background: '#F4F8F9',
    color: '#1565D8',
    '& .MuiOutlinedInput-root': {
      borderRadius: 15,
    },
    marginTop: theme.spacing(2),
  },
  step: {
    '& .MuiButton-label': {
      fontfamily: 'Inter',
      fontsize: 16,
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  },
  Dialog: {
    // height: 440,
    // width: 740,
    '& .MuiDialog-paperWidthSm': {
      height: 440,
      width: 600,
    },
  },
  leftdialog: {
    height: '100%',
    background: '#F2F2F2',
  },
  Container: {
    height: '100%',
  },
  Dialogtitle: {
    fontfamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Steptitle: {
    fontfamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    padding: theme.spacing(2),
  },
  DialogTitle1: {
    padding: theme.spacing(1, 0, 1, 3),
  },
}));

export default function Jsconnection() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClikNext = () => {
    setPage((page) => page + 1);
  };
  const handleClikBack = () => {
    setPage((page) => page - 1);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/sconnection">
              Source connection
            </Link>
            <Link color="inherit" href="/adddatasource">
              Connector
            </Link>
            <Typography color="textPrimary">Connect JavaScript</Typography>
          </Breadcrumbs>
          <Typography className={classes.titlehead}>Connect JavaScript</Typography>
          <Typography className={classes.title}>Set up JavaScript to your website</Typography>
          <Typography className={classes.description}>Just tell us about your domain, and we will generate a snippet for you to easily add to your site.</Typography>
        </Grid>
        <RightContent>
          <DateRangePicker />
        </RightContent>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <TextField
          size="medium"
          label="Your domain"
          id="outlined-end-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end"><CreateIcon className={classes.icon} /></InputAdornment>,
          }}
          variant="outlined"
        />
        <>
          <Button className={classes.Setup} onClick={handleClickOpen}> Set up </Button>
          {page === 1
          && (
            <Dialog
              className={classes.Dialog}
              open={open}
              onClose={handleClose}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                className={classes.Container}
              >
                <Grid
                  xs={4}
                  direction="column"
                  justifyContent="space-around"
                  alignItems="center"
                  className={classes.leftdialog}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                  >
                    <Typography className={classes.Steptitle}>Connect JavaScript</Typography>
                    <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon style={{ color: green[500] }} />}>
                      Step 1: Copy code
                    </Button>
                    <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon />}>
                      Step 2: Paste code
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  xs={8}
                  className={classes.Container}
                >
                  <DialogActions>
                    <Button onClick={handleClose}>
                      <ClearIcon />
                    </Button>
                  </DialogActions>
                  <DialogContent>
                    <Grid
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className={classes.Dialogtitle}>Step 1: Copy code</Typography>
                      <Typography className={classes.Dialogdescription}>Copy and paste the following code to your website</Typography>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      {/* <Typography className={classes.Dialogtitle}>Step 2: Past Code</Typography>
                    <Typography className={classes.Dialogdescription}>Please paste the code after the opening header tag directly on your website</Typography> */}
                      <img src={CopyCode} alt="CopyCode" />
                      <Button className={classes.copy}>
                        COPY
                      </Button>
                    </Grid>
                  </DialogContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Button className={classes.Cancel} onClick={handleClose}>
                      CANCLE
                    </Button>
                    <Button className={classes.Next} onClick={handleClikNext}>
                      NEXT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Dialog>
          )}
          {page === 2
          &&  (
          <Dialog
            className={classes.Dialog}
            open={open}
            onClose={handleClose}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              className={classes.Container}
            >
              <Grid
                xs={4}
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                className={classes.leftdialog}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <Typography className={classes.Steptitle}>Connect JavaScript</Typography>
                  <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon style={{ color: green[500] }} />}>
                    Step 1: Copy code
                  </Button>
                  <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon />}>
                    Step 2: Paste code
                  </Button>
                </Grid>
              </Grid>
              <Grid
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                xs={8}
                className={classes.Container}
              >
                <DialogActions>
                  <Button onClick={handleClose}>
                    <ClearIcon />
                  </Button>
                </DialogActions>
                <DialogContent>
                  <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography className={classes.Dialogtitle}>Step 2: Paste Code</Typography>
                    <Typography className={classes.Dialogdescription}>Please paste the code after the opening header tag directly on your website</Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {/* <Typography className={classes.Dialogtitle}>Step 2: Past Code</Typography>
                    <Typography className={classes.Dialogdescription}>Please paste the code after the opening header tag directly on your website</Typography> */}
                    <img src={PasteCode} alt="PasteCode" />
                  </Grid>
                </DialogContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Button className={classes.Back} onClick={handleClikBack}>
                    BACK
                  </Button>
                  <Button className={classes.Complete} onClick={handleClikNext}>
                    COMPLETE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Dialog>
          )}
          {page === 3
          &&  (
          <Dialog
          // fullWidth={fullWidth}
          // maxWidth={maxWidth}
            page={1}
            className={classes.Dialog}
            open={open}
            onClose={handleClose}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              className={classes.Container}
            >
              <Grid
                xs={4}
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                className={classes.leftdialog}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <Typography className={classes.Steptitle}>Connect JavaScript</Typography>
                  <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon style={{ color: green[500] }} />}>
                    Step 1: Copy code
                  </Button>
                  <Button className={classes.step} startIcon={<CheckCircleOutlineOutlinedIcon style={{ color: green[500] }} />}>
                    Step 2: Paste code
                  </Button>
                </Grid>
              </Grid>
              <Grid
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                xs={8}
                className={classes.Container}
              >
                <DialogActions>
                  <Button onClick={handleClose}>
                    <ClearIcon />
                  </Button>
                </DialogActions>
                <DialogContent>
                  <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography className={classes.Dialogtitle}>Step 2: Paste Code</Typography>
                    <Typography className={classes.Dialogdescription}>Please paste the code after the opening header tag directly on your website</Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {/* <Typography className={classes.Dialogtitle}>Step 2: Past Code</Typography>
                    <Typography className={classes.Dialogdescription}>Please paste the code after the opening header tag directly on your website</Typography> */}
                    <img src={JavaScriptLogo} alt="JavaScriptLogo" />
                    <Typography className={classes.Dialogtitle}>JavaScript has been conntected !</Typography>
                    <Typography className={classes.Dialogdescription}>Check Source connection Table</Typography>
                  </Grid>
                </DialogContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Button className={classes.Back} onClick={handleClikBack}>
                    BACK
                  </Button>
                  <Button className={classes.Close} onClick={handleClose}>
                    CLOSE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Dialog>
          )}
        </>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;
