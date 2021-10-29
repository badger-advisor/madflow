import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sidebar from './Sidebar';
import Flow from './Flow';
import SearchNavBar from './SearchNavBar/SearchNavBar';
import './dnd.css';
import DrawerHeader from './HeaderSpacer';

export const RECOMMEND_BAR_WIDTH = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  flexGrow    : 1,
  padding     : theme.spacing(0),
  transition  : theme.transitions.create('margin', {
    easing   : theme.transitions.easing.sharp,
    duration : theme.transitions.duration.leavingScreen
  }),
  marginRight : -RECOMMEND_BAR_WIDTH,
  ...(open && {
    transition  : theme.transitions.create('margin', {
      easing   : theme.transitions.easing.easeOut,
      duration : theme.transitions.duration.enteringScreen
    }),
    marginRight : 0
  })
}));

export default function Graph() {
  const theme = useTheme();
  const [ open, setOpen ] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SearchNavBar handleDrawer={handleDrawer} open={open} />
      {/* Currently, all of the objects within the Main view are related to showing the ReactFlow elements */}
      <Main open={open}>
        <DrawerHeader />
        {/*REACT FLOW VIEW*/}
        <Flow />
      </Main>
      <Drawer
        sx={{
          width                : RECOMMEND_BAR_WIDTH,
          flexShrink           : 0,
          '& .MuiDrawer-paper' : {
            width : RECOMMEND_BAR_WIDTH
          }
        }}
        variant='persistent'
        anchor='right'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography>Suggested Courses</Typography>
        </DrawerHeader>
        <Divider />
        <Typography align='center'>Drag & drop into your Flow</Typography>
        <Divider />
        <Sidebar />
        <Divider />
      </Drawer>
    </Box>
  );
}
