// Backend/app.js
const express = require ("express");
const app = express ();
const swaggerUi = require("swagger-ui-express");
const yaml = require ("js-yaml");
const fs = require ("fs");
const dataroutes = require ("./datacontroler");
const cors = require ("cors");
const puerto = 300;

const swaggerDocument = yaml.load(fs.readFileSync("./swagger.yaml", "utf-8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(cors());
app.use("/", dataroutes);

app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// import express from 'express';
// import cors from 'cors';
// import dataRoutes from './dataroutes.js';

// const app = express();
// const PORT = 4000;

// // Middleware para manejar solicitudes JSON y de URL codificadas
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Rutas de la API
// app.use('/api', dataRoutes); // Prefijo de ruta para las rutas de datos

// // Manejo de errores
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Server is running on port http://localhost:${PORT}`);
// });
