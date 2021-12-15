export const logicElements = [
  {
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
  },
  {
    id       : 'COMP SCI 400',
    position : { x: 0, y: 0 },
    type     : 'courseCanTake',
    data     : {
      info          : 'For testing propositional logic',
      courseNumber  : 'COMP SCI 400',
      prerequisites : {
        prerequisites : [],
        text          : 'CS400 filler',
        logic         : undefined
      }
    }
  },
  {
    id       : 'COMP SCI 407',
    position : { x: 0, y: 0 },
    type     : 'courseCanTake',
    data     : {
      info          : 'For testing propositional logic',
      courseNumber  : 'COMP SCI 407',
      prerequisites : {
        prerequisites : [],
        text          : 'CS407 filler',
        logic         : undefined
      }
    }
  },
  {
    id       : 'COMP SCI 552',
    position : { x: 0, y: 0 },
    type     : 'courseTaken',
    data     : {
      info          : 'For testing propositional logic',
      courseNumber  : 'COMP SCI 552',
      prerequisites : {
        prerequisites : [],
        text          : 'CS552 filler',
        logic         : undefined
      }
    }
  }
];
