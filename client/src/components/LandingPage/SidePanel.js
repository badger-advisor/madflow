import { Button, Typography, Box, alpha, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import { signIn } from '../../api';

const useStyles = makeStyles(() => {
  return {
    root      : {
      // idk how this works, but it targets the root of the drawer component
      '& .MuiPaper-root' : {
        backgroundColor : alpha('#FFE2A8', 0.8),
        borderRadius    : '0 15px 15px 0',
        boxShadow       : '2px 5px 5px 0px rgba(0,0,0,0.25);',
        justifyContent  : 'center',
        width           : '30vw'
      }
    },
    sidePanel : {
      display : 'flex'
    },
    button    : {
      pb : '20px',
      pt : '20px'
    }
  };
});

/**
 * if there is no current user, the top button will direct the user
 * to google OAuth
 */
const GoogleButton = () => {
  const handleLogIn = () => {
    window.location.href = '/auth/google';
  };

  return (
    <Button variant='outlined' onClick={handleLogIn}>
      Log in with Google
    </Button>
  );
};

/**
 * If there is a logged in user, the user will be directed to their
 * dashboard
 */
const DashButton = () => {
  return (
    <Button variant='outlined' component={Link} to={'/dashboard'}>
      Continue to Dash
    </Button>
  );
};

const SidePanel = () => {
  const { loggedIn } = useContext(UserProvider.context);
  const classes = useStyles();

  return (
    <Drawer
      className={classes.sidePanel}
      anchor='left'
      variant='permanent'
      classes={{ paper: classes.drawerPaper, root: classes.root }}
    >
      <Typography variant='h3' align='center'>
        Welcome to
      </Typography>
      <Typography variant='h3' align='center' sx={{ marginBottom: '50px' }}>
        MadFlow
      </Typography>

      <div align='center'>
        <Box sx={{ pt: '20px', pb: '20px' }}>{loggedIn ? <DashButton /> : <GoogleButton />}</Box>
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
