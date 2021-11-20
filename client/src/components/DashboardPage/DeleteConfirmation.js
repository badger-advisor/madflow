import { deleteFlow } from '../../utils.js';

// material-ui
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  rmbtn : {
    backgroundColor : '#a33d3d',
    color           : '#ffffff',
    '&:hover'       : {
      backgroundColor : '#ffffff',
      color           : '#a33d3d'
    }
  },
  btn   : {
    backgroundColor : '#f6fafd',
    '&:hover'       : {
      backgroundColor : '#ffffff',
      borderColor     : '#ffffff'
    }
  }
});

const DeleteConfirmation = ({ flowID, flowName, open, setOpen, refresh, setRefresh }) => {
  const classes = useStyles();

  // function to prevent clicks from propagating through to FlowCard underneath
  const handleClicks = e => {
    e.stopPropagation();
  };

  // function to close menu
  const handleClose = e => {
    e.stopPropagation();
    console.log('close delete confirmation dialog');
    setOpen(false);
  };

  // function to delete the selected Flow
  const handleDeleteFlow = async e => {
    e.stopPropagation();
    // console.log('delete flow');
    // console.log(`inside menu: ${flowID}`);
    await deleteFlow(flowID);
    setOpen(false);
    setRefresh(!refresh);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div onClick={handleClicks}>
        <DialogTitle>Delete "{flowName}"?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the Flow named "{flowName}"? This action is irreversible
            and will delete all the course information associated with this Flow.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDeleteFlow} className={classes.rmbtn}>
            Delete
          </Button>
          <Button onClick={handleClose} variant='outlined' className={classes.btn}>
            Cancel
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmation;
