import { useState } from 'react';

// components
import FlowCardMenu from './FlowCardMenu';

// material-ui
import { Card, CardMedia, Typography, Avatar, alpha } from '@mui/material';

// icons and images
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import testImg from '../../images/test.jpg';

// Router
import { useNavigate } from 'react-router-dom';

const FlowCard = ({ userID, flowID, flowName, flowMajor, refresh, setRefresh }) => {
  const [ showMenu, setShowMenu ] = useState(null);
  const navigate = useNavigate();

  // function to open the Flow menu
  const openMenu = e => {
    e.stopPropagation(); // stop openFlow() from being called when menu icon is clicked
    console.log('menu clicked!');
    setShowMenu(e.currentTarget);
  };

  // function to open the selected Flow
  const openFlow = () => {
    navigate(`/flow/${flowID}`);
  };

  return (
    <Card
      sx={{
        display         : 'flex',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        width           : '100%',
        height          : '100%',
        borderRadius    : '16px',
        backgroundColor : '#0A9396',
        boxShadow       : '0 8px 40px -12px rgba(0,0,0,0.3)',
        cursor          : 'pointer',
        position        : 'relative',
        maxHeight       : '220px',
        maxWidth        : '220px'
      }}
      variant='outlined'
      onClick={openFlow}
    >
      {/* FlowCard '...' menu icon */}
      <Avatar
        variant='rounded'
        sx={{
          position        : 'absolute',
          right           : '1%',
          top             : '1%',
          backgroundColor : alpha('#7C7C7C', 0)
        }}
        onClick={openMenu}
      >
        {/* <Typography> hello </Typography> */}
        <MoreHorizIcon sx={{ color: 'gray', cursor: 'pointer' }} />
      </Avatar>

      {/* FlowCard menu Popover */}
      <FlowCardMenu
        userID={userID}
        flowID={flowID}
        flowName={flowName}
        flowMajor={flowMajor}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      {/* FlowCard image */}
      <CardMedia component='img' height='80%' image={testImg} alt='test image' />

      {/* Flow name */}
      <Typography
        sx={{
          height         : '20%',
          color          : 'white',
          display        : 'flex',
          justifyContent : 'center',
          flexDirection  : 'column',
          alignItems     : 'center'
        }}
      >
        {flowName}
      </Typography>
    </Card>
  );
};

export default FlowCard;
