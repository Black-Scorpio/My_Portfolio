// src/components/Footer.tsx

import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
    id="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Contact Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
            component="a"
            href="mailto:scorpiogentles@outlook.com"
            sx={{ color: '#fff' }}
            aria-label="Email"
          >
            <EmailIcon /> 
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/ScorpioGentles"
            target="_blank"
            sx={{ color: '#fff' }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Black-Scorpio"
            target="_blank"
            sx={{ color: '#fff' }}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          © 2024 Scorpio Gentles. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
