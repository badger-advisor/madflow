import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import '../components/GraphPage/dnd.css';
import Flow from '../components/GraphPage/Flow';
import SearchNavBar from '../components/GraphPage/SearchNavBar';
import DrawerHeader from '../components/GraphPage/HeaderSpacer';
import RecommendBar from '../components/GraphPage/RecommendBar';

// TODO initialElements to be replaced with fetched elements from DB
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
  // All of the data for the Flow
  // TODO initialElements to be replaced with fetched elements from DB
  const [ elements, setElements ] = useState(initialElements);

  // Undo stack consists of a list of all element states
  const [ undo, setUndo ] = useState([ initialElements ]);
  // Each time before the undo stack is popped, the current state added to the redo stack
  const [ redo, setRedo ] = useState([]);

  // for making sure the elements array update each time undo or redo is applied
  useEffect(
    () => {
      setElements(undo[undo.length - 1]);
    },
    [ undo ]
  );

  /**
   * Set function called each time redo is applied
   */
  const handleRedo = () => {
    // Redo base is 0 because there should be nothing in there until user undos
    if (redo.length === 0) return;

    let temp = [ ...redo ];
    const newState = temp.pop();

    saveForUndo(newState);
    // This HAS to be called after saveForUndo, otherwise the redo stack will be empty
    setRedo(temp);
  };

  /**
   * Actions that are tracked for redo:
   ** 1. Moving node
   ** 2. Adding node (search)
   *  3. Adding node (D&D)
   *  4. Removing node
   *  5. generate prereq
   */
  const handleUndo = () => {
    // undo base is 1 because it should initialize with the default state in there
    if (undo.length === 1) return;

    // Make a copy of the state that will be mutated
    let temp = [ ...undo ];

    const currState = temp.pop();

    // Save for redo stack and apply the new elements
    saveForRedo(currState);
    setUndo(temp);
  };

  /**
   * Saves the current snap shor of the elements array into the undo stack
   * @param {Array} newEle The elementes array
   */
  const saveForUndo = newEle => {
    console.log('set redo empty');
    setRedo([]);
    setUndo(prev => prev.concat([ newEle ]));
  };

  /**
   * Saves the current snap shor of the elements array into the redo stack
   * @param {Array} newEle The elementes array
   */
  const saveForRedo = newEle => {
    setRedo(prev => prev.concat([ newEle ]));
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
        saveForUndo={saveForUndo}
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
