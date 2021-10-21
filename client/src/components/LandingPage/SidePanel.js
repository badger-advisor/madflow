import { Button, Typography, Box, alpha, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => {
  return {
    sidePanel   : {
      //backgroundColor : alpha('#000000', 0.17),
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
        Welcome to Mad Flow
      </Typography>

      <div align='center'>
        <Box sx={{ pt: '20px', pb: '20px' }}>
          <Button variant='outlined'>Sign in with Google</Button>
        </Box>
      </div>

      <div align='center'>
        <Box sx={{ pb: '20px' }}>
          <Button component={Link} to='/flow' variant='outlined'>
            Continue as Guest
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default SidePanel;
