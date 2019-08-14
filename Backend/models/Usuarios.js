const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = Schema({
    cNombre: {
        type:String,
        required:true
    },
    cPassword:{
        type: String,
        required:true
    },
    cCorreo:{
        type:String,
        required:true
    },
    cImagen:{
        type:String,
        default:''
    },
    cTipoUsuario: {
        type:String,
        required:true
    },
    dtFechaCreacion:{
        type:Date, 
        default:Date.now
    },
    dtFechaModificacion:{
        type:Date, 
        default:Date.now
    },
    lActivo:{
        type:Boolean, 
        default:true
    }
});

const UsuarioModel = mongoose.model('Usuario',Usuario);
module.exports = {UsuarioModel};