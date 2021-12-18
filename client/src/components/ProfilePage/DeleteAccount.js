import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Stack, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deleteUserObj } from '../../utils';

import '../GraphPage/dnd.css';

const useStyles = makeStyles({
  autobtn : {
    margin          : 20,
    backgroundColor : '#484848',
    color           : '#ffffff',
    '&:hover'       : {
      backgroundColor : '#ffffff',
      color           : '#484848'
    }
  },
  rmbtn   : {
    margin          : 20,
    backgroundColor : '#a33d3d',
    color           : '#ffffff',
    '&:hover'       : {
      backgroundColor : '#ffffff',
      color           : '#a33d3d'
    }
  }
});

const handleDeactivate = async user => {
  await deleteUserObj(user.googleId);
  window.location.reload(false);
};

const DeleteAccount = ({ open, handleClose, user }) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth='xs' onClose={handleClose} open={open}>
      <DialogTitle margin='auto'>
        <div>Deactivate Account</div>
      </DialogTitle>
      <Divider />
      <DialogContent style={{ minHeight: '70px' }}>
        <Typography>
          WARNING: All data associated with your account, including saved Flows, will be permanently
          deleted.
        </Typography>
      </DialogContent>
      <Divider />

      <Typography align='center' sx={{ padding: 2, marginBottom: 5 }}>
        Do you wish to proceed to deactivate your account?
      </Typography>
      <Stack
        marginRight='20px'
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent='center'
      >
        <Button className={classes.autobtn} variant='contained' size='small'>
          Cancel
        </Button>
        <Button
          className={classes.rmbtn}
          variant='contained'
          size='small'
          onClick={async () => {
            await handleDeactivate(user);
          }}
        >
          Deactivate
        </Button>
      </Stack>
    </Dialog>
  );
};

export default DeleteAccount;
