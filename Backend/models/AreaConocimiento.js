const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreasConomientoSchema = Schema({
    cNombre:{type: String, required:true},
    cTipo:{
        type:String,
        default:"G", //G -> general, P -> Programación, A -> Administrativo
        required:true
    },
    dtFechaCreacion:{type:Date, default:Date.now},
    dtFechaModificacion:{type:Date, default:Date.now},
    lActivo:{type:Boolean, default:true},
    cUrl:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('AreasConocimiento',AreasConomientoSchema);