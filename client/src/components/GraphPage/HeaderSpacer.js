import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display        : 'flex',
  alignItems     : 'center',
  padding        : theme.spacing(0, 1),
  // necessary for ReactFlow view to be below the app bar
  ...theme.mixins.toolbar,
  justifyContent : 'flex-start'
}));

export default DrawerHeader;
