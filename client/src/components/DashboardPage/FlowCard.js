import { Card, CardMedia, CardHeader, Typography, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import testImg from './test.jpg';

const FlowCard = ({ flowID, flowName }) => {
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
      <div align='center'>
        <CardMedia component='img' height='50%' image={testImg} alt='test image' />
        <Typography
          sx={{
            height         : '75px',
            color          : 'white',
            display        : 'flex',
            justifyContent : 'center',
            flexDirection  : 'column'
          }}
        >
          {flowName}
        </Typography>
      </div>
    </Card>
  );
};

export default FlowCard;
