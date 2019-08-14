
const mongoose = require('mongoose');

//Conection DB
mongoose.connect(process.env.mongoUrl, {useNewUrlParser: true},(err) =>{
    if(!err){
        console.log('Mongo Conectado correctamente');
    }else{
        console.log(`Error al conectar a mongoose: ${err}`);
    }
});
module.exports = mongoose;