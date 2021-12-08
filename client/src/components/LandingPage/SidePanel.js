import { Button, Typography, Box, alpha, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import { signIn } from '../../api';

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

const SidePanel = ({ classes }) => {
  const { loggedIn } = useContext(UserProvider.context);
  // const classes = useStyles();

  return (
    <Drawer
      // className={classes.sidePanel}
      // anchor='left'
      // variant='permanent'
      // classes={{ paper: classes.drawerPaper, root: classes.root }}
      className={classes.drawer}
      variant='permanent'
      classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
      anchor='left'
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
