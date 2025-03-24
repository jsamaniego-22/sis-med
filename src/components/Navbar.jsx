import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Citas Médicas
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Historial</Button>
          <Button color="inherit">Programar Cita</Button>
          <Button color="inherit">Registrarse</Button>
          <Button color="inherit">Iniciar Sesión</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;