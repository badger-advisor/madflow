import { Link } from 'react-router-dom';
// material-ui
import { Menu, MenuItem } from '@mui/material';
// icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// Helper functions
import { signOut } from '../../api';

const ProfileMenu = ({ showMenu, setShowMenu }) => {
  // function to close menu
  const closeMenu = e => {
    e.stopPropagation();
    console.log('close menu');
    setShowMenu(null);
  };

  // TODO: function to sign current user out of the application
  const signOut = async e => {
    // e.stopPropagation();
    console.log('sign out clicked :(');
    window.location.href = '/auth/logout';
  };

  return (
    <Menu
      id='menu'
      anchorEl={showMenu}
      keepMounted
      open={Boolean(showMenu)}
      onClose={closeMenu}
      variant='selectedMenu'
      anchorOrigin={{
        vertical   : 'bottom',
        horizontal : 'right'
      }}
      transformOrigin={{
        vertical   : 'top',
        horizontal : 'right'
      }}
    >
      <MenuItem component={Link} to='/profile'>
        <PersonOutlineIcon sx={{ mr: 1.75 }} />
        View Profile
      </MenuItem>
      <MenuItem onClick={signOut}>
        <ExitToAppIcon sx={{ mr: 1.75 }} />
        Sign out
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
