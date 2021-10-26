import React from 'react';
import { TextField, Autocomplete, Popper, Box } from '@mui/material/';
import { useState } from 'react';
import AddCourse from './AddCourse';
import Button from '@mui/material/Button';

//Later a list of courses will be fetched from the DB
const courseOptions = [
	{ courseID: 1, label: 'CS 200', courseInfo: 'INFO for CS 200' },
	{ courseID: 2, label: 'CS 252', courseInfo: 'INFO for CS 252' },
	{ courseID: 3, label: 'CS 300', courseInfo: 'INFO for CS 300' },
	{ courseID: 4, label: 'CS 400', courseInfo: 'INFO for CS 400' },
	{ courseID: 5, label: 'CS 577', courseInfo: 'INFO for CS 577' }
];

const SearchBar = () => {
	const closedLocation = { pointerEvents: 'auto', position: 'fixed', top: 70, left: 445 };
	const openLocation = { pointerEvents: 'auto', position: 'fixed', top: 70, left: 445 };
	const [ currentCourse, setCurrentCourse ] = useState('');
	const [ currentCourseLabel, setCurrentCourseLabel ] = useState('');
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ open, setOpen ] = useState(false);
	const [ location, setLocation ] = useState(closedLocation);

	//Determines the course information that appears in the popup
	const courseChangeHandler = (event, option, reason) => {
		if (option !== null && event != undefined) {
			//setAnchorEl(event.currentTarget);
			setLocation(closedLocation);
			setOpen(true);
			console.log(option);
			console.log(event);
			setAnchorEl(event.currentTarget);
			console.log(option);
			setCurrentCourse(option);
			setCurrentCourseLabel(option.label);
		}
	};

	//Determines the behavior of the course addition popup whenever the course search box closes
	const closePopupHandler = () => {
		setOpen(false);
	};

	//const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<div>
			<Autocomplete
				options={courseOptions}
				onHighlightChange={(event, T) => courseChangeHandler(event, T, 'mouse')}
				onClose={() => closePopupHandler()}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Search to add a course..." />}
			/>
			<Popper id={id} open={open} style={location}>
				<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
					<div>{currentCourse.label}</div>
					<div>{currentCourse.courseInfo}</div>
					<Button variant="contained" onClick={console.log('BUTTON TEST')}>
						Have Taken
					</Button>
				</Box>
			</Popper>
		</div>
	);
};

export default SearchBar;
