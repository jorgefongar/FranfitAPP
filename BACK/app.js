const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/api/users', userRoutes);

// Configuración para servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  // Establecer la carpeta estática
  app.use(express.static('client/build'));

  // Cargar la página de inicio para todas las demás rutas
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
