import { Button, Typography, Box, alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => {
  return {
    sidePane : {
      //display         : 'flex',
      backgroundColor : alpha('#000000', 0.17),
      width           : '40%',
      height          : '100%'
    },
    guest    : {
      //backgroundColor : '#AE2012',
      pb : '20px',
      pt : '20px'
      //color2          : '0A9396'
    }
  };
});

const SidePanel = () => {
  const classes = useStyles();
  //className={classes.sidePane}

  return (
    <div className={classes.sidePane}>
      <Typography variant='h3' align='center'>
        Welcome to Mad Flow
      </Typography>

      <div align='center'>
        <Box sx={{ pt: '20px', pb: '20px' }}>
          <Button variant='outlined'>Sign in with Google</Button>
        </Box>
      </div>

      <div align='center'>
        <Box className={classes.guest}>
          <Button component={Link} to='/flow' variant='outlined'>
            Continue as Guest
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SidePanel;
