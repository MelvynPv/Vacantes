const EmpresaController = {};
const EmpresaModel = require('../models/Empresa');

EmpresaController.Nuevo = async (req,res) => {
    const params = req.body;
    const {cNombreEmpresa, cDescripcion, cRFC, Usuario, cUrl, cImagen} = validarRequeridos(params,res);
   
    await EmpresaModel.findOne({cUrl:cUrl},(err,respuesta) => {
        if(err){
            res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
        } else if (respuesta !== null) {
            res.status(200).json({ cMensaje: `La Empresa ${cNombreEmpresa} ya esta registrada` });
        } else {
            
                    
            let NuevaEmpresa = EmpresaModel({
                cNombreEmpresa: cNombreEmpresa,
                cDescripcion: cDescripcion,
                cRFC:cRFC,
                cImagen:cImagen,
                Usuario:Usuario,
                cUrl:cUrl
            });
            NuevaEmpresa.save((err, resp) => {
                if(err){
                    res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                } 
                if(resp) {
                    res.status(201).json({status: 'Ok', data: resp});
                } else {
                    res.status(400).json({cMensaje: 'No se creo la empresa'});
                }
            });
               
        }
    });
    
}

EmpresaController.Modificar = async (req,res) => {
    const {id} = req.params;
    const EmpresaModificada = {
            ...req.body
    }
    await EmpresaModel.findByIdAndUpdate(id,{set: EmpresaModificada},{new:true});
}

EmpresaController.ObtenerUnRegistro = async (req,res) => {
    const Empresa = await EmpresaModel.findById(req.params.id);
}

EmpresaController.Inactivar = async function(req,res){

}

EmpresaController.ObtenerTodos = async function(req,res){
    const arrEmpresas = await EmpresaModel.find();
    res.json(arrEmpresas); 
}

function validarRequeridos(oParametros,res){
    const {cNombreEmpresa, cDescripcion, cRFC, Usuario, cUrl,cImagen} = oParametros;

    if(cNombreEmpresa === undefined || cNombreEmpresa === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cNombreEmpresa)' })
    }
    if(cDescripcion === undefined || cDescripcion === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cDescripcion)' })
    }
    if(cRFC === undefined || cRFC === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cRFC)' })
    }
    if(Usuario === undefined || Usuario === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (Usuario)' })
    }
    if(cUrl === undefined || cUrl === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cUrl)' })
    }
    if(cImagen === undefined || cImagen === ""){
        oParametros.cImagen = "http://api.shephertz.com/images/unity3d/user-management-.png";
    }
    return oParametros;
}


module.exports = EmpresaController;