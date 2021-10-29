import React from 'react';
import { useState, useRef } from 'react';
import ReactFlow, {
	ReactFlowProvider,
	addEdge,
	removeElements,
	Controls,
	Background,
	Handle
} from 'react-flow-renderer';

import './dnd.css';
import CourseNodeStyles from './CourseNodeStyles';

const initialElements = [
	{
		id: '1',
		type: 'courseTaken',
		data: { label: 'Welcome to MadFlow!' },
		position: { x: 795, y: 105 }
	},
	{
		id: '2',
		type: 'courseTaken',
		data: { label: 'CS 400' },
		position: { x: 690, y: 210 }
	},
	{
		id: '3',
		type: 'courseCanTake',
		data: { label: 'CS 240' },
		position: { x: 900, y: 210 }
	},
	{
		id: '4',
		type: 'courseCannotTake',
		data: { label: 'CS 577' },
		position: { x: 795, y: 315 }
	},

	{
		id: 'e1-2',
		source: '1',
		target: '2',
		type: 'smoothstep',
		label: 'Course planning...',
		labelBgStyle: { fill: '#f7f7f7' },
		arrowHeadType: 'arrowclosed'
	},
	{
		id: 'e1-3',
		source: '1',
		target: '3',
		type: 'smoothstep',
		animated: 'true',
		label: '...made easy!',
		labelBgStyle: { fill: '#f7f7f7' },
		arrowHeadType: 'arrowclosed'
	},
	{
		id: 'e2-4',
		source: '2',
		target: '4',
		type: 'smoothstep',
		animated: 'true',
		arrowHeadType: 'arrowclosed'
	},
	{
		id: 'e3-4',
		source: '3',
		target: '4',
		type: 'smoothstep',
		style: { stroke: '#a33d3d' },
		animated: 'true',
		arrowHeadType: 'arrowclosed',
		arrowHeadColor: '#a33d3d'
	}
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
  const styles = useState(CourseNodeStyles);
	const reactFlowWrapper = useRef(null);
	const [ reactFlowInstance, setReactFlowInstance ] = useState(null);
	const [ elements, setElements ] = useState(initialElements);
	const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
	const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

	//Node element for a taken course
	const CourseTaken = ({ data }) => {
		return (
			<div style={styles[0].taken}>
				<Handle type="source" position="bottom" style={{ visibility: 'hidden' }} />
				<div>{data.label}</div>
				<Handle type="target" position="top" style={{ visibility: 'hidden' }} />
			</div>
		);
	};

	//Node element for a course that cannot be taken yet
	const CourseCannotTake = ({ data }) => {
		return (
			<div style={styles[0].cannotTake}>
				<Handle type="source" position="bottom" style={{ visibility: 'hidden' }} />
				<div>{data.label}</div>
				<Handle type="target" position="top" style={{ visibility: 'hidden' }} />
			</div>
		);
	};

	//Node element for a course that has not been taken, but can be
	const CourseCanTake = ({ data }) => {
		return (
			<div style={styles[0].canTake}>
				<Handle type="source" position="bottom" style={{ visibility: 'hidden' }} />
				<div>{data.label}</div>
				<Handle type="target" position="top" style={{ visibility: 'hidden' }} />
			</div>
		);
	};

	// The 3 types of nodes that can appear in the Flow
	const nodeTypes = {
		courseTaken: CourseTaken,
		courseCannotTake: CourseCannotTake,
		courseCanTake: CourseCanTake
	};

	//Handle dragging a node from the Sidebar
	const onDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	};

	//Handle dropping the node from the sidebar adds the new node to the graph
	const onDrop = (event) => {
		event.preventDefault();

		const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
		const type = event.dataTransfer.getData('application/reactflow');
		const position = reactFlowInstance.project({
			x: event.clientX - reactFlowBounds.left,
			y: event.clientY - reactFlowBounds.top
		});
		const newNode = {
			id: getId(),
			type,
			position,
			data: { label: 'Course Node' }
		};

		setElements((es) => es.concat(newNode));
	};

	return (
		<div className="dndflow" style={{ height: 1080 }}>
			<ReactFlowProvider>
				<div className="reactflow-wrapper" ref={reactFlowWrapper}>
					<ReactFlow
						elements={elements}
						nodeTypes={nodeTypes}
						onConnect={onConnect}
						onElementsRemove={onElementsRemove}
						onLoad={onLoad}
						onDrop={onDrop}
						onDragOver={onDragOver}
						snapToGrid={true}
						snapGrid={[ 15, 15 ]}
					/>
					<Background gap={15} />
					<Controls />
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Flow;
