import { useState, useContext } from 'react';
import { Avatar, Divider, List, ListItem } from '@mui/material';
import { Typography } from '@mui/material';
import DeleteAccount from './DeleteAccount';
import UserProvider from '../../contexts/UserProvider';

import './profile.css';

const ProfileMainView = () => {
  const [ openDeleteAccount, setOpenDeleteAccount ] = useState(false);
  const { user, loggedIn } = useContext(UserProvider.context);

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
          src={user.profilePicture}
        />
        <Typography sx={{ marginBottom: 2 }}>
          {loggedIn ? user.name : `Account Holder Name`}
        </Typography>
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
