import * as React from 'react';
import {TextField, Autocomplete} from '@mui/material/';
import AddNodeDialog from './AddNodeDialog'

//Later a list of courses will be fetched from the DB
const courseOptions = [
  {courseID: 1, label: 'CS 200', courseInfo: 'INFO for CS 200'},
  {courseID: 2, label: 'CS 252', courseInfo: 'INFO for CS 252'},
  {courseID: 3, label: 'CS 300', courseInfo: 'INFO for CS 300'},
  {courseID: 4, label: 'CS 400', courseInfo: 'INFO for CS 400'},
  {courseID: 5, label: 'CS 577', courseInfo: 'INFO for CS 577'},
]

const Searchbar = () => {
  return (
    <div><Autocomplete
    disablePortal
    options={courseOptions}
    sx={{ width: 300}}
    renderInput={(params) => <TextField {...params} label="Search to add a course..." />} />
    <AddNodeDialog></AddNodeDialog>
    </div>
  )
};

export default Searchbar
