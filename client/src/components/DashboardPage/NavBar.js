// material-ui
import { Button, IconButton, alpha, AppBar, Toolbar, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// icons
import tempIcon from './tempIcon.png'; // TODO: replace with logo
import AddIcon from '@mui/icons-material/Add';

const NavBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
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
            >
              New Flow
            </Button>
            <Avatar sx={{ ml: 2, bgcolor: '#AE2012' }}>G</Avatar>
          </div>
        </Toolbar>
      </AppBar>
      <NavBarOffset />
    </div>
  );
};

export default NavBar;
