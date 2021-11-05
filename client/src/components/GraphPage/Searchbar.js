import React from 'react';
import { TextField, Autocomplete, Popper, Box, Paper, Typography } from '@mui/material/';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ShowMoreText from 'react-show-more-text';

import { connectPrereqs, determineType, generateNode } from '../../utils';

import './dnd.css';

//Later a list of courses will be fetched from the DB
const courseOptions = [
  {
    courseID   : 1,
    label      : 'CS 200',
    courseInfo :
      'Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation. Intended for students who have no prior programming experience. Enroll Info: None'
  },
  {
    courseID   : 2,
    label      : 'CS 252',
    courseInfo :
      'Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming. Enroll Info: None'
  },
  {
    courseID   : 3,
    label      : 'CS 300',
    courseInfo :
      'Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types (List,Stack,Queue,PriorityQueue(Heap),Binary Search Tree); generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion. Enroll Info: None'
  },
  {
    courseID   : 4,
    label      : 'CS 400',
    courseInfo :
      'The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software. Enroll Info: None'
  },
  {
    courseID   : 5,
    label      : 'CS 577',
    courseInfo :
      'Basic paradigms for the design and analysis of efficient algorithms: greed, divide-and-conquer, dynamic programming, reductions, and the use of randomness. Computational intractability including typical NP-complete problems and ways to deal with them. Enroll Info: None'
  },
  {
    courseID   : 6,
    label      : 'CS 506',
    courseInfo :
      'Ideas and techniques for designing, developing, and modifying large software systems. Topics include software engineering processes; requirements and specifications; project team organization and management; software architectures; design patterns; testing and debugging; and cost and quality metrics and estimation. Students will work in large teams on a substantial programming project. Enroll Info: None'
  }
];

const SearchBar = ({ elements, saveForUndo }) => {
  const closedLocation = {
    pointerEvents : 'auto',
    position      : 'fixed',
    top           : 70,
    left          : 140,
    zIndex        : 100
  };
  const openLocation = {
    pointerEvents : 'auto',
    position      : 'fixed',
    top           : 70,
    left          : 445,
    zIndex        : 100
  };
  const [ currentCourse, setCurrentCourse ] = useState({});
  const [ open, setOpen ] = useState(false);
  const [ location, setLocation ] = useState(closedLocation);
  const [ taken, setTaken ] = useState(false); // when false means not taken
  const [ displayPop, setDisplayPop ] = useState(false);
  const [ dropDown, setDropDown ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');

  useEffect(
    () => {
      if (inputValue === '') {
        setDisplayPop(false);
      }
    },
    [ inputValue ]
  );

  //Determines the course information that appears in the popup
  const courseChangeHandler = (event, option) => {
    if (option !== null && event != undefined) {
      setLocation(openLocation);
      setOpen(true);
      setCurrentCourse(option);
      setDisplayPop(true);
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleOnClose = e => {
    if (e.type !== 'blur') {
      setInputValue('');
      setDropDown(false);
      setDisplayPop(false);
      console.log(e);
    }
  };

  /**
   * Able to add most as taken and not taken
   * TODO: implement logic to determine if can take or cannot take
   */
  const addCourse = async () => {
    console.log(`Add ${taken ? 'Taken' : 'Not Taken'}: ${currentCourse.label}`);

    // Removes spaces from current course
    const courseNum = currentCourse.label.split(' ').join('');

    // Determines what type of node to add
    const type = taken ? 'courseTaken' : 'courseCannotTake';

    try {
      const newCourse = await generateNode(courseNum, { type });

      //Check if course is already present in the flow
      if (elements.filter(el => el.id === newCourse.id).length !== 0) {
        throw newCourse.id + ' already present in the flow, it cannot be added!';
      }

      //If the course is not taken, it is either courseCannotTake or courseCanTake
      if (!taken) {
        newCourse.type = determineType(newCourse, elements);
      }

      const newElements = [ ...elements, newCourse ];

      //Connect the new course to its prereqs
      const connectedElements = connectPrereqs(newCourse, newElements);
      saveForUndo(connectedElements);
    } catch (e) {
      // TODO: Error pop up maybe
      console.error(e);
    } finally {
      setInputValue('');
      setDropDown(false);
      setDisplayPop(false);
    }
  };

  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Autocomplete
        clearOnEscape={true}
        options={courseOptions}
        onHighlightChange={courseChangeHandler}
        onInputChange={handleInputChange}
        onClose={e => handleOnClose(e)}
        inputValue={inputValue}
        autoHighlight={true}
        open={dropDown}
        // onClose={closePopupHandler}
        sx={{
          width : 300
        }}
        ListboxProps={{
          style : {
            zIndex    : 100,
            maxHeight : 230
          }
        }}
        renderInput={params => <TextField {...params} label='Search to add a course...' />}
      />
      {displayPop && (
        <Popper disablePortal={false} id={id} open={open} style={location}>
          <Paper>
            <Box
              sx={{
                border    : 1,
                p         : 1,
                bgcolor   : 'background.paper',
                minWidth  : 300,
                maxWidth  : 300,
                minHeight : 185
              }}
            >
              <div>{currentCourse.label}</div>
              <div>
                <ShowMoreText className='mystyle' lines={4} width={270}>
                  <Typography variant='mystyle'>{currentCourse.courseInfo}</Typography>
                </ShowMoreText>
              </div>
              <Typography variant='mystyle'>Add Course as:</Typography>
              <div className='buttons'>
                <Button
                  onMouseEnter={() => setTaken(false)}
                  // have to use onMouseDown because onClick closes the dorp down, and this button is never fired
                  onMouseDown={addCourse}
                  sx={{
                    backgroundColor : '#a33d3d',
                    color           : '#ffffff',
                    '&:hover'       : {
                      backgroundColor : '#ffffff',
                      color           : '#a33d3d'
                    },
                    marginLeft      : 2
                  }}
                  variant='contained'
                  size='small'
                >
                  Not Taken
                </Button>
                <Button
                  sx={{
                    backgroundColor : '#484848',
                    color           : '#ffffff',
                    '&:hover'       : {
                      backgroundColor : '#ffffff',
                      color           : '#484848'
                    },
                    marginRight     : 2
                  }}
                  onMouseEnter={() => setTaken(true)}
                  onMouseLeave={() => setTaken(false)}
                  // have to use onMouseDown because onClick closes the dorp down, and this button is never fired
                  onMouseDown={addCourse}
                  variant='contained'
                  size='small'
                >
                  Have Taken
                </Button>
              </div>
            </Box>
          </Paper>
        </Popper>
      )}
    </div>
  );
};

export default SearchBar;
