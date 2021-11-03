export const initialElements = [
  {
    id       : '1',
    type     : 'courseTaken',
    data     : { label: 'Welcome to MadFlow!' },
    position : { x: 795, y: 105 }
  },
  {
    id       : '2',
    type     : 'courseTaken',
    data     : { label: 'CS 400' },
    position : { x: 690, y: 210 }
  },
  {
    id       : '3',
    type     : 'courseCanTake',
    data     : { label: 'CS 240' },
    position : { x: 900, y: 210 }
  },
  {
    id       : '4',
    type     : 'courseCannotTake',
    data     : { label: 'CS 577' },
    position : { x: 795, y: 315 }
  },

  {
    id            : 'e1-2',
    source        : '1',
    target        : '2',
    type          : 'smoothstep',
    label         : 'Course planning...',
    labelBgStyle  : { fill: '#f7f7f7' },
    arrowHeadType : 'arrowclosed'
  },
  {
    id            : 'e1-3',
    source        : '1',
    target        : '3',
    type          : 'smoothstep',
    animated      : 'true',
    label         : '...made easy!',
    labelBgStyle  : { fill: '#f7f7f7' },
    arrowHeadType : 'arrowclosed'
  },
  {
    id            : 'e2-4',
    source        : '2',
    target        : '4',
    type          : 'smoothstep',
    animated      : 'true',
    arrowHeadType : 'arrowclosed'
  },
  {
    id             : 'e3-4',
    source         : '3',
    target         : '4',
    type           : 'smoothstep',
    style          : { stroke: '#a33d3d' },
    animated       : 'true',
    arrowHeadType  : 'arrowclosed',
    arrowHeadColor : '#a33d3d'
  }
];
