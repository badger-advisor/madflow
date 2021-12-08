import SidePanel from '../components/LandingPage/SidePanel';
import { makeStyles } from '@material-ui/core';
import LandingFlow from '../components/LandingPage/LandingFlow';

const drawerWidth = '30vw';

const useStyles = makeStyles({
  paper       : {},
  page        : {
    background : '#f9f9f9',
    width      : '100%'
  },
  root        : {
    display : 'flex'
  },
  drawer      : {
    width : drawerWidth
  },
  drawerPaper : {
    width          : drawerWidth,
    borderRadius   : '0 15px 15px 0',
    justifyContent : 'center'
  },
  drawerRoot  : {
    '& .MuiPaper-root' : {
      // backgroundColor : 'rgba(129, 233, 255, 0.8)',
      background : 'rgb(63,94,251)',
      background : 'linear-gradient(180deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      boxShadow  : '0px 0 5px 0 rgba(0,0,0,0.25);'
    }
  }
});

const LandingFlowx = () => {
  return (
    <div style={{ width: '100%', height: '100vh', padding: '0', margin: '0' }}>
      <LandingFlow />
    </div>
  );
};

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SidePanel classes={classes} />
      <LandingFlowx />
    </div>
  );
};

export default Landing;
