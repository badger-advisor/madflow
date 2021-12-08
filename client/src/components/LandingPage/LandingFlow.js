import ReactFlow, { Background } from 'react-flow-renderer';
import { initialElements } from '../../pages/initialElements';
import customNodes from '../GraphPage/customNodes';

const LandingFlow = () => {
  const onLoad = reactFlowInstance => {
    reactFlowInstance.fitView();
  };

  // since reactflow uses regular dom elements, we can just use regular
  // css to style
  const style = {
    background : 'rgba(247 247 247)'
  };

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        elements={initialElements}
        nodeTypes={customNodes}
        onLoad={onLoad}
        style={style}
        // Don't want users to interact with this at all
        nodesDraggable={false}
        paneMoveable={false}
        zoomOnDoubleClick={false}
        zoomOnScroll={false}
        elementsSelectable={false}
      />
    </div>
  );
};

export default LandingFlow;
