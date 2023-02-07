import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { FaWrench } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { HiCalendar } from 'react-icons/hi';
import { RiHospitalFill } from 'react-icons/ri';
import { TbStethoscope } from 'react-icons/tb';

const SIDEBAR_ITEMS = [
  {
    title: 'Process Booking',
    icon: <HiCalendar />,
    path: '/dashboard',
  },
  {
    title: 'Medical Center',
    icon: <RiHospitalFill />,
    path: '/users',
  },
  {
    title: 'Doctor',
    icon: <TbStethoscope />,
    path: '/products',
  },
  {
    title: 'Institution',
    icon: <GrCertificate />,
    path: '/reports',
  },
  {
    title: 'Expense Claims',
    icon: <GrCertificate />,
    path: '/integrations',
  },
  {
    title: 'Medical Claims',
    icon: <GrCertificate />,
    path: '/integrations',
  },
  {
    title: 'Administration',
    icon: <FaWrench />,
    path: '/integrations',
  },
];

export default function Sidebar() {
  const selected = SIDEBAR_ITEMS[0];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '13px',
        bgcolor: 'white',
        color: 'primary.contrastText',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '13px',
          bgcolor: 'white',
          color: 'secondary.main',
          p: 2,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            mb: 2,
          }}
          src="https://images.unsplash.com/photo-1629209840008-8e2b2e2b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Typography variant="h5" color="#3E3E3E" fontWeight="bold">
          John Doe
        </Typography>
        <Typography variant="body2" color="primary.main" fontWeight="bold">
          User Account
        </Typography>
      </Box>
      <Stack p={2} spacing={2}>
        {SIDEBAR_ITEMS.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              borderRadius: '13px',
              bgcolor: selected === item ? 'primary.main' : 'white',
              color:
                selected === item ? 'primary.contrastText' : 'secondary.main',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              },
              p: 2,
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={2} display="flex" alignItems="center">
                {item.icon}
              </Grid>
              <Grid item xs={10}>
                <span>{item.title}</span>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
