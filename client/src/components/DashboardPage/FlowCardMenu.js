// material-ui
import { Menu, MenuItem } from '@mui/material';

// icons and images
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const FlowCardMenu = ({ showMenu, setShowMenu, flowID }) => {
  // function to close menu
  const closeMenu = (e) => {
    e.stopPropagation();
    console.log('close menu');
    setShowMenu(null);
  };

  // TODO: function to rename Flow
  const renameFlow = (e) => {
    e.stopPropagation();
    console.log('rename flow');
  };

  // TODO: function to copy Flow to a new Flow
  const copyFlow = (e) => {
    e.stopPropagation();
    console.log('copy flow');
  };

  // TODO: function to delete Flow
  const deleteFlow = (e) => {
    e.stopPropagation();
    console.log('delete flow');
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
      <MenuItem onClick={renameFlow}>
        <DriveFileRenameOutlineIcon sx={{ mr: 1.75 }} />
        Rename Flow
      </MenuItem>
      <MenuItem onClick={copyFlow}>
        <FileCopyTwoToneIcon sx={{ mr: 1.75 }} />
        Copy to New Flow
      </MenuItem>
      <MenuItem onClick={deleteFlow}>
        <DeleteIcon sx={{ mr: 1.75 }} />
        Delete Flow
      </MenuItem>
    </Menu>
  );
};

export default FlowCardMenu;
