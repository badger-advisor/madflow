import React from 'react';
import { List, ListItem } from '@mui/material';
import { useState } from 'react';

import './dnd.css';
import CourseNodeStyles from './customNodes/CourseNodeStyles';

const Sidebar = () => {
	const styles = useState(CourseNodeStyles);
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<List>
			<ListItem button>
				<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'courseTaken')} draggable>
					<div style={styles[0].taken}>
						<div>Taken</div>
					</div>
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode" onDragStart={(event) => onDragStart(event, 'courseCannotTake')} draggable>
					<div style={styles[0].cannotTake}>
						<div>Cannot Take</div>
					</div>
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode output" onDragStart={(event) => onDragStart(event, 'courseCanTake')} draggable>
					<div style={styles[0].canTake}>
						<div>Can Take</div>
					</div>
				</div>
			</ListItem>
		</List>
	);
};

export default Sidebar;

