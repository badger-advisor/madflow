const EdgeTaken = (srcId, targetId) => {
  return {
    id            : `${srcId}-${targetId}`,
    source        : srcId,
    target        : targetId,
    type          : 'smoothstep',
    animated      : 'false',
    arrowHeadType : 'arrowclosed'
  };
};

export default EdgeTaken;
