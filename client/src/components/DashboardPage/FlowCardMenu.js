import { useEffect } from 'react';
import { deleteFlow } from '../../utils.js';

// material-ui
import { Menu, MenuItem } from '@mui/material';

// icons and images
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const FlowCardMenu = ({ showMenu, setShowMenu, flowID, refresh, setRefresh }) => {
  // function to use utility function to delete FLow
  // const removeCurrentFlow = async flowID => {
  //   await deleteFlow(flowID);
  // };

  // function to close menu
  const handleClose = e => {
    e.stopPropagation();
    console.log('close menu');
    setShowMenu(null);
  };

  // TODO: function to rename Flow
  const handleRename = e => {
    e.stopPropagation();
    console.log('rename flow');
  };

  // TODO: function to copy Flow to a new Flow
  const handleCopyFlow = e => {
    e.stopPropagation();
    console.log('copy flow');
  };

  // TODO: function to delete Flow
  const handleDeleteFlow = async e => {
    e.stopPropagation();
    // console.log('delete flow');
    // console.log(`inside menu: ${flowID}`);
    await deleteFlow(flowID);
    setRefresh(!refresh);
  };

  return (
    <Menu
      id='menu'
      anchorEl={showMenu}
      keepMounted
      open={Boolean(showMenu)}
      onClose={handleClose}
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
      <MenuItem onClick={handleRename}>
        <DriveFileRenameOutlineIcon sx={{ mr: 1.75 }} />
        Rename Flow
      </MenuItem>
      <MenuItem onClick={handleCopyFlow}>
        <FileCopyTwoToneIcon sx={{ mr: 1.75 }} />
        Copy to New Flow
      </MenuItem>
      <MenuItem onClick={handleDeleteFlow}>
        <DeleteIcon sx={{ mr: 1.75 }} />
        Delete Flow
      </MenuItem>
    </Menu>
  );
};

export default FlowCardMenu;
