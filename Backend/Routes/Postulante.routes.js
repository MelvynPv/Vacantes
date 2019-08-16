const express = require('express');
const router = express.Router();

const CtrPostulante = require('../Controllers/Postulante.controller');

router.post('/Nuevo',CtrPostulante.Nuevo);

router.put('/Modificar:/id',CtrPostulante.Modificar);

router.get('/Recuperar/:id',CtrPostulante.ObtenerUnRegistro);

router.put('/Inactivar/:id',CtrPostulante.Inactivar);

router.get('/ObtenerTodos',CtrPostulante.ObtenerTodos);

module.exports = router;