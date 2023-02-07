import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#39BCC0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#999999',
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'blue',
          '&.Mui-checked': {
            border: '1px solid green',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 60,
          padding: '0 20px',
          backgroundColor: '#F5F5F5',
          '&.MuiSelect-select': {
            borderRadius: 10,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `4px solid ${theme.palette.primary.main}`,
        }),
      },
    },
  },
});

export default theme;
