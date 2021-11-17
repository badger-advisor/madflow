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

import { autosave, determineType, debounce } from '../../utils';
import useDidUpdateEffect from '../../customhooks/useDidUpdateEffect';

// The 3 types of custom nodes that can appear in the Flow
import customNodes from './customNodes';

import './dnd.css';
import EditNode from './EditNode';

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = ({ elements, setElements, saveForUndo, flowID }) => {
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

  //Lets the user change the course status as taken or not; changes are reflected in the graph
  const handleSwitchStatus = e => {
    //The default is 'taken', but we check the event to see if it is being switched to 'not taken'
    //From there we determine the type based on the node's prereqs
    let newType = 'courseTaken';
    if (!e.target.checked) {
      newType = determineType(currentNode, elements);
    }
    //This part actually modifies the type in the elements list
    setElements(els =>
      els.map(el => {
        if (el.id === currentNode.id) {
          el.type = newType;
        }
        return el;
      })
    );
    //Close the EditNode component box
    handleClose();
  };

  useDidUpdateEffect(
    () => {
      autosave(flowID, elements);
    },
    [ elements ]
  );

  //Handle dragging a node from the Sidebar
  const onDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  //Handle dropping the node from the sidebar and adding the new node to the graph
  const onDrop = e => {
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = e.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x : e.clientX - reactFlowBounds.left,
      y : e.clientY - reactFlowBounds.top
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

  const handleMoveNode = (_, node) => {
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

  const onNodeDoubleClick = node => {
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
            onNodeDoubleClick={(_, node) => onNodeDoubleClick(node)}
            onElementClick={(_, node) => setCurrentNode(node)}
          />
          <EditNode
            open={openEditNode}
            node={currentNode}
            handleClose={handleClose}
            elements={elements}
            onElementsRemove={onElementsRemove}
            onSwitch={handleSwitchStatus}
            saveForUndo={saveForUndo}
          />
          <Background gap={15} />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
