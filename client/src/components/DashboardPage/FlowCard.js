import { Card, CardContent, Typography, Grid } from '@mui/material';

const TempFlows = [
  {
    id       : 1,
    flowName : 'FLOW 1'
  },
  {
    id       : 2,
    flowName : 'FLOW 2'
  },
  {
    id       : 3,
    flowName : 'FLOW 3'
  },
  {
    id       : 4,
    flowName : 'FLOW 4'
  }
];

const FlowCard = () => {
  return (
    <Grid justifyContent='space-between' direction='row'>
      {TempFlows.map((flow) => (
        <Card sx={{ width: 1 / 4, height: 1 / 4, margin: '10px' }}>
          <Typography>{flow.flowName}</Typography>
        </Card>
      ))}
    </Grid>
  );
};

export default FlowCard;
