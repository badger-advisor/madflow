// material-ui
import { Button, IconButton, alpha, AppBar, Toolbar, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// icons
import tempIcon from './tempIcon.png'; // TODO: replace with logo
import AddIcon from '@mui/icons-material/Add';

const NavBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  // TODO: function to handle opening the NewFlow component
  const newFlow = (e) => {
    console.log('new flow clicked!');
  };

  // TODO: function to handle opening the profile menu
  const openProfileMenu = (e) => {
    console.log('profile clicked!');
    //setShowMenu(e.currentTarget);
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
          <IconButton sx={{ mr: 2 }}>
            <img src={tempIcon} height='45px' />
          </IconButton>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              variant='outlined'
              startIcon={<AddIcon />}
              sx={{ color: 'white', border: '1px solid white' }}
              onClick={newFlow}
            >
              New Flow
            </Button>
            <Avatar sx={{ ml: 2, bgcolor: '#AE2012', cursor: 'pointer' }} onClick={openProfileMenu}>
              G
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
      <NavBarOffset />
    </div>
  );
};

export default NavBar;
