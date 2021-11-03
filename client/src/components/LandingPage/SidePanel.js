import { Button, Typography, Box, alpha, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import {signIn, signUp} from '../../api/authAPI';
import Cookie from 'js-cookie';
import { GoogleLogin } from 'react-google-login';

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

  const onGoogleSuccess = async (response) => {
    const google_id = response.googleId;
    console.log(response);
    const cur_user = await signIn(google_id);
    console.log('current user:');
    console.log(cur_user);
    if(cur_user == ''){
      const new_user = await signUp(response.profileObj);
      console.log('created new user');
      console.log(new_user);
      if(new_user != ''){
        window.location.href = '/dashboard';
      }
    }else{
      window.location.href = '/dashboard';
    }
  }

  const onGoogleFailure = (error) => {console.log('error');console.log(error);}


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
          <GoogleLogin 
            clientId={'496579389191-tq2slttd9a2qq0n3cp022g5u5laav8mk.apps.googleusercontent.com'}
            buttonText="Sign in with Google"
            onSuccess={onGoogleSuccess}
            onFailure={onGoogleFailure}
            className="google-login-button" />
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
