import { useState } from 'react';
import { getFlowElements } from '../../utils.js';

// components
import RenameFlow from './RenameFlow.js';
import DeleteConfirmation from './DeleteConfirmation.js';
import NewFlow from './NewFlow.js';

// material-ui
import { Menu, MenuItem } from '@mui/material';

// icons and images
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const FlowCardMenu = ({
  userID,
  flowID,
  flowName,
  flowMajor,
  showMenu,
  setShowMenu,
  refresh,
  setRefresh
}) => {
  const [ showRename, setShowRename ] = useState(false);
  const [ showDelete, setShowDelete ] = useState(false);
  const [ showNewFlow, setShowNewFlow ] = useState(false);
  const [ copyElements, setCopyElements ] = useState([]);

  // function to close menu
  const handleClose = e => {
    e.stopPropagation();
    console.log('close menu');
    setShowMenu(null);
  };

  const handleRename = e => {
    e.stopPropagation();
    console.log('rename flow');
    setShowRename(true);
  };

  // TODO: function to copy Flow to a new Flow
  const handleCopyFlow = async e => {
    e.stopPropagation();
    console.log('copy flow');

    setCopyElements(await getFlowElements(flowID));
    //console.log(copyElements);
    setShowNewFlow(true);
  };

  // function to open delete confirmation Dialog
  const handleDeleteFlow = e => {
    e.stopPropagation();
    setShowDelete(true);
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
        flowID={flowID}
        flowName={flowName}
        flowMajor={flowMajor}
        open={showRename}
        setOpen={setShowRename}
        refresh={refresh}
        setRefresh={setRefresh}
        setShowMenu={setShowMenu}
      />

      {/* open delete confirmation message */}
      <DeleteConfirmation
        flowID={flowID}
        flowName={flowName}
        open={showDelete}
        setOpen={setShowDelete}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      {/* add new flow dialog */}
      <NewFlow
        open={showNewFlow}
        setOpen={setShowNewFlow}
        userID={userID}
        refresh={refresh}
        setRefresh={setRefresh}
        elements={copyElements}
        setShowMenu={setShowMenu}
      />
    </div>
  );
};

export default FlowCardMenu;
