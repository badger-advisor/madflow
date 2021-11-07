import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import UndoIcon from '@mui/icons-material/Undo';
import { useState, useEffect } from 'react';

import RedoIcon from '@mui/icons-material/Redo';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Searchbar from './Searchbar';

import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import {getallCourses} from '../../utils';

const drawerWidth = 240;

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
    width       : `calc(100% - ${drawerWidth}px)`,
    transition  : theme.transitions.create([ 'margin', 'width' ], {
      easing   : theme.transitions.easing.easeOut,
      duration : theme.transitions.duration.enteringScreen
    }),
    marginRight : drawerWidth
  })
}));

const SearchNavBar = ({ handleDrawer, open, elements, undo, redo, saveForUndo }) => {
  const [ courseOptions, setCourseOptions] = useState([]);

  const getCourseOptions = async () => {
    setCourseOptions(await getallCourses());
  };

   useEffect(
    () => {
      getCourseOptions();
    },[])

  return (
    <AppBar position='fixed' open={open} style={{ background: '#c5050c' }}>
      <Toolbar>
        <Typography variant='h6' noWrap sx={{ marginRight: 4 }} component='div'>
          MadFlow
        </Typography>

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

          <IconButton sx={{ marginRight: 2, marginLeft: 2 }} color='inherit' edge='end'>
            <AccountCircleRoundedIcon fontSize='large' />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawer}
            sx={{ ...(open && { display: 'none' }), marginLeft: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchNavBar;
