// src/components/Introduction.tsx

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Introduction: React.FC = () => {
  return (
    <Box
      id="introduction"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/portfolio-back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        paddingTop: '64px'
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          Scorpio Gentles
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          Software Developer
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          Innovate, break, fix, repeat.
        </Typography>
      </Container>
    </Box>
  );
};

export default Introduction;
