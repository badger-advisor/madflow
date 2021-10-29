import React from 'react';
import { List, ListItem } from '@mui/material';

import './dnd.css';

const Sidebar = () => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<List>
			<ListItem button>
				<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'courseTaken')} draggable>
					Taken
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode" onDragStart={(event) => onDragStart(event, 'courseCannotTake')} draggable>
					Cannot Take
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode output" onDragStart={(event) => onDragStart(event, 'courseCanTake')} draggable>
					Can Take
				</div>
			</ListItem>
		</List>
	);
};

export default Sidebar;
