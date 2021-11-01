import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Stack, Box, Divider } from '@mui/material';
import Switch from '@mui/material/Switch';
import CourseNodeStyles from './CourseNodeStyles';
import { makeStyles } from '@mui/styles';

import './dnd.css';

const useStyles = makeStyles({
	autobtn: {
		backgroundColor: '#484848',
		color: '#ffffff',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: '#484848'
		}
	},
	rmbtn: {
		marginLeft: 130,
		marginRight: 130,
		marginTop: 1,
		marginBottom: 20,
		backgroundColor: '#a33d3d',
		color: '#ffffff',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: '#a33d3d'
		}
	}
});

const EditNode = ({ open, node, handleClose }) => {
	const styles = useState(CourseNodeStyles);
	const classes = useStyles();

	//Variables related to course data and its status
	const type = node.type;
	const data = node.data;
	const defined = data !== undefined;
	const label = defined ? data['label'] : 'Course unavailable';
	const taken = type === 'courseTaken';
	const description =
		defined && data['description'] !== undefined
			? data['description']
			: 'No description available for this course.';
	const prereqs = defined && data['prerequisites'] !== undefined ? data['prerequisites'].join(', ') : 'None';

	return (
		<Dialog maxWidth="xs" onClose={handleClose} open={open}>
			<DialogTitle margin="auto">
				<div>{label}</div>
			</DialogTitle>
			<Divider />
			<DialogContent style={{ height: '150px' }}>
				<div>{description}</div>
			</DialogContent>
			<Divider />
			<Stack marginRight="20px" direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
				<Box overflow="auto" flex={1} flexDirection="column" display="flex" paddingLeft={2}>
					<Typography>Have you taken this course?</Typography>
				</Box>
				<Typography variant="caption">Not Taken</Typography>
				<Switch defaultChecked={taken} />
				<Typography variant="caption">Taken</Typography>
			</Stack>
			<Stack marginRight="20px" direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
				<Box
					overflow="auto"
					height="20vh"
					minWidth={300}
					maxWidth={300}
					flexDirection="column"
					display="flex"
					p={2}
				>
					<Typography>Prerequisites:</Typography>
					<Box
						overflow="auto"
						flex={1}
						border="2px solid #dadfe1"
						flexDirection="column"
						display="flex"
						p={2}
					>
						<Typography>{prereqs}</Typography>
					</Box>
				</Box>
				<Button className={classes.autobtn} variant="contained" size="small">
					Autofill Prerequisites
				</Button>
			</Stack>
			<Button className={classes.rmbtn} variant="contained" size="small">
				Remove from Flow
			</Button>
		</Dialog>
	);
};

export default EditNode;
