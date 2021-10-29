import { useState } from 'react';

// components
import FlowCardMenu from './FlowCardMenu';

// material-ui
import { Card, CardMedia, Typography, Avatar, alpha, Box } from '@mui/material';

// icons and images
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import testImg from './test.jpg';

const FlowCard = ({ flowID, flowName }) => {
  const [ showMenu, setShowMenu ] = useState(null);

  const openMenu = (e) => {
    e.stopPropagation(); // stop openFlow() from being called when menu icon is clicked
    console.log('menu clicked!');
    setShowMenu(e.currentTarget);
  };

  // TODO: function to handle opening a Flow when the FlowCard is clicked
  const openFlow = (e) => {
    console.log('FlowCard clicked');
  };

  return (
    <Card
      sx={{
        display         : 'flex',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        //alignItems      : 'flex-end',
        width           : '100%',
        height          : '100%',
        borderRadius    : '16px',
        backgroundColor : '#0A9396',
        boxShadow       : '0 8px 40px -12px rgba(0,0,0,0.3)',
        cursor          : 'pointer'
      }}
      variant='outlined'
      onClick={openFlow}
    >
      {/* FlowCard '...' menu icon */}
      <Avatar // TODO: Move to top right corner of Card
        variant='rounded'
        sx={{
          //display         : 'flex',
          //flexGrow        : 1,
          //width           : '25%',
          //justifyContent  : 'center',
          //alignItems      : 'right',
          position        : 'absolute',
          //right           : 5,
          //top             : 5,
          backgroundColor : alpha('#7C7C7C', 0)
          //ml              : '20%'
        }}
        onClick={openMenu}
      >
        {/* <Typography> hello </Typography> */}
        <MoreHorizIcon sx={{ color: 'gray', cursor: 'pointer' }} />
      </Avatar>

      {/* FlowCard menu Popover */}
      <FlowCardMenu showMenu={showMenu} setShowMenu={setShowMenu} />

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
