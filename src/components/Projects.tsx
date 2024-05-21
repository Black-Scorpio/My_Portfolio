// src/components/Projects.tsx

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material';

// Define the project titles type
type ProjectTitle = 'Quiz Whiz' | 'Bookmark Extension' | 'MyFinance' | 'Kesk Chat' | 'Turtle Crossing';

// Create the project links object with the defined type
const projectLinks: Record<ProjectTitle, string> = {
  'Quiz Whiz': 'https://github.com/Black-Scorpio/Quiz_Whiz',
  'Bookmark Extension': 'https://github.com/Black-Scorpio/BookmarkExtension',
  'MyFinance': 'https://github.com/Black-Scorpio/my-finance',
  'Kesk Chat': 'https://github.com/kevyndowner/KeskChat_MainVersion',
  'Turtle Crossing': 'https://github.com/Black-Scorpio/Turtle-Crossing'
};

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
          paddingTop: '64px',
          color: '#253F38'
      }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {Object.keys(projectLinks).map((projectTitle) => (
            <Grid item xs={12} sm={6} key={projectTitle}>
              <Link 
                href={projectLinks[projectTitle as ProjectTitle]} 
                target="_blank" 
                rel="noopener" 
                underline="none" 
                sx={{ 
                  display: 'block',
                  '&:hover': {
                    textDecoration: 'none'
                  }
                }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    padding: 2,
                    backgroundColor: '#B8D8C0',
                    border: '1px solid #8FA98F', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    cursor: 'pointer' 
                  }}
                >
                  <Typography variant="h5" component="h3">
                    {projectTitle}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {projectTitle === 'Bookmark Extension' && 'Lightweight Application made with JavaScript, CSS, & HTML to save and manage tabs.'}
                    {projectTitle === 'MyFinance' && 'Track and Manage your finances, made with Java Spring Boot & PostgreSQL.'}
                    {projectTitle === 'Quiz Whiz' && 'Collaborative Application built through Swift StoryboardUI and the use of Github/Git.'}
                    {projectTitle === 'Turtle Crossing' && 'A python implemented turtle crossing game from the starting position to the finish line while avoiding the moving cars!'}
                    {projectTitle === 'Kesk Chat' && 'Built with React and socket.io, a real time chat room.'}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
