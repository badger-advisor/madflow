import { useState } from 'react';
import { Handle } from 'react-flow-renderer';

import CourseNodeStyles from './CourseNodeStyles';

//Node element for a course that cannot be taken yet
const CourseCannotTake = ({ data }) => {
  const styles = useState(CourseNodeStyles);

  return (
    <div style={styles[0].cannotTake}>
      <Handle type='source' position='bottom' style={{ visibility: 'hidden' }} />
      <div>{data.label}</div>
      <Handle type='target' position='top' style={{ visibility: 'hidden' }} />
    </div>
  );
};
export default CourseCannotTake;
