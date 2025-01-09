import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#393e5a', // Color de fondo del footer
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        {/* Redes sociales */}
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://tiktok.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <img
            src="/tiktok.svg"
            alt="TikTok"
            style={{ width: '24px', height: '24px',filter: 'invert(100%)', }}
          />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      {/* Logo */}
      <Box sx={{ mb: 2 }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={{ width: '100px', borderRadius: '50%' }} 
        />
      </Box>

      {/* Texto */}
      <Typography variant="body2">
        © 2024 - Canal TV Noticias. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
