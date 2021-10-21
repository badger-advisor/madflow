import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//Later a list of courses will be fetched from the DB
const courseOptions = [
  {label: 'CS 200'},
  {label: 'CS 252'},
  {label: 'CS 300'},
  {label: 'CS 400'},
  {label: 'CS 577'},
]
const Searchbar = () => {
  return (
    <Autocomplete
    disablePortal
    options={courseOptions}
    sx={{ width: 300}}
    renderInput={(params) => <TextField {...params} label="Search to add a course..." />}
  />
  )
}

export default Searchbar
