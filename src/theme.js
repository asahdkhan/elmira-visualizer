import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4860CF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#4D507B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    h1: {
      fontSize: 28,
      fontWeight: 700,
      color: 'blue',
    },
  },
});

export default theme;
