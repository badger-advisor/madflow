import { useState } from 'react';

// material-ui
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button, TextField } from '@mui/material';

const NewFlow = ({ open, setOpen }) => {
  const [ name, setName ] = useState('');
  const [ major, setMajor ] = useState('');

  // function to close the Dialog window
  const handleClose = () => {
    setOpen(!open);
  };

  // TODO: function to handle creating a blank Flow with the specified name and major
  const startBlank = () => {
    console.log('start blank clicked!');
    console.log('name = %s    major = %s', name, major);
    setOpen(!open);
  };

  // TODO: function to handle creating a pre-filled Flow with the specified name and major
  const startPrefill = () => {
    console.log('start pre-filled clicked!');
    console.log('name = %s    major = %s', name, major);
    setOpen(!open);
  };

  // TODO: alternative function to handle creating a new flow, regardless of blank/prefill option
  const makeNewFlow = option => {
    // option = 'blank' or 'prefill' depending on which button was clicked

    newFlow = {
      //flowID:  id of flow (assigned automatically),
      //TODO: userID:  id of current user,
      flowName  : name,
      flowMajor : major
      //TODO: elements:  array of all nodes and edges in the flow
    };

    // call function to create new Flow
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Flow</DialogTitle>
        <DialogContent>
          {/* input for Flow name */}
          <div align='center'>
            <TextField
              autoFocus
              margin='dense'
              label='Flow Name'
              type='text'
              variant='standard'
              sx={{ width: '75%' }}
              error // TODO: fix error so that it only pops up upon form submission
              helperText='A Flow name must be entered!'
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* input for Flow major */}
          <div align='center'>
            <TextField
              margin='dense'
              label='Major'
              type='text'
              variant='standard'
              sx={{ width: '75%' }}
              error // TODO: fix error so that it only pops up upon form submission
              helperText='A Flow major must be entered!'
              onChange={e => setMajor(e.target.value)}
            />
          </div>
        </DialogContent>

        {/* button options for new Flow */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={startBlank}>Create Blank</Button>
          <Button onClick={startPrefill}>Create Pre-Filled</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewFlow;
