import React, { useState, useEffect, forceUpdate } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SearchNavBar from '../components/GraphPage/SearchNavBar';
import '../components/GraphPage/dnd.css';
import DrawerHeader from '../components/GraphPage/HeaderSpacer';
import Flow from '../components/GraphPage/Flow';
import Sidebar from '../components/GraphPage/Sidebar';

import RecommendBar from '../components/GraphPage/RecommendBar';

import { initialElements } from './initialElements';

import { removeElements } from 'react-flow-renderer';

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

  // Undo stack consists of a list of all element states
  const [ undo, setUndo ] = useState([ initialElements ]);
  // Each time before the undo stack is popped, the current state added to the redo stack
  const [ redo, setRedo ] = useState([]);

  // localStorage.setItem('elements', JSON.stringify(elements));

  // useEffect(
  //   () => {
  //     localStorage.setItem('elements', JSON.stringify(elements));
  //   },
  //   [ elements ]
  // );

  const handleRedo = () => {
    if (redo.length > 0) {
      setElements(es => es.concat(redo.pop()));
    }
  };
  const handleUndo = () => {
    // undo stack empty
    if (!undo) return;

    // First save the current state
    setRedo(prev => prev.concat([ ...elements ]));

    // Then apply the previous state to the current elements
    let temp = [ ...undo ];
    const newState = [ ...undo ].pop();
    setUndo(temp);
    setElements(newState);
  };

  /**
   * Saves the current snap shor of the elements array into the undo stack
   * @param {Array} newEle The elementes array
   */
  const saveForUndo = newEle => {
    setUndo(prev => undo.concat([ newEle ]));
  };

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
        undo={handleUndo}
        redo={handleRedo}
      />
      {/* Currently, all of the objects within the Main view are related to showing the ReactFlow elements */}
      <Main open={openRec}>
        <DrawerHeader />
        {/*REACT FLOW VIEW*/}
        <Flow
          elements={elements}
          setElements={setElements}
          saveForUndo={saveForUndo}
          // setCurElm={setUndo}
          // setNextElm={setRedo}
          // curElm={undo}
          // nextElm={redo}
        />
      </Main>
      <RecommendBar handleDrawer={handleDrawer} open={openRec} />
    </Box>
  );
};

export default Graph;
