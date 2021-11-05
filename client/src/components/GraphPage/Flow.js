import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  isEdge,
  getConnectedEdges
} from 'react-flow-renderer';

import { autosave } from '../../utils';

// The 3 types of custom nodes that can appear in the Flow
import customNodes from './customNodes';

import './dnd.css';
import EditNode from './EditNode';

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = ({ elements, setElements, saveForUndo }) => {
  // Flow library stuff
  const reactFlowWrapper = useRef(null);
  const [ reactFlowInstance, setReactFlowInstance ] = useState(null);
  const [ openEditNode, setOpenEditNode ] = useState(false);
  const [ currentNode, setCurrentNode ] = useState('');
  const onConnect = params => setElements(els => addEdge(params, els));
  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  // Event listener to handle removing elements and undoing
  const onElementsRemove = () => {
    const edges = elements.filter(el => isEdge(el));
    const edgesToRemove = getConnectedEdges([ currentNode ], edges);
    const elementsToRemove = edgesToRemove.concat([ currentNode ]);
    handleClose();
    saveForUndo(removeElements(elementsToRemove, elements));
  };

  useEffect(
    () => {
      // Update the document title using the browser API

      //call the save endpoint, for testing I have provided a flow id since functionality is not ready yet.
      autosave('6171c42fdcb0c9cba954978c', elements);
    },
    [ elements ]
  );

  //Handle dragging a node from the Sidebar
  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  //Handle dropping the node from the sidebar and adding the new node to the graph
  const onDrop = event => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x : event.clientX - reactFlowBounds.left,
      y : event.clientY - reactFlowBounds.top
    });
    const newNode = {
      id       : getId(),
      type,
      position,
      data     : { label: 'Course Node' }
    };

    const newElements = [ ...elements, newNode ];
    saveForUndo(newElements);
  };

  const handleMoveNode = (e, node) => {
    // console.log(node);
    const newElements = elements.map((ele, idx) => {
      const { id } = ele;

      // Find the node that was just updated from the elements array
      if (id === node.id) {
        return {
          ...ele,
          position : node.position
        };
      } else {
        // else return the node/edge as is
        return ele;
      }
    });
    setElements(newElements);
    saveForUndo(newElements);
  };

  const onNodeDoubleClick = (e, node) => {
    e.preventDefault();
    setCurrentNode(node);
    setOpenEditNode(!openEditNode);
  };

  const handleClose = () => {
    setOpenEditNode(false);
  };

  return (
    <div className='dndflow' style={{ height: 1080 }}>
      <ReactFlowProvider>
        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            nodeTypes={customNodes}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onNodeDragStop={handleMoveNode}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            snapToGrid={true}
            snapGrid={[ 15, 15 ]}
            deleteKeyCode={46}
            onNodeDoubleClick={(event, node) => onNodeDoubleClick(event, node)}
          />
          <EditNode
            open={openEditNode}
            node={currentNode}
            handleClose={handleClose}
            elements={elements}
            onElementsRemove={onElementsRemove}
          />
          <Background gap={15} />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
