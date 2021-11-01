import React from 'react';
import { useState, useRef, useEffect } from 'react';
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

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = ({ setElements, setCurElm, setNextElm, curElm, nextElm }) => {
  let elements = JSON.parse(localStorage.getItem('elements'));

  useEffect(() => {
    const eventListenerFun = e => {
      console.log('update recieved');
      elements = JSON.parse(localStorage.getItem('elements'));
    };
    window.addEventListener('storage', eventListenerFun);

    return () => window.removeEventListener('storage', eventListenerFun);
  }, []);

  const styles = useState(CourseNodeStyles);
  const reactFlowWrapper = useRef(null);
  const [ reactFlowInstance, setReactFlowInstance ] = useState(null);

  const onConnect = params => setElements(els => addEdge(params, els));
  const onElementsRemove = elementsToRemove => {
    setElements(els => removeElements(elementsToRemove, els));
    setNextElm([ ...nextElm, elementsToRemove ]);
  };
  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  //Node element for a taken course
  const CourseTaken = ({ data }) => {
    return (
      <div style={styles[0].taken}>
        <Handle type='source' position='bottom' style={{ visibility: 'hidden' }} />
        <div>{data.label}</div>
        <Handle type='target' position='top' style={{ visibility: 'hidden' }} />
      </div>
    );
  };

  //Node element for a course that cannot be taken yet
  const CourseCannotTake = ({ data }) => {
    return (
      <div style={styles[0].cannotTake}>
        <Handle type='source' position='bottom' style={{ visibility: 'hidden' }} />
        <div>{data.label}</div>
        <Handle type='target' position='top' style={{ visibility: 'hidden' }} />
      </div>
    );
  };

  //Node element for a course that has not been taken, but can be
  const CourseCanTake = ({ data }) => {
    return (
      <div style={styles[0].canTake}>
        <Handle type='source' position='bottom' style={{ visibility: 'hidden' }} />
        <div>{data.label}</div>
        <Handle type='target' position='top' style={{ visibility: 'hidden' }} />
      </div>
    );
  };

  // The 3 types of nodes that can appear in the Flow
  const nodeTypes = {
    courseTaken      : CourseTaken,
    courseCannotTake : CourseCannotTake,
    courseCanTake    : CourseCanTake
  };

  //Handle dragging a node from the Sidebar
  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  //Handle dropping the node from the sidebar adds the new node to the graph
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
    let t = [ ...curElm, newNode ];
    console.log(t);
    setCurElm(t);

    setElements(es => es.concat(newNode));
    console.log(elements);
  };

  return (
    <div className='dndflow' style={{ height: 1080 }}>
      <ReactFlowProvider>
        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
          <ReactFlow
            elements={JSON.parse(localStorage.getItem('elements'))}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            snapToGrid={true}
            snapGrid={[ 15, 15 ]}
            deleteKeyCode={46}
          />
          <Background gap={15} />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
