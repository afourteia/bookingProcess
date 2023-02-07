import { Box, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#E5E5E5',
        height: 'calc(100vh - 104px)',
        width: '100%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
