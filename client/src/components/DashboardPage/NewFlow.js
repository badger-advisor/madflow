import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createNewFlow } from '../../utils.js';

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

const NewFlow = ({ open, setOpen, userID, refresh, setRefresh, elements, setShowMenu }) => {
  // function to stop clicks from propagating through Dialog
  const handleClicks = e => {
    e.stopPropagation();
  };

  // function to use utility function to create new FLow for current user
  const makeFlow = async (userID, flowName, flowMajor, elements) => {
    await createNewFlow(userID, flowName, flowMajor, elements);
  };

  // use Formik to handle form validation and submission
  const formik = useFormik({
    enableReinitialize : true,
    initialValues      : {
      name  : '',
      major : ''
    },
    validationSchema   : validationSchema,
    onSubmit           : (values, { resetForm }) => {
      // console.log(values);
      // console.log(values.name);
      makeFlow(userID, values.name, values.major, elements);
      resetForm();
      setOpen(false);
      setRefresh(!refresh);
      setShowMenu && setShowMenu(false);
    },
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
                <Button onClick={formik.handleReset}>Cancel</Button>{' '}
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
    </div>
  );
};

export default NewFlow;
