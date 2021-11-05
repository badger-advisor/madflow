export const initialElements = [
  {
    id       : '1',
    type     : 'courseTaken',
    data     : { label: 'Welcome to MadFlow!' },
    position : { x: 795, y: 105 }
  },
  {
    id       : 'CS 400',
    type     : 'courseTaken',
    data     : {
      courseName    : 'PROGRAMMING III',
      credits       : '3',
      description   :
        'The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software. Enroll Info: None',
      label         : 'CS 400',
      lastTaught    : 'Fall 2021',
      prerequisites : [ 'CS 300' ]
    },
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
    id       : 'CS 407',
    type     : 'courseTaken',
    data     : {
      courseName    : 'FOUNDATIONS OF MOBILE SYSTEMS AND APPLICATIONS',
      credits       : '3',
      description   :
        'Design and implementation of applications, systems, and services for mobile platforms with (i) constraints, such as limited processing, memory, energy, interfaces, variable bandwidth, and high mobility, and (ii) features, such as touchscreens, cameras, electronic compasses, GPS, and accelerometers. Enroll Info: None',
      label         : 'CS 407',
      lastTaught    : 'Fall 2021',
      prerequisites : [ 'CS 300', 'CS 367' ]
    },
    position : { x: 200, y: 105 }
  },

  {
    id            : 'e1-CS 400',
    source        : '1',
    target        : 'CS 400',
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
    id            : 'CS 400-4',
    source        : 'CS 400',
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
