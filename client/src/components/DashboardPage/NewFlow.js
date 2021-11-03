import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// material-ui
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button, TextField } from '@mui/material';

const validationSchema = Yup.object().shape({
  name  : Yup.string()
    .required('You must name your new Flow!')
    .max(20, 'Name is too long. Cannot be greater than 20 characters.'),

  major : Yup.string()
    .required('You must specify a major for your new Flow!')
    .min(4, 'Major is too short. Cannot be less than 4 characters.')
});

const NewFlow = ({ open, setOpen }) => {
  const [ name, setName ] = useState('');
  const [ major, setMajor ] = useState('');

  // use Formik to handle form submission
  const formik = useFormik({
    enableReinitialize : true,
    initialValues      : {
      name  : '',
      major : ''
    },
    validationSchema   : validationSchema,
    onSubmit           : (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setOpen(!open);
    }
  });

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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formik.handleSubmit}>Create Blank</Button>
          <Button onClick={formik.handleSubmit}>Create Pre-Filled</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewFlow;
