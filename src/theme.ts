// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Slab, serif',
    body1: {
      fontFamily: 'Roboto Slab, serif',
    },
    h4: {
      fontFamily: 'Roboto Slab, serif',
    },
    // Add overrides for other typography variants as needed
  },
});

export default theme;
