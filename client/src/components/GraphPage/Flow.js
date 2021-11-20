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

import {
  autosave,
  determineType,
  debounce,
  getTargetNodes,
  changeOutgoerType,
  generatePrereq
} from '../../utils';
import useDidUpdateEffect from '../../customhooks/useDidUpdateEffect';

// The 3 types of custom nodes that can appear in the Flow
import customNodes from './customNodes';
import EditNode from './EditNode';
import './dnd.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = ({ elements, setElements, saveForUndo, flowID }) => {
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

    //Now, we get the modified node (same id as current node, but with its type determined)
    let numElements = elements.length;
    let modifiedNode = null;
    for (let i = 0; i < numElements; i++) {
      if (elements[i].id == currentNode.id) {
        modifiedNode = elements[i];
        break;
      }
    }

    //Get a list of the outgoing nodes
    let targetList = getOutgoers(modifiedNode, elements);

    //This will modify the types of the current node's children based on the new type change
    if (targetList.length !== 0) {
      setElements(changeOutgoerType(modifiedNode, targetList, elements));
    }

    //Close the EditNode component box
    handleClose();
  };

  useDidUpdateEffect(
    () => {
      // Only want the view to center on the first load,
      // and not subsequent element updates
      const centerView = () => {
        reactFlowInstance.fitView({ padding: 0.5 });
        setInitialView(true);
      };

      autosave(flowID, elements);
      reactFlowInstance && !initialView && centerView();
    },
    [ elements ]
  );

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

  const handleGeneratePrereq = async () => {
    // let prereqArray = data['prerequisites'];
    // let numPrereqs = prereqArray.length;
    // for (let i = 0; i < numPrereqs; i++) {
    //   try {
    //     elements = await addCourse(prereqArray[i], elements, saveForUndo, taken);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    generatePrereq();
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
