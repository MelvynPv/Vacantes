const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostulanteSchema = Schema({
    cNombre:{
        type: String,
        required:true
    },
    iEdad:{
        type:Number,
        required:true
    },
    cEscolaridad:{
        type:String,
        default: ""
    },
    cEstado:{
        type:String,
        default: ""
    },
    dIngresosRequeridos:{
        type:mongoose.decimal128,
        required:true
    },
    cEstadoCivil:{
        type:String,
        default: ""
    },
    cIdiomas:{
        type:[String],
        default: [""]
    },
    cImg:{
        type:String,
        default: ""
    },
    Usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    },
    Conocimientos: {
        type: Schema.Types.ObjectId,
        ref:'AreasConocimiento'
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
    },
    lSeleccionado:{//indica si fue seleccionado para una vacante
        type: Boolean,
        default: false
    },
    cUrl:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Postulante',PostulanteSchema);