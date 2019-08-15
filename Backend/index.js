require('dotenv').config()
const express = require('express');
const {mongoose} = require('./database');//connection database
const app = express();


//Settings
app.set('PORT',process.env.PORT || 3000);

//middlewares
app.use(express.json());

//Routes
app.use('/Empresa',require('./Routes/Empresa.routes'));
app.use('/Usuario',require('./Routes/Usuario.routes'));


//start the server
app.listen(app.get('PORT'),() =>{
    console.log(`Servidor escuchado en port ${app.get('PORT')}`);
});