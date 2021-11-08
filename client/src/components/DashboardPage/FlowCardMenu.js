import { useState } from 'react';
import { deleteFlow } from '../../utils.js';

// components
import RenameFlow from './RenameFlow.js';

// material-ui
import { Menu, MenuItem } from '@mui/material';

// icons and images
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const FlowCardMenu = ({ showMenu, setShowMenu, flowID, refresh, setRefresh }) => {
  const [ showRename, setShowRename ] = useState(false);

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
    setShowRename(true);
  };

  // TODO: function to copy Flow to a new Flow
  const handleCopyFlow = e => {
    e.stopPropagation();
    console.log('copy flow');
  };

  // function to handle deleting the selected Flow
  const handleDeleteFlow = async e => {
    e.stopPropagation();
    // console.log('delete flow');
    // console.log(`inside menu: ${flowID}`);
    await deleteFlow(flowID);
    setRefresh(!refresh);
  };

  return (
    <div>
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

      {/* open component to rename */}
      <RenameFlow
        open={showRename}
        setOpen={setShowRename}
        refresh={refresh}
        setRefresh={setRefresh}
        rename={true}
      />
    </div>
  );
};

export default FlowCardMenu;
