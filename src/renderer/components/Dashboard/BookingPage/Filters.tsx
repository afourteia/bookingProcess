import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import { BiSearch } from 'react-icons/bi';
import CustomCheckbox from '../../CustomCheckbox';

export default function BookingFilters() {
  return (
    <Box sx={{ width: '100%', borderRadius: '13px', bgcolor: 'white', p: 2 }}>
      <Stack>
        <h4>Filters</h4>
        <Grid display="flex" flexDirection="row" justifyContent="space-between">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <CustomCheckbox
                label="Booking Date Range"
                checked
                onChange={() => {}}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomCheckbox
                label="Processed Request"
                checked
                onChange={() => {}}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomCheckbox
                label="Unprocessed Request"
                checked
                onChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              type="search"
              fullWidth
              placeholder="Search here..."
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <BiSearch />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Stack>
      <Stack sx={{ mt: 2 }} direction="row">
        <Grid>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Stack>
    </Box>
  );
}
