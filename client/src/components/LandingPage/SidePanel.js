import { Button, Typography, Box, alpha, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';

const useStyles = makeStyles(() => {
  return {
    sidePanel   : {
      display : 'flex'
    },
    drawerPaper : {
      backgrounColor : alpha('#000000', 0.17), // color not working, change later
      justifyContent : 'center',
      width          : '30%' // potentially change later
    },
    button      : {
      pb : '20px',
      pt : '20px'
    }
  };
});

const GoogleButton = () => {
  const { loggedIn } = useContext(UserProvider.context);
  const handleGoogle = async () => {
    console.log(loggedIn);
    if (loggedIn) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/auth/google';
    }
  };

  return (
    <Button variant='outlined' onClick={handleGoogle}>
      Log in with Google
    </Button>
  );
};

const SidePanel = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.sidePanel}
      anchor='left'
      variant='permanent'
      classes={{ paper: classes.drawerPaper }}
    >
      <Typography variant='h3' align='center'>
        Welcome to
      </Typography>
      <Typography variant='h3' align='center' sx={{ marginBottom: '50px' }}>
        MadFlow
      </Typography>

      <div align='center'>
        <Box sx={{ pt: '20px', pb: '20px' }}>
          <GoogleButton />
        </Box>
      </div>

      <div align='center'>
        <Box sx={{ pb: '20px' }}>
          <Button component={Link} to='/flow/guest' variant='outlined'>
            Continue as Guest
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default SidePanel;
