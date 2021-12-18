const EdgeCannotTake = (srcId, targetId) => {
  return {
    id            : `${srcId}-${targetId}`,
    source        : srcId,
    target        : targetId,
    type          : 'smoothstep',
    style         : { stroke: '#a33d3d' },
    animated      : 'true',
    arrowHeadType : 'arrowclosed'
  };
};

export default EdgeCannotTake;
