import React from 'react';
import { TextField, Autocomplete, Popper, Box } from '@mui/material/';
import { useState } from 'react';
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
	const closedLocation = { pointerEvents: 'auto', position: 'fixed', top: 70, left: 140, zIndex: 100 };
	const openLocation = { pointerEvents: 'auto', position: 'fixed', top: 70, left: 445, zIndex: 100 };
	const [ currentCourse, setCurrentCourse ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ location, setLocation ] = useState(closedLocation);

	//Create an event listener that causes the course addition popup to close when
	//the user clicks the 'clear' button on the searchbar
	setTimeout(async () => {
		const close = await document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0];
		if (close) {
			close.addEventListener('click', () => {
				setOpen(false);
				setCurrentCourse('');
			});
		}
	}, 100);

	//Determines the course information that appears in the popup
	const courseChangeHandler = (event, option, reason) => {
		if (option !== null && event != undefined) {
			setLocation(openLocation);
			setOpen(true);
			setCurrentCourse(option);
		}
	};

	//Determines the behavior of the course addition popup whenever the course search box closes
	const openPopupHandler = () => {
		console.log('opened');
		if (currentCourse !== '') {
			setOpen(true);
		}
		setLocation(openLocation);
	};

	//Determines the behavior of the course addition popup whenever the course search box closes
	const closePopupHandler = () => {
		setLocation(closedLocation);
	};

	const id = open ? 'simple-popper' : undefined;

	return (
		<div>
			<Autocomplete
				options={courseOptions}
				onHighlightChange={(event, T) => courseChangeHandler(event, T, 'mouse')}
				onOpen={() => openPopupHandler()}
				onClose={() => closePopupHandler()}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Search to add a course..." />}
			/>
			<Popper disablePortal={false} id={id} open={open} style={location}>
				<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
					<div>{currentCourse.label}</div>
					<div>{currentCourse.courseInfo}</div>
					<Button variant="contained">Have Taken</Button>
				</Box>
			</Popper>
		</div>
	);
};

export default SearchBar;
