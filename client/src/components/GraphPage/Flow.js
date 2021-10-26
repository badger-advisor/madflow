import React from 'react';
import { useState, useRef } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background } from 'react-flow-renderer';

const initialElements = [
	{
		id: '1',
		type: 'input',
		data: { label: 'Welcome to MadFlow!' },
		position: { x: 800, y: 100 }
	}
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
	//State related to React Flow
	const reactFlowWrapper = useRef(null);
	const [ reactFlowInstance, setReactFlowInstance ] = useState(null);
	const [ elements, setElements ] = useState(initialElements);
	const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

	const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

	/* //Adding a new node
  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
      };
      setElements((els) => els.concat(newNode));
    }, [setElements]);
    */

	//Dragging a node from the Sidebar
	const onDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	};

	//Dropping the node from the sidebar adds the new node to the graph
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
			data: { label: `${type} node` }
		};

		setElements((es) => es.concat(newNode));
	};

	return (
		<div className="dndflow" style={{ height: 1080 }}>
			<ReactFlowProvider>
				<div className="reactflow-wrapper" ref={reactFlowWrapper}>
					<ReactFlow
						elements={elements}
						onConnect={onConnect}
						onElementsRemove={onElementsRemove}
						onLoad={onLoad}
						onDrop={onDrop}
						onDragOver={onDragOver}
						snapToGrid={true}
						snapGrid={[ 15, 15 ]}
					>
						<Background />
					</ReactFlow>
					<Controls />
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Flow;
