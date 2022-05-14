/* eslint-disable  */
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
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: 26,
      fontWeight: 500,
      color: '#54595f',
      letterSpacing: 3
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
      color: '#54595f',
    },
    h3: {
      fontSize: 22,
      fontWeight: 500,
      color: '#54595f',
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
      color: '#54595f',
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
      color: '#54595f',
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      color: '#54595f',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: '#54595f',
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
      color: '#54595f',
    }
  },
});

export default theme;
