// src/components/About.tsx

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ 
      padding: 6,
      textAlign: 'center',
      background: 'linear-gradient(#D9C4A1, #A3C1AD)' 
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
          About Me
        </Typography>
        <Typography variant="body1" paragraph >
        Hi, I'm Scorpio! I am a software developer with a passion for creating innovative and efficient applications. 
        With experience in backend, frontend, and database technologies, 
        I enjoy building robust systems and solving complex problems. My work spans across various tools and languages, 
        and I am always eager to learn and adopt new technologies to enhance my skill set.
        </Typography>
        <Typography variant="body1" paragraph>
        I thrive on new challenges and continuously seek opportunities to grow as a developer. 
        In my spare time, I love exploring new tech trends and experimenting with different technologies to see how they work.
        </Typography>
        <Typography variant="body1" paragraph>
          Beyond coding, I enjoy dancing, cooking, reading, and of course watching Family Feud!
          My goal is to create impactful software solutions that make a difference in the world and prove to myself that I was able to!
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
