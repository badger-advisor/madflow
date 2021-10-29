import { Card, CardMedia, Typography, Avatar, alpha } from '@mui/material';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import testImg from './test.jpg';

const FlowCard = ({ flowID, flowName }) => {
  // TODO: function to handle opening the menu when the '...' icon is clicked
  const openMenu = (e) => {
    e.stopPropagation(); // stop openFlow() from being called when menu icon is clicked
    console.log('button clicked!');
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
      <CardMedia component='img' height='80%' image={testImg} alt='test image' />
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
