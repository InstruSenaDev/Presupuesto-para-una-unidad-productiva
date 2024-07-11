const express = require('express');
const app = express();
const port = 3022;

// Importa tu controlador
const rolesController = require('./controllers/rolesController');

// Define la ruta
app.get('/roles', rolesController.getRoles);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

