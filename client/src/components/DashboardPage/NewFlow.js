import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createNewFlow } from '../../utils.js';
import { useState } from 'react';

// material-ui
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const validationSchema = Yup.object().shape({
  name  : Yup.string()
    .required('You must name your new Flow!')
    .max(20, 'Name is too long. Cannot be greater than 20 characters.'),

  major : Yup.string()
    .required('You must specify a major for your new Flow!')
    .min(4, 'Major is too short. Cannot be less than 4 characters.')
});

const NewFlow = ({ open, setOpen, userID, refresh, setRefresh, elements, setShowMenu }) => {
  // function to stop clicks from propagating through Dialog
  const handleClicks = e => {
    e.stopPropagation();
  };

  const [ openError, setOpenError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  // Submit is async because creating a flow is async
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createNewFlow(userID, values.name, values.major, elements);
    } catch (e) {
      setErrorMessage(e);
      setOpenError(true);
    } finally {
      resetForm();
      setOpen(false);
      setRefresh(!refresh);
      setShowMenu && setShowMenu(false);
    }
  };

  // use Formik to handle form validation and submission
  const formik = useFormik({
    enableReinitialize : true,
    initialValues      : {
      name  : '',
      major : ''
    },
    validationSchema   : validationSchema,
    onSubmit           : handleSubmit,
    onReset            : () => {
      setOpen(false);
    }
  });

  return (
    <div>
      <Dialog open={open} onClose={formik.handleReset}>
        <div onClick={handleClicks}>
          {!elements ? (
            <DialogTitle>Create New Flow</DialogTitle>
          ) : (
            <DialogTitle>Copy To New Flow</DialogTitle>
          )}

          <DialogContent>
            {/* input for Flow name */}
            <div align='center'>
              <TextField
                autoFocus
                margin='dense'
                name='name'
                label='Flow Name'
                type='text'
                variant='standard'
                sx={{ width: '75%' }}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>

            {/* input for Flow major */}
            <div align='center'>
              <TextField
                margin='dense'
                name='major'
                label='Major'
                type='text'
                variant='standard'
                sx={{ width: '75%' }}
                value={formik.values.major}
                onChange={formik.handleChange}
                error={formik.touched.major && Boolean(formik.errors.major)}
                helperText={formik.touched.major && formik.errors.major}
              />
            </div>
          </DialogContent>

          {/* button options for new Flow */}
          <DialogActions>
            {!elements ? (
              <div>
                <Button onClick={formik.handleSubmit}>Create Blank</Button>
                <Button onClick={formik.handleSubmit}>Create Pre-Filled</Button>
                <Button id={'cancel_btn'} onClick={formik.handleReset}>
                  Cancel
                </Button>{' '}
              </div>
            ) : (
              <div>
                <Button onClick={formik.handleSubmit}>Create Copy</Button>
                <Button onClick={formik.handleReset}>Cancel</Button>
              </div>
            )}
          </DialogActions>
        </div>
      </Dialog>

      <Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleErrorClose}
          severity='error'
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default NewFlow;
