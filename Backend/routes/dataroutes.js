// Backend/routes/dataroutes.js
import express from 'express';
import {  getAllUsuario } from '../controllers/datacontroler.js';
import { pool } from '../config/db.js';


const router = express.Router();


// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await getAllUsuario();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



export default router;