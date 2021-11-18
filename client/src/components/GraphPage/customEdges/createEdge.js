import EdgeCannotTake from './EdgeCannotTake';
import EdgeTaken from './EdgeTaken';
import EdgeCanTake from './EdgeCanTake';

const createEdge = (srcId, srcType, targetId, targetType) => {
  let newEdge = null;
  if (srcType === 'courseTaken' && targetType === 'courseTaken') {
    console.log('TAKEN');
    newEdge = EdgeTaken(srcId, targetId);
  } else if (
    srcType === 'courseTaken' &&
    (targetType === 'courseCanTake' || targetType === 'courseCannotTake')
  ) {
    console.log('CAN TAKE');
    newEdge = EdgeCanTake(srcId, targetId);
  } else if (srcType === 'courseCannotTake' || srcType === 'courseCanTake') {
    console.log('CANNOT TAKE');
    newEdge = EdgeCannotTake(srcId, targetId);
  } else {
    //TODO: think of other edge cases; cannot take will just be a default for now
    newEdge = EdgeCannotTake(srcId, targetId);
  }
  return newEdge;
};

export default createEdge;
