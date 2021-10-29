import { Card, CardMedia, Typography, Avatar, alpha } from '@mui/material';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import testImg from './test.jpg';

const FlowCard = ({ flowID, flowName }) => {
  const openMenu = (e) => {
    console.log('button clicked!');
  };

  return (
    <Card
      sx={{
        width           : '100%',
        height          : '100%',
        borderRadius    : '16px',
        backgroundColor : '#0A9396'
      }}
      variant='outlined'
      borderradius={16}
      block='flex'
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
