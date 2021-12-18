import { useState, useEffect, useContext } from 'react';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { styled, useTheme } from '@mui/material/styles';

import Searchbar from './Searchbar';
import { getAllCourses } from '../../utils';
import { Link } from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider';

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

const SearchNavBar = ({ handleDrawer, open, elements, undo, redo, saveForUndo }) => {
  const [ courseOptions, setCourseOptions ] = useState([]);
  const { user } = useContext(UserProvider.context);
  const USER_ID = user.googleId;

  useEffect(async () => {
    setCourseOptions(await getAllCourses());
  }, []);

  return (
    <AppBar position='fixed' open={open} style={{ background: '#c5050c' }}>
      <Toolbar>
        {/* // TODO: To be replaced with logo */}
        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
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

          <IconButton sx={{ marginRight: 2, marginLeft: 2 }} color='inherit' edge='end'>
            {/* <AccountCircleRoundedIcon fontSize='large' /> */}
            <Avatar
              sx={{ ml: 2, bgcolor: '#AE2012', cursor: 'pointer' }}
              src={user.profilePicture}
            />
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
