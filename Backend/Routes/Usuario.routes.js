const express = require('express');
const router = express.Router();

const CtrUsuario = require('../Controllers/Usuario.controller');

router.post('/Nuevo',CtrUsuario.Nuevo);

router.put('/Modificar:/id',CtrUsuario.Modificar);

router.get('/Recuperar/:id',CtrUsuario.ObtenerUnRegistro);

router.put('/Inactivar/:id',CtrUsuario.Inactivar);

router.get('/ObtenerTodos',CtrUsuario.ObtenerTodos);

router.post('/Login',CtrUsuario.IniciarSesion);


module.exports = router;