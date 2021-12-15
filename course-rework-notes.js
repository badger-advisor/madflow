// what to add to mongo
const raw = {
  courseNumber  : 'COMP SCI 506',

  info          : {
    courseName  : 'Programming I',
    description :
      'Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation. Intended for students who have no prior programming experience. Enroll Info: None',
    credits     : 3,
    lastTaught  : '1222',
    repeatable  : true,
    designation : '',
    standing    : ''
  },

  prerequisites : {
    courseList : [ 'COMP SCI 367', 'COMP SCI 400' ],
    test       :
      '(COMP SCI 367 or 400) and (COMP SCI 407, 536, 537, 545, 559, 564, 570, 679 or COMP SCI/E C E 552) or graduate/professional standing, or declared in the Capstone Certificate in Computer Sciences for Professionals',
    logic      :
      '(convertToBool("COMP SCI 367") || convertToBool("COMP SCI 400")) && (convertToBool("COMP SCI 407") || convertToBool("COMP SCI 536") || convertToBool("COMP SCI 537") || convertToBool("COMP SCI 545") || convertToBool("COMP SCI 559") || convertToBool("COMP SCI 564") || convertToBool("COMP SCI 570") || convertToBool("COMP SCI 679") || convertToBool("E C E 552") || ​convertToBool("COMP SCI 552"))'
  }
};

// parse step
// ignore all words like graduate, QA, whateev
//  '(COMP SCI 367 or 400) and (COMP SCI 407, 536, 537, 545, 559, 564, 570, 679 or COMP SCI/E C E 552)'
//
// add comp sci in front of all numbers
//  COMP SCI/E C E 552 -> COMP SCI 552, E C E 552
//
// turn all ',' inside parans into either 'or' / '||' or 'and' / '&&'
//
// or -> ||
// and -> &&
//
// add " " around all courses
// add convertToBool() around all courses
//
// end result
//  '(convertToBool("COMP SCI 367") || convertToBool("COMP SCI 400")) && (convertToBool("COMP SCI 407")'

// this is what front-end constructs
const node = {
  id       : 'COMP SCI 506',
  position : { x: 0, y: 0 },
  type     : 'courseCannotTake',
  data     : {
    info          : 'For testing propositional logic',
    courseNumber  : 'COMP SCI 506',
    prerequisites : {
      prerequisites : [ 'COMP SCI 400', 'COMP SCI 407', 'COMP SCI 552' ],
      text          :
        '(COMP SCI 367 or 400) and (COMP SCI 407, 536, 537, 545, 559, 564, 570, 679 or E C E/​COMP SCI  552) or graduate/professional standing, or declared in the Capstone Certificate in Computer Sciences for Professionals',
      logic         :
        '(convertToBool("COMP SCI 367") || convertToBool("COMP SCI 400")) && (convertToBool("COMP SCI 407") || convertToBool("COMP SCI 536") || convertToBool("COMP SCI 537") || convertToBool("COMP SCI 545") || convertToBool("COMP SCI 559") || convertToBool("COMP SCI 564") || convertToBool("COMP SCI 570") || convertToBool("COMP SCI 679") || convertToBool("E C E 552") || ​convertToBool("COMP SCI 552"))'
    }
  }
};
