import { Box } from '@mui/material';
import AppointGrid from '../AppointmentGrid';
import BookingFilters from './Filters';

export default function BookingPage() {
  return (
    <Box height="100%">
      <BookingFilters />
      <AppointGrid />
    </Box>
  );
}
