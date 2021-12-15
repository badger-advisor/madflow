import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Stack, Box, Divider } from '@mui/material';
import Switch from '@mui/material/Switch';

import './dnd.css';

const EditNode = ({ open, node, handleClose, onElementsRemove, onSwitch, onGeneratePrereq }) => {
  //Variables related to course data and its status
  const type = node.type;
  const data = node.data;
  const defined = data !== undefined;
  const label = defined ? data['label'] : 'Course unavailable';
  const taken = type === 'courseTaken' || false;
  const description =
    defined && data['description'] !== undefined
      ? data['description']
      : 'No description available for this course.';
  const prereqs =
    defined && data['prerequisites'] !== undefined ? data['prerequisites'].join(', ') : 'None';

  return (
    <Dialog id='edit_node' maxWidth='xs' open={open} onClose={handleClose}>
      <DialogTitle margin='auto'>
        <div>{label}</div>
      </DialogTitle>
      <Divider />
      <DialogContent style={{ height: '150px' }}>
        <Typography variant='body2'>{description}</Typography>
      </DialogContent>
      <Divider />
      <Stack
        marginRight='20px'
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent='flex-start'
      >
        <Box overflow='auto' flex={1} flexDirection='column' display='flex' paddingLeft={2}>
          <Typography>Have you taken this course?</Typography>
        </Box>
        <Typography variant='caption'>Not Taken</Typography>
        <Switch id='switch' checked={taken} onChange={onSwitch} />
        <Typography variant='caption'>Taken</Typography>
      </Stack>
      <Stack
        marginRight='20px'
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent='flex-start'
      >
        <Box
          overflow='auto'
          height='20vh'
          minWidth={300}
          maxWidth={300}
          flexDirection='column'
          display='flex'
          p={2}
        >
          <Typography>Prerequisites:</Typography>
          <Box
            overflow='auto'
            flex={1}
            border='2px solid #dadfe1'
            flexDirection='column'
            display='flex'
            p={2}
          >
            <Typography>{prereqs}</Typography>
          </Box>
        </Box>
        <div>
          <Button
            id={'gen_prereq'}
            sx={{
              marginTop       : 3,
              width           : '100%',
              height          : '100%',
              backgroundColor : '#484848',
              color           : '#ffffff',
              '&:hover'       : {
                backgroundColor : '#ffffff',
                color           : '#484848'
              }
            }}
            variant='contained'
            size='small'
            onClick={() => onGeneratePrereq(data)}
          >
            Autofill
          </Button>
          <Button
            id={'remove_btn'}
            sx={{
              marginTop       : 3,
              width           : '100%',
              height          : '100%',
              backgroundColor : '#a33d3d',
              color           : '#ffffff',
              '&:hover'       : {
                backgroundColor : '#ffffff',
                color           : '#a33d3d'
              }
            }}
            variant='contained'
            size='small'
            onClick={onElementsRemove}
          >
            Remove
          </Button>
        </div>
      </Stack>
    </Dialog>
  );
};

export default EditNode;
