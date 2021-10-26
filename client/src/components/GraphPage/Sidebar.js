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
				<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
					Input Node
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
					Default Node
				</div>
			</ListItem>
			<ListItem button>
				<div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
					Output Node
				</div>
			</ListItem>
		</List>
	);
};

export default Sidebar;
