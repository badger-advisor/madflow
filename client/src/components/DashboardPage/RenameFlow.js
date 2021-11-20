import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateFlow } from '../../utils.js';

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

const RenameFlow = ({
  flowID,
  flowName,
  flowMajor,
  open,
  setOpen,
  refresh,
  setRefresh,
  setShowMenu
}) => {
  // function to stop clicks from propagating through Dialog
  const handleClicks = e => {
    e.stopPropagation();
  };

  // function to use utility function to create new FLow for current user
  const updateFlowName = async (flowID, changes) => {
    await updateFlow(flowID, changes);
  };

  // use Formik to handle form validation and submission
  const formik = useFormik({
    enableReinitialize : true,
    initialValues      : {
      name  : flowName,
      major : flowMajor
    },
    validationSchema   : validationSchema,
    onSubmit           : (values, { resetForm }) => {
      // console.log(values);
      // console.log(values.name);
      updateFlowName(flowID, { name: values.name, major: values.major });
      resetForm();
      setOpen(false);
      setRefresh(!refresh);
      setShowMenu(false);
    },
    onReset            : () => {
      setOpen(false);
    }
  });

  return (
    <div>
      <Dialog open={open} onClose={formik.handleReset}>
        <div onClick={handleClicks}>
          <DialogTitle>Rename Flow</DialogTitle>
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
                disabled // TODO: disable?? figure out major requirements
              />
            </div>
          </DialogContent>

          {/* button options for new Flow */}
          <DialogActions>
            <Button onClick={formik.handleSubmit}>Rename</Button>
            <Button onClick={formik.handleReset}>Cancel</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default RenameFlow;
