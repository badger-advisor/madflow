import { useState } from 'react';

// components
import ProfileMenu from './ProfileMenu';
import NewFlow from '../DashboardPage/NewFlow';

// material-ui
import { Button, IconButton, alpha, AppBar, Toolbar, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// icons
import tempIcon from '../../images/tempIcon.png'; // TODO: replace with logo
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';

const NavBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);

const NavBar = ({ userID, refresh, setRefresh }) => {
  const [ showProfileMenu, setShowProfileMenu ] = useState(null);
  const [ showNewFlow, setShowNewFlow ] = useState(false);

  const newFlow = e => {
    console.log('new flow clicked!');
    setShowNewFlow(!showNewFlow);
  };

  const openProfileMenu = e => {
    console.log('profile clicked!');
    setShowProfileMenu(e.currentTarget);
  };

  return (
    <div>
      <AppBar position='fixed' sx={{ backgroundColor: '#7C7C7C', height: '60px' }}>
        <Toolbar
          variant='dense'
          sx={{
            height         : '60px',
            justifyContent : 'space-between'
          }}
        >
          {/* logo button */}
          <IconButton sx={{ mr: 2 }}>
            <Link to='/'>
              <img src={tempIcon} height='45px' />
            </Link>
          </IconButton>

          {/* right side of nav bar */}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* add new flow button */}
            <Button
              variant='outlined'
              startIcon={<AddIcon />}
              sx={{ color: 'white', border: '1px solid white' }}
              onClick={newFlow}
            >
              New Flow
            </Button>

            {/* add new flow dialog */}
            <NewFlow
              open={showNewFlow}
              setOpen={setShowNewFlow}
              userID={userID}
              refresh={refresh}
              setRefresh={setRefresh}
            />

            {/* profile icon and button */}
            <Avatar sx={{ ml: 2, bgcolor: '#AE2012', cursor: 'pointer' }} onClick={openProfileMenu}>
              G
            </Avatar>

            {/* profile menu */}
            <ProfileMenu showMenu={showProfileMenu} setShowMenu={setShowProfileMenu} />
          </div>
        </Toolbar>
      </AppBar>
      <NavBarOffset />
    </div>
  );
};

export default NavBar;
