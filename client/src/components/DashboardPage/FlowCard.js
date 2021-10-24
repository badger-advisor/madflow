import { Card, CardMedia, CardHeader, Typography, Grid } from '@mui/material';

const FlowCard = ({ flowID, flowName }) => {
  return (
    <Card
      sx={{
        width        : '100%',
        height       : '100%',
        margin       : '10px',
        borderRadius : '16px'
      }}
      variant='outlined'
      borderradius={16}
      block='flex'
    >
      <CardMedia component='img' height='50px' image='/test.png' alt='test image' />
      <div align='center' sx={{ backgroundColor: '#0A9396' }}>
        <Typography>{flowName}</Typography>
      </div>
    </Card>
  );
};

export default FlowCard;
