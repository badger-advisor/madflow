// material-ui
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button, TextField } from '@mui/material';

const NewFlow = ({ open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Flow</DialogTitle>
        <DialogContent>
          <div align='center'>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Flow Name'
              type='text'
              variant='standard'
              sx={{ width: '75%' }}
            />
          </div>
          <div align='center'>
            <TextField
              margin='dense'
              variant='standard'
              label='Major'
              type='text'
              sx={{ width: '75%' }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create Blank</Button>
          <Button onClick={handleClose}>Create Pre-Filled</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewFlow;
