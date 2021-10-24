import { Button, Typography, Box, alpha, AppBar, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(() => {
  return {
    navBar      : {
      backgroundColor : alpha('#000000', 0.17)
      //display : 'flex'
    },
    drawerPaper : {
      //backgroundColor : alpha('#000000', 0.17), // color not working, change later
      backgroundColor : 'gray',
      justifyContent  : 'left',
      width           : '100%',
      height          : '50px'
    },
    button      : {
      pb : '20px',
      pt : '20px'
    }
  };
});

const MyDrawer = styled(Drawer)({
  backgroundColor : alpha('#000000', 0.17),
  width           : '100%',
  height          : '50px'
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static'>
        <Typography>hello</Typography>
      </AppBar>
      {/* <Drawer
        className={classes.navBar}
        anchor='top'
        variant='permanent'
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant='h2' align='center'>
          testing
        </Typography>
      </Drawer> */}
    </div>
  );
};

export default NavBar;
