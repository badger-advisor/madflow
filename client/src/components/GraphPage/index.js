import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import Flow from './Flow'

import './dnd.css';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for ReactFlow view to be below the app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Graph() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: '#c5050c' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ marginRight: 4 }} component="div">
            MadFlow
          </Typography>
          <Searchbar />
          <Box sx={{ flexGrow: 1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
          sx={{ marginRight: 2, marginLeft: 2 }}
          color="inherit"
          edge="end"
          >
          <UndoIcon fontSize='mid'/>
          </IconButton >
          <IconButton
          sx={{ marginRight: 2, marginLeft: 2 }}
          color="inherit"
          edge="end"
          >
          <RedoIcon fontSize='mid'/>
          </IconButton >
          <IconButton
          sx={{ marginRight: 2, marginLeft: 2 }}
          color="inherit"
          edge="end"
          >
          <AccountCircleRoundedIcon fontSize='large'/>
          </IconButton >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }), marginLeft: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
      {/* Currently, all of the objects within the Main view are related to showing the ReactFlow elements */}
      <Main open={open}>
      <DrawerHeader/>
      {/*REACT FLOW VIEW*/}
       <Flow/>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography>Suggested Courses</Typography>
        </DrawerHeader>
        <Divider />
        <Typography align='center'>Drag & drop into your Flow</Typography>
        <Divider />
        <Sidebar/>
        <Divider />
      </Drawer>
    </Box>
  );
}
