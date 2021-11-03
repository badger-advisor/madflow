// material-ui
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button, TextField } from '@mui/material';

const NewFlow = ({ open, setOpen }) => {
  // function to close the Dialog window
  const handleClose = () => {
    setOpen(!open);
  };

  // TODO: function to handle creating a blank Flow with the specified name and major
  const startBlank = () => {
    console.log('start blank clicked!');
    setOpen(!open);
  };

  // TODO: function to handle creating a pre-filled Flow with the specified name and major
  const startPrefill = () => {
    console.log('start pre-filled clicked!');
    setOpen(!open);
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
