import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { RECOMMEND_BAR_WIDTH as width } from '../../pages/Graph';
import Sidebar from './Sidebar';
// import DrawerHeader from './HeaderSpacer';

const DrawerHeader = styled('div')(({ theme }) => ({
  display        : 'flex',
  alignItems     : 'center',
  padding        : theme.spacing(0, 1),
  // necessary for ReactFlow view to be below the app bar
  ...theme.mixins.toolbar,
  justifyContent : 'flex-start'
}));

const RecommendBar = ({ handleDrawer, open }) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width,
        flexShrink           : 0,
        '& .MuiDrawer-paper' : {
          width
        }
      }}
      variant='persistent'
      anchor='right'
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawer}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography>Suggested Courses</Typography>
      </DrawerHeader>
      <Divider />
      <Typography align='center'>Drag & drop into your Flow</Typography>
      <Divider />
      <Sidebar />
      <Divider />
    </Drawer>
  );
};

export default RecommendBar;
