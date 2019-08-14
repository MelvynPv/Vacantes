const express = require('express');
const router = express.Router();

router.get('/Nuevo',(req,res) => {
    res.send('Esta es una nueva empresa');
});

router.get('/Modificar',(req,res) => {
    res.send('Estas modificando una empresa');
});

router.get('/Recuperar',(req,res) => {
    res.send('Estas Recuperando una emprsa');
});

router.get('/Inactivar',(req,res) => {
    res.send('Estas Inactivar un empresa');
});


module.exports = router;