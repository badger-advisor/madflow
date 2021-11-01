/*const AddCourse = (course) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //const classes = useStyles;
  //const [open, setOpen] = useStyles(false);

  return (
    <div>
    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      Open Popover
    </Button>
    <Popover
      id={id}
      open={open}
      disableAutoFocus={true}
      disableEnforceFocus={true}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography>
      <Button >
      Open Popover
    </Button>
      {course === "" ? "nothing to show" : course.label}
      </Typography>
    </Popover>
    </div>
  )
}

export default AddCourse
*/

import React from 'react';
import { Popover, Typography, Button } from '@mui/material';
//import { makeStyles } from '@mui/styles';

const AddCourse = ({ course }) => {
	const courseObj = course;
	return (
		<div>
			<Button>{console.log(courseObj)}</Button>
		</div>
	);
};

export default AddCourse;
