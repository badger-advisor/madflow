import { useState } from 'react';
import { Avatar, Divider, List, ListItem } from '@mui/material';
import NavBar from '..//NavBar/NavBar';
import { Typography } from '@mui/material';
import DeleteAccount from './DeleteAccount';

import './profile.css';

const ProfileMainView = () => {
  const [ openDeleteAccount, setOpenDeleteAccount ] = useState(false);
  const handleDeactivate = () => {
    setOpenDeleteAccount(!openDeleteAccount);
  };

  const handleClose = () => {
    setOpenDeleteAccount(false);
  };

  return (
    <div className='main'>
      <div className='header-img' />
      <div className='profile-box'>
        <Avatar
          sx={{
            bgcolor      : '#AE2012',
            height       : 100,
            width        : 100,
            fontSize     : 50,
            marginBottom : 1,
            align        : 'center',
            borderColor  : '#f7f7f7',
            borderWidth  : '4px',
            borderStyle  : 'solid'
          }}
        >
          G
        </Avatar>
        <Typography sx={{ marginBottom: 2 }}>Account Holder Name</Typography>
        <div className='profile-box-inner'>
          <Typography sx={{ padding: 2 }}>Options</Typography>
          <Divider />
          <List>
            <ListItem button onClick={handleDeactivate}>
              <Typography>Deactivate Account</Typography>
              <DeleteAccount open={openDeleteAccount} handleClose={handleClose} />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainView;
