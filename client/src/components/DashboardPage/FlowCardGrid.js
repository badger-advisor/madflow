import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

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

const FlowCardGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: '30px' }}>
      <Grid container spacing={2}>
        {TempFlows.map((flow) => (
          <Grid item xs={2} sm={4} md={4} key={flow.id}>
            <Card
              sx={{
                width  : 1,
                height : 1,
                margin : '10px'
              }}
            >
              <Typography>{flow.flowName}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlowCardGrid;
