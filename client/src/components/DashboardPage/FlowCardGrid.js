import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import FlowCard from './FlowCard';

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
  },
  {
    id       : 5,
    flowName : 'FLOW 5'
  }
];

const FlowCardGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: '20px', ml: '30px', mr: '30px' }}>
      <Grid container spacing={4}>
        {TempFlows.map((flow) => (
          <Grid item xs={6} sm={5} md={3} key={flow.id}>
            <FlowCard flowID={flow.id} flowName={flow.flowName} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlowCardGrid;
