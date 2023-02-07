import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import CustomCheckbox from '../../CustomCheckbox';

export default function BookingFilters() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 60,
                  padding: '0 20px',
                  backgroundColor: '#F5F5F5',
                },
              }}
              variant="outlined"
              className="searchbar"
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
      <Box my={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Typography variant="body1" color="secondary.main" sx={{ mb: 1 }}>
                Date Range
              </Typography>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>

                <Grid item>
                  <Typography variant="body1">To</Typography>
                </Grid>

                <Grid item>
                  <DatePicker
                    value={endDate}
                    onChange={setEndDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="secondary.main" sx={{ mb: 1 }}>
                Sort by Booking Date
              </Typography>
              <Select fullWidth>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="secondary.main" sx={{ mb: 1 }}>
                Search list of Health centers
              </Typography>
              <Select fullWidth>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
