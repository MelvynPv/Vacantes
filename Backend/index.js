require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Settings
app.set('PORT',process.env.PORT || process.env.PORT);


//start the server
app.listen(app.get('PORT'),() =>{
    console.log(`Servidor escuchado en port ${app.get('PORT')}`);
});