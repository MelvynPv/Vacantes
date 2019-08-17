const express = require('express');
const router = express.Router();

const CtrVacante = require('../Controllers/Vacante.controller');

router.post('/Nuevo',CtrVacante.Nuevo);

router.put('/Modificar:/id',CtrVacante.Modificar);

router.get('/Recuperar/:id',CtrVacante.ObtenerUnRegistro);

router.put('/Inactivar/:id',CtrVacante.Inactivar);

router.get('/ObtenerTodos',CtrVacante.ObtenerTodos);



module.exports = router;