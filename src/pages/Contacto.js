import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const Contacto = () => (
  <Container fixed>
    <CssBaseline />
    {/* Estilo adicional para el formulario */}
    <Typography variant="h4" gutterBottom>
      Contáctanos
    </Typography>
    <Box 
      component="form" 
      sx={{ 
        backgroundColor: "white",  // Fondo blanco
        padding: 2,               // Espaciado interno
        borderRadius: 2,          // Bordes redondeados
        boxShadow: 2,              // Sombra para destacar
        marginBottom: 6,// Espaciado con el footer
        maxWidth:"600px",// Ancho máximo en escritorio
        margin:"0 auto", // Centrado horizontal
      }}
    >
      <TextField label="Nombre" fullWidth margin="normal" />
      <TextField label="Correo" fullWidth margin="normal" />
      <TextField label="Mensaje" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="secondary">
        Enviar
      </Button>
    </Box>
    
  </Container>
);

export default Contacto;
