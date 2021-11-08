const EdgeTaken = (srcId, targetId) => {
  return {
    id            : `${srcId}-${targetId}`,
    source        : srcId,
    target        : targetId,
    type          : 'smoothstep',
    arrowHeadType : 'arrowclosed'
  };
};

export default EdgeTaken;
