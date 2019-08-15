const express = require('express');
const router = express.Router();

const CtrEmpresa = require('../Controllers/Empresa.controller');

router.post('/Nuevo',CtrEmpresa.Nuevo);

router.put('/Modificar:/id',CtrEmpresa.Modificar);

router.get('/Recuperar/:id',CtrEmpresa.ObtenerUnRegistro);

router.put('/Inactivar/:id',CtrEmpresa.Inactivar);

router.get('/ObtenerTodos',CtrEmpresa.ObtenerTodos);

module.exports = router;