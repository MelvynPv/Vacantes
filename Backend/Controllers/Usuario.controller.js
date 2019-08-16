require('dotenv').config();
const UsuarioController = {};
const UsuarioModel = require('../models/Usuarios');
const bcrypt = require('bcrypt');

UsuarioController.Nuevo = async (req,res) => {
    const params = req.body;

    if (ParametrosSonValidos(params)){
        await UsuarioModel.findOne({cCorreo:params.cCorreo},(err,respuesta) => {
            if(err){
                res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
            } else if (respuesta !== null) {
                res.status(200).json({ cMensaje: `El correo ${params.cCorreo} ya esta en uso` });
            } else {
                bcrypt.genSalt(10, function(err, salt) {
        
                    bcrypt.hash(params.cPassword, salt, function(err, hash) {
                        
                        let NuevoUsuario = UsuarioModel({
                            cNombre: params.cNombre,
                            cPassword: hash,
                            cCorreo: params.cCorreo,
                            cTipoUsuario: params.cTipoUsuario
                        });
                        NuevoUsuario.save((err, resp) => {
                            if(err){
                                res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                            } 
                            if(resp) {
                                NuevoUsuario.cPassword = ':(';//para retornar
                                res.status(201).json({status: 'Ok', data: resp});
                            } else {
                                res.status(400).json({cMensaje: 'No se creo el usuario'});
                            }
                        });
                    });
                });
            }
        });
    }else{
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos.' })
    }
}

UsuarioController.Modificar = async (req,res) => {
    const params = req.body;
    const {id,cNombre} = req.body;
    await UsuarioModel.findById({_id:id}, (err,UsuarioExistente) =>{
        if(err){
            res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
        } else if (respuesta === null) {
                res.status(200).json({ cMensaje: `No se encotro el usuario a realizar la modificación` });
        }else {
            
            if(cNombre !== undefined && cNombre !== ""){
                UsuarioExistente.cNombre = cNombre
            }

            UsuarioExistente.dtFechaModificacion = Date.now;
            UsuarioExistente.save((err, resp) => {
                if(err){
                    res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                } 
                if(resp) {
                    UsuarioExistente.cPassword = ':(';//para retornar
                    res.status(201).json({status: 'Ok', data: resp});
                } else {
                    res.status(400).json({cMensaje: 'No se creo el usuario'});
                }
            });
        }            
        
    });
}

UsuarioController.ObtenerUnRegistro = async (req,res) => {
    const {id} = req.body;
    await UsuarioModel.findOne({_id:id})
            .them((err,UsuarioExistente) =>{
                if (err) {
                    res.status(500).json({ message: 'Ocurrio un Error' });
                } else if (respuesta === null) {
                    res.status(200).json({ message: `No se encontro el usuario indicado` });
                } else {
                    res.status(201).json({status: 'Ok', data: UsuarioExistente});
                }
            })
            .catch((err) =>{
                res.status(500).json({ message: 'Ocurrio un Error al buscar el usuario' });
            });
}

UsuarioController.Inactivar = async function(req,res){

}

UsuarioController.ObtenerTodos = async function(req,res){
  
}

function ParametrosSonValidos(oParametros,lEsModificacion = false){
    const {cNombre,cPassword,cCorreo,cTipoUsuario} = oParametros;
    if(cNombre === undefined || cNombre.trim() === ""){
        return false;
    }
    if(cPassword === undefined || cPassword.trim() === ""){
        return false;
    }
    if((cCorreo === undefined || cCorreo.trim() === "") && !lEsModificacion){
        return false;
    }
    if((cTipoUsuario === undefined || cTipoUsuario.trim() === "") && !lEsModificacion){
        return false;
    }

    return true;
}

/*function EncriptarContrasenia(cPassword,res){
    bcrypt.genSalt(10, function(err, salt) {
        
        bcrypt.hash(cPassword, salt, function(err, hash) {
            
            return hash
        });
    });


}*/
module.exports = UsuarioController;