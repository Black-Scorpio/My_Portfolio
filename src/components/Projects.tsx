// src/components/Projects.tsx

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ 
        padding: 4, 
        backgroundColor: '#A3C1AD',
        textAlign: 'center'
      }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" 
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          fontSize: { xs: '2rem', md: '3rem' },
          paddingTop: '64px'
          
      }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2,
                backgroundColor: '#B8D8C0', // Slightly lighter green color for the project boxes
                border: '1px solid #8FA98F', // Soft border
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
              }}
            >
              <Typography variant="h5" component="h3">
                Bookmark Extension
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lightweight Application made with JavaScript, CSS 
                &, HTML to save and manage tabs
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2,
                backgroundColor: '#B8D8C0', // Slightly lighter green color for the project boxes
                border: '1px solid #8FA98F', // Soft border
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
              }}
            >
              <Typography variant="h5" component="h3">
                MyFinance
              </Typography>
              <Typography variant="body1" gutterBottom>
                Track and Manage your finances, made with 
                Java Spring Boot & Postgresql
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2,
                backgroundColor: '#B8D8C0', // Slightly lighter green color for the project boxes
                border: '1px solid #8FA98F', // Soft border
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
              }}
            >
              <Typography variant="h5" component="h3">
                Quiz Whiz
              </Typography>
              <Typography variant="body1" gutterBottom>
                Collaborative Application built through Swift StoryboardUI
                and the use of Github/Git
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2,
                backgroundColor: '#B8D8C0', // Slightly lighter green color for the project boxes
                border: '1px solid #8FA98F', // Soft border
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
              }}
            >
              <Typography variant="h5" component="h3">
                Weather Alert
              </Typography>
              <Typography variant="body1" gutterBottom>
                Python Application to send email 
                alerts based on specific weather patterns!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2,
                backgroundColor: '#B8D8C0',
                border: '1px solid #8FA98F', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              }}
            >
              <Typography variant="h5" component="h3">
                Kesk Chat
              </Typography>
              <Typography variant="body1" gutterBottom>
                Built with React and socket.io, a real time chat room.
              </Typography>
            </Paper>
          </Grid>
          {/* Add more projects as needed */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
