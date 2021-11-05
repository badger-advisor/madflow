const CourseNodeStyles = () => {
  return {
    taken      : {
      display        : 'flex',
      justifyContent : 'center',
      alignItems     : 'center',
      background     : '#FFFFFF',
      color          : '#000000',
      border         : '2px solid #484848',
      borderRadius   : 5,
      fontSize       : 12,
      width          : 105,
      height         : 45,
      textAlign      : 'center',
      targetPosition : 'top',
      sourcePosition : 'bottom'
    },
    cannotTake : {
      display        : 'flex',
      justifyContent : 'center',
      alignItems     : 'center',
      background     : '#FFFFFF',
      color          : '#000000',
      border         : '2px solid #a33d3d',
      borderRadius   : 5,
      fontSize       : 12,
      width          : 105,
      height         : 45,
      textAlign      : 'center'
    },
    canTake    : {
      display        : 'flex',
      justifyContent : 'center',
      alignItems     : 'center',
      background     : '#FFFFFF',
      color          : '#000000',
      padding        : 1,
      border         : '2px solid #008000',
      borderRadius   : 5,
      fontSize       : 12,
      width          : 105,
      height         : 45,
      textAlign      : 'center'
    }
  };
};

export default CourseNodeStyles;
