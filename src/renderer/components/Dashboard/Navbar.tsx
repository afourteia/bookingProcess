import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { BiSearch } from 'react-icons/bi';
import { RiNotification2Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import logoImg from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <Box p={3}>
      <Grid container alignItems="space" justifyContent="space-between">
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <RxCross2 />
            </IconButton>
            <img src={logoImg} alt="logo" />
          </Stack>
        </Grid>
        <Grid
          container
          spacing={3}
          xs={6}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-search"
              placeholder="Search here..."
              type="search"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <BiSearch />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <RiNotification2Fill size={24} />
          </Grid>
          <Grid item>
            <Typography variant="body1">Hi, $user</Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ width: 48, height: 48 }}
              src="https://images.unsplash.com/photo-1629209840008-8e2b2e2b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
