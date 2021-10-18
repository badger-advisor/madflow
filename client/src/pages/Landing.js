import { Button, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    root     : {
      display         : 'flex',
      backgroundColor : '#f7f7f7',
      width           : '100%',
      height          : '100%'
    },
    sidePane : {
      display         : 'flex',
      backgroundColor : '#f7f7f7',
      //alpha('000000', 0.17)
      width           : '300px',
      height          : '100%'
    },
    guest    : {
      backgroundColor : 'AE2012',
      color2          : '0A9396'
    }
  };
});

const Landing = () => {
  const classes = useStyles();
  //className={classes.sidePane}
  return (
    <div>
      <Typography variant='h3' align='center'>
        Welcome to Mad Flow
      </Typography>
      <Button variant='outlined'>Sign in with Google</Button>
    </div>
  );
};

export default Landing;
