import { useState } from 'react';

// components
import FlowCardMenu from './FlowCardMenu';

// material-ui
import { Card, CardMedia, Typography, Avatar, alpha, Menu, MenuItem } from '@mui/material';

// icons and images
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
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
        width           : '100%',
        height          : '100%',
        borderRadius    : '16px',
        backgroundColor : '#0A9396',
        cursor          : 'pointer'
      }}
      variant='outlined'
      borderradius={16}
      block='flex'
      onClick={openFlow}
    >
      {/* FlowCard '...' menu icon */}
      <Avatar // TODO: Move to top right corner of Card
        variant='rounded'
        sx={{
          position        : 'absolute',
          backgroundColor : alpha('#7C7C7C', 0.2),
          zIndex          : 1
        }}
        onClick={openMenu}
      >
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
