import { createTheme } from '@mui/material/styles'

const palette = {
  primary: {
    main: '#1976d2',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#dc004e',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f4f6f8',
    paper: '#ffffff',
  },
  error: {
    main: '#f44336',
  },
  warning: {
    main: '#ff9800',
  },
  info: {
    main: '#2196f3',
  },
  success: {
    main: '#4caf50',
  },
  text: {
    primary: '#333333',
    secondary: '#757575',
    disabled: '#bdbdbd',
  },
  divider: '#e0e0e0',
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // You can define other typography styles as well
  },
  shape: {
    borderRadius: 8,
  },
  // You can add more customizations here (e.g., spacing, breakpoints, etc.)
})

export default theme
