import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000', // Ciemny czarny kolor dla głównych elementów
    },
    secondary: {
      main: '#d32f2f', // Intensywny czerwony kolor dla akcentów
    },
    background: {
      default: '#121212', // Bardzo ciemnoszary kolor tła
      paper: '#1e1e1e', // Ciemnoszary kolor dla kart
    },
    text: {
      primary: '#ffffff', // Biały kolor tekstu
      secondary: '#b0bec5', // Jasnoszary kolor tekstu
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem', // Example: 48px
      color: '#ffffff', // Biały kolor nagłówków
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem', // Example: 36px
      color: '#ffffff', // Biały kolor nagłówków
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.875rem', // Example: 30px
      color: '#ffffff', // Biały kolor nagłówków
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem', // Example: 24px
      color: '#ffffff', // Biały kolor nagłówków
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem', // Example: 20px
      color: '#ffffff', // Biały kolor nagłówków
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem', // Example: 16px
      color: '#ffffff', // Biały kolor nagłówków
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#5c0a0a', // Ciemny bordowy kolor nagłówka
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#5c0a0a', // Ciemny bordowy kolor dla paska bocznego
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#ffffff', // Biały kolor tekstu w menu
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#d32f2f', // Czerwony kolor przycisków
          color: '#ffffff', // Biały kolor tekstu na przyciskach
          '&:hover': {
            backgroundColor: '#9a0007', // Ciemniejszy czerwony na hover
          },
        },
      },
    },
  },
});

export default theme;
