// src/components/Technologies.tsx

import React from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';

const technologies = [
  'Python',
  'Java',
  'Airflow',
  'Quicksight',
  'Spring Boot',
  'PostgreSQL',
  'AWS',
  'React',
  'TypeScript',
  'MUI (Material-UI)',
  'MySQL',
  'GitHub',
  'Node.js'
];

const Technologies: React.FC = () => {
  return (
    <Box
      id="technologies"
      sx={{
        padding: 4,
        background: 'linear-gradient(#F3EAD8, #D9C4A1)',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" 
        gutterBottom
        sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontSize: { xs: '2rem', md: '3rem' },
            paddingTop: '64px'
        }}>
          Technologies I Work With
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {technologies.map((tech) => (
            <Grid item key={tech}>
              <Chip 
              label={tech}
                color="primary"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' }, 
                  padding: { xs: '0.5rem', md: '0.75rem' }, 
                  height: 'auto', 
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
