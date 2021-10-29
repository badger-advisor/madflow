import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import SearchNavBar from '../components/GraphPage/SearchNavBar';
import '../components/GraphPage/dnd.css';
import DrawerHeader from '../components/GraphPage/HeaderSpacer';
import Flow from '../components/GraphPage/Flow';
import Sidebar from '../components/GraphPage/Sidebar';

import RecommendBar from '../components/GraphPage/RecommendBar';

import { initialElements } from './initialElements';

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

const Graph = () => {
  const [ openRec, setOpenRec ] = useState(false);
  const [ elements, setElements ] = useState(initialElements);
  const theme = useTheme();

  const handleDrawer = () => {
    setOpenRec(!openRec);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SearchNavBar
        handleDrawer={handleDrawer}
        open={openRec}
        elements={elements}
        setElements={setElements}
      />
      {/* Currently, all of the objects within the Main view are related to showing the ReactFlow elements */}
      <Main open={openRec}>
        <DrawerHeader />
        {/*REACT FLOW VIEW*/}
        <Flow elements={elements} setElements={setElements} />
      </Main>
      <RecommendBar handleDrawer={handleDrawer} open={openRec} />
    </Box>
  );
};

export default Graph;
