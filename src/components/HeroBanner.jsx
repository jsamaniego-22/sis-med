import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/public/hero_banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido al Sistema de Citas Médicas
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Agenda tu cita de manera rápida y sencilla
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Programar Cita
        </Button>
      </Container>
    </Box>
  );
};

export default HeroBanner;