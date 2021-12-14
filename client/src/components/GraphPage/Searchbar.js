import { TextField, Autocomplete, Popper, Box, Paper, Typography } from '@mui/material/';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ShowMoreText from 'react-show-more-text';

import { addCourse } from '../../utils';

import './dnd.css';

const SearchBar = ({ elements, courseOptions, saveForUndo }) => {
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
    }
  };

  //Handle adding a course to the flow
  const handleAddCourse = (currentCourse, elements, saveForUndo) => {
    try {
      addCourse(currentCourse.label, elements, saveForUndo, taken);
    } catch (e) {
      console.error(e);
    } finally {
      setInputValue('');
      setDropDown(false);
      setDisplayPop(false);
    }
  };

  const id = open ? 'popper' : undefined;

  return (
    <div>
      <Autocomplete
        id='searchbar'
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
        <Popper disablePortal={false} id={'popper'} open={open} style={location}>
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
                  id={'not_taken'}
                  onMouseEnter={() => setTaken(false)}
                  // have to use onMouseDown because onClick closes the dorp down, and this button is never fired
                  onMouseDown={() => handleAddCourse(currentCourse, elements, saveForUndo)}
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
                  id={'taken'}
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
                  onMouseDown={() => handleAddCourse(currentCourse, elements, saveForUndo)}
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
