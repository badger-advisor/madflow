import SidePanel from '../components/LandingPage/SidePanel';
import { makeStyles } from '@mui/styles';
import LandingFlow from '../components/LandingPage/LandingFlow';
import { useLocation, useNavigate } from 'react-router-dom';

// size of side bar
const drawerWidth = '30vw';

const useStyles = makeStyles({
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
      background : 'rgb(63,94,251)',
      background : 'linear-gradient(180deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      boxShadow  : '0px 0 5px 0 rgba(0,0,0,0.25);'
    }
  }
});

const Landing = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  if (from) {
    navigate(from, { replace: true });
  }

  return (
    <div className={classes.root}>
      <SidePanel classes={classes} />
      <LandingFlow />
    </div>
  );
};

export default Landing;
