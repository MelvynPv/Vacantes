require('dotenv').config();
const VacanteController = {};
const VacanteModel = require('../models/Vacantes');
const bcrypt = require('bcrypt');

VacanteController.Nuevo = async (req,res) => {
    const params = req.body;
    const {cPuesto,iCantidadDisponibles,iCantidadOcupadas,dSueldo,cTitulo
        ,cDescripcion,ConocimientosRequeridos,cUrl} = ParametrosSonValidos(params,res)
    
        await VacanteModel.findOne({cUrl:cUrl},(err,respuesta) => {
            if(err){
                res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
            } else if (respuesta !== null) {
                res.status(200).json({ cMensaje: `El puesto ${cPuesto} ya existe en la empresa` });
            } else {
                let NuevaVacante = VacanteModel({
                     cPuesto:cPuesto
                    ,iCantidadDisponibles:iCantidadDisponibles
                    ,iCantidadOcupadas:iCantidadOcupadas
                    ,dSueldo:dSueldo
                    ,cTitulo:cTitulo
                    ,cDescripcion:cDescripcion
                    ,ConocimientosRequeridos:ConocimientosRequeridos
                    ,cUrl:cUrl
                });
                NuevaVacante.save((err, resp) => {
                    if(err){
                        res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                    } 
                    if(resp) {
                        res.status(201).json({status: 'Ok', data: resp});
                    } else {
                        res.status(400).json({cMensaje: 'No se creo la vacante'});
                    }
                });
            }
        });
}

VacanteController.Modificar = async (req,res) => {
    const params = req.body;
    const {id,cNombre} = req.body;
    await VacanteModel.findById({_id:id}, (err,VacanteExistente) =>{
        if(err){
            res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
        } else if (respuesta === null) {
                res.status(200).json({ cMensaje: `No se encotro el usuario a realizar la modificación` });
        }else {
            
            if(cNombre !== undefined && cNombre !== ""){
                VacanteExistente.cNombre = cNombre
            }

            VacanteExistente.dtFechaModificacion = Date.now;
            VacanteExistente.save((err, resp) => {
                if(err){
                    res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                } 
                if(resp) {
                    VacanteExistente.cPassword = ':(';//para retornar
                    res.status(201).json({status: 'Ok', data: resp});
                } else {
                    res.status(400).json({cMensaje: 'No se creo el usuario'});
                }
            });
        }            
        
    });
}

VacanteController.ObtenerUnRegistro = async (req,res) => {
    const {id} = req.body;
    await VacanteModel.findOne({_id:id})
            .them((err,VacanteExistente) =>{
                if (err) {
                    res.status(500).json({ cMensaje: 'Ocurrio un Error' });
                } else if (VacanteExistente === null) {
                    res.status(200).json({ cMensaje: `No se encontro la vacante indicada` });
                } else {
                    res.status(201).json({status: 'Ok', data: VacanteExistente});
                }
            })
            .catch((err) =>{
                res.status(500).json({ cMensaje: 'Ocurrio un Error al buscar la vacante' });
            });
}

VacanteController.Inactivar = async function(req,res){

}

VacanteController.ObtenerTodos = async function(req,res){
    return await VacanteModel.find().populate('AreasConocimiento');
}

function ParametrosSonValidos(oParametros,res){

    const {cPuesto,iCantidadDisponibles,iCantidadOcupadas,dSueldo,cTitulo
        ,cDescripcion,ConocimientosRequeridos,cUrl} = oParametros;
    if(cPuesto === undefined || cPuesto.trim() === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cPuesto)' })
    }
    if(iCantidadDisponibles === undefined || iCantidadDisponibles == ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (iCantidadDisponibles)' })
    }
    if(iCantidadOcupadas === undefined || iCantidadOcupadas == ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (iCantidadOcupadas)' })
    }
    if(dSueldo === undefined || dSueldo == ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (dSueldo)' })
    }
    if(cTitulo === undefined || cTitulo.trim() === ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cTitulo)' })
    }
    if(cDescripcion === undefined || cDescripcion.trim() === ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cDescripcion)' })
    }
    if(ConocimientosRequeridos === undefined || ConocimientosRequeridos.trim() === ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (ConocimientosRequeridos)' })
    }
    if(cUrl === undefined || cUrl.trim() === ""){
         res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cUrl)' })
    }
   
   
    return oParametros;
}

module.exports = VacanteController;