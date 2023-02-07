import AccountCircle from '@mui/icons-material/AccountCircle';
import Key from '@mui/icons-material/Key';
import { Box, Button, Grid, OutlinedInput, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Stack } from '@mui/system';
import React, { useContext, useState } from 'react';
import { AuthContext } from 'renderer/context/AuthContext';
import loginImage from '../assets/login-art.svg';

export default function Login() {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(username, password);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      sx={{ height: '100vh', width: '100vw' }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#EBF3F3', height: '90%', width: '45%' }}
      >
        <img src={loginImage} alt="login art" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: 'white', height: '90%', width: '45%' }}
      >
        <Stack>
          <Typography variant="h4">Welcome to Telemedicine!</Typography>
          <Typography variant="subtitle1">
            Let&apos;s start a quick login there...
          </Typography>
          <OutlinedInput
            sx={{
              marginTop: 3,
              borderRadius: '6px',
              backgroundColor: '#FCFCFC',
            }}
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <OutlinedInput
            sx={{
              marginTop: 2,
              borderRadius: '6px',
              backgroundColor: '#FCFCFC',
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            }
          />
          <Typography
            variant="subtitle2"
            sx={{ marginTop: 3, color: '#39BCC0', cursor: 'pointer' }}
            fontWeight="bold"
            align="right"
          >
            Forgot Password?
          </Typography>
          <Button
            sx={{
              borderRadius: 60,
              marginTop: 8,
              height: 60,
              boxShadow: '0px 0px 0px 0px',
            }}
            type="submit"
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
          >
            <Typography variant="button" fontWeight="bold" color="white">
              Login Now
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
