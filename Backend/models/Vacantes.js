const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VacanteSchema = Schema({
    cPuesto: {
        type:String,
        required:true
    },
    iCantidadDisponibles: {
        type:Number,
        required:true,
        default: 1
    },
    iCantidadOcupadas: {
        type:Number,
        required:true,
        default: 0
    },
    cTitulo: {
        type:String,
        required:true
    },
    cDescripcion: {
        type:String,
        required:true
    },
    ConocimientosRequeridos: {
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
    lActivo:{//indica si se puede ver la vacante.
        type:Boolean, 
        default:true
    },
    lDisponible:{//indica si esta disponible la vacante
        type:Boolean, 
        default:true
    }
});

module.exports = mongoose.model('Vacante',VacanteSchema);