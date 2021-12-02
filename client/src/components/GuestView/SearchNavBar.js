import { useState, useEffect } from 'react';

import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

import Searchbar from '../GraphPage/Searchbar';
import { getAllCourses } from '../../utils';
import { Link } from 'react-router-dom';

const DRAWER_WIDTH = 240;

/**
 * Style for the tool bar
 */
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp : prop => prop !== 'open'
})(({ theme, open }) => ({
  transition : theme.transitions.create([ 'margin', 'width' ], {
    easing   : theme.transitions.easing.sharp,
    duration : theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width       : `calc(100% - ${DRAWER_WIDTH}px)`,
    transition  : theme.transitions.create([ 'margin', 'width' ], {
      easing   : theme.transitions.easing.easeOut,
      duration : theme.transitions.duration.enteringScreen
    }),
    marginRight : DRAWER_WIDTH
  })
}));

const SearchNavBar = ({ open, elements, undo, redo, saveForUndo }) => {
  const [ courseOptions, setCourseOptions ] = useState([]);

  useEffect(async () => {
    setCourseOptions(await getAllCourses());
  }, []);

  return (
    <AppBar position='fixed' open={open} style={{ background: '#c5050c' }}>
      <Toolbar>
        {/* // TODO: To be replaced with logo */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography variant='h6' noWrap sx={{ marginRight: 4 }} component='div'>
            MadFlow
          </Typography>
        </Link>

        {/* The actual search element */}
        <Searchbar courseOptions={courseOptions} elements={elements} saveForUndo={saveForUndo} />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            sx={{ marginRight: 2, marginLeft: 2 }}
            color='inherit'
            edge='end'
            onClick={undo}
          >
            <UndoIcon fontSize='mid' />
          </IconButton>
          <IconButton
            sx={{ marginRight: 2, marginLeft: 2 }}
            color='inherit'
            edge='end'
            onClick={redo}
          >
            <RedoIcon fontSize='mid' />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchNavBar;
