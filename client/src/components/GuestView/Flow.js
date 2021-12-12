import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  isEdge,
  getConnectedEdges,
  getOutgoers
} from 'react-flow-renderer';

import { changeType, determineType, generatePrereq, getNode, traverseBFS } from '../../utils';

// The 3 types of custom nodes that can appear in the Flow
import customNodes from '../GraphPage/customNodes';
import EditNode from '../GraphPage/EditNode';
import '../GraphPage/dnd.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = ({ elements, setElements, saveForUndo }) => {
  // Flow library stuff
  const reactFlowWrapper = useRef(null);
  const [ reactFlowInstance, setReactFlowInstance ] = useState(null);
  const [ openEditNode, setOpenEditNode ] = useState(false);
  const [ currentNode, setCurrentNode ] = useState('');
  const onConnect = params => setElements(els => addEdge(params, els));
  const onLoad = _reactFlowInstance => {
    console.log(_reactFlowInstance);
    _reactFlowInstance.fitView();
    setReactFlowInstance(_reactFlowInstance);
  };
  const [ initialView, setInitialView ] = useState(false);

  // Event listener to handle removing elements and undoing
  const onElementsRemove = () => {
    const edges = elements.filter(el => isEdge(el));
    const edgesToRemove = getConnectedEdges([ currentNode ], edges);
    const elementsToRemove = edgesToRemove.concat([ currentNode ]);
    handleClose();
    setElements(changeType(currentNode, 'courseTaken'));

    //Now, we get the modified node (same id as current node, but with its type determined)
    let modifiedNode = getNode(currentNode, elements);

    //We modify the children now that the node doesn't exist, pretending that its type was 'courseTaken'
    if (getOutgoers(modifiedNode, elements).length != 0) {
      elements = traverseBFS(modifiedNode, elements);
      setElements(elements);
    }

    //Finally, remove the elements and save the state
    saveForUndo(removeElements(elementsToRemove, elements));
  };

  //Lets the user change the course status as taken or not; changes are reflected in the graph
  const handleSwitchStatus = e => {
    //The default is 'taken', but we check the event to see if it is being switched to 'not taken'
    //From there we determine the type based on the node's prereqs

    let newType = 'courseTaken';
    console.log(e.target.checked);
    if (!e.target.checked) {
      newType = determineType(currentNode, elements);
    }

    //This part actually modifies the type in the elements list
    setElements(changeType(currentNode, newType));

    //Now, we get the modified node (same id as current node, but with its type determined
    let modifiedNode = getNode(currentNode, elements);

    if (getOutgoers(modifiedNode, elements).length != 0) {
      elements = traverseBFS(modifiedNode, elements);
      setElements(elements);
    }

    //Close the EditNode component box
    handleClose();
  };

  useEffect(() => {}, []);

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

  const handleGeneratePrereq = async data => {
    generatePrereq(data, elements, saveForUndo);
    handleClose();
  };

  // For making the flow take up the entire screen
  // 64px is the default value from theme.mixins.toolbar
  const flowHeight = `calc(100vh - 64px)`;

  return (
    <div className='dndflow' style={{ height: flowHeight }}>
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
            id={'edit_node'}
            open={openEditNode}
            node={currentNode}
            handleClose={handleClose}
            elements={elements}
            onElementsRemove={onElementsRemove}
            onSwitch={handleSwitchStatus}
            saveForUndo={saveForUndo}
            onGeneratePrereq={handleGeneratePrereq}
          />
          <Background gap={15} />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
