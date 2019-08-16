const PostulanteController = {};
const PostulanteModel = require('../models/Postulante');

PostulanteController.Nuevo = async (req,res) => {
    const params = req.body;
    const {cNombre, iEdad, cEscolaridad, cEstado, dIngresosRequeridos, cEstadoCivil,
            cIdiomas,cImg,Usuario,Conocimientos,cUrl} = validarRequeridos(params,res);
   
    await PostulanteModel.findOne({cUrl:cUrl},(err,respuesta) => {
        if(err){
            res.status(500).json({ cMensaje: 'Ocurrio un Error...' });  
        } else if (respuesta !== null) {
            res.status(200).json({ cMensaje: `El postulante ${cNombre} ya esta registrado` });
        } else {
            
                    
            let NuvoPostulante = PostulanteModel({
                cNombre: cNombre,
                iEdad: iEdad,
                cEscolaridad:cEscolaridad,
                cEstado:cEstado,
                dIngresosRequeridos:dIngresosRequeridos,
                cEstadoCivil:cEstadoCivil,
                cIdiomas:cIdiomas,
                cImg:cImg,
                Usuario:Usuario,
                Conocimientos:Conocimientos,
                cUrl:cUrl
            });
            NuvoPostulante.save((err, resp) => {
                if(err){
                    res.status(500).json({cMensaje: 'Ocurrio un error al guardar', err});
                } 
                if(resp) {
                    res.status(201).json({status: 'Ok', data: resp});
                } else {
                    res.status(400).json({cMensaje: 'No se creo el postulante'});
                }
            });
               
        }
    });
    
}

PostulanteController.Modificar = async (req,res) => {
    const {id} = req.params;
    const EmpresaModificada = {
            ...req.body
    }
    await PostulanteModel.findByIdAndUpdate(id,{set: EmpresaModificada},{new:true});
}

PostulanteController.ObtenerUnRegistro = async (req,res) => {
    const Empresa = await PostulanteModel.findById(req.params.id);
}

PostulanteController.Inactivar = async function(req,res){

}

PostulanteController.ObtenerTodos = async function(req,res){
    const arrEmpresas = await PostulanteModel.find();
    res.json(arrEmpresas); 
}

function validarRequeridos(oParametros,res){
    const {cNombre, iEdad, dIngresosRequeridos, cEstadoCivil
        ,cImg,Usuario,cUrl}  = oParametros;

    if(cNombre === undefined || cNombre === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cNombre)' })
    }
    if(iEdad === undefined || iEdad === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (iEdad)' })
    }
    if(dIngresosRequeridos === undefined || dIngresosRequeridos === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (dIngresosRequeridos)' })
    }
    if(Usuario === undefined || Usuario === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (Usuario)' })
    }
    if(cUrl === undefined || cUrl === ""){
        res.status(400).json({ cMensaje: 'Hicieron falta datos requeridos. (cUrl)' })
    }
    if(cImg === undefined || cImg === ""){
        oParametros.cImg = "http://api.shephertz.com/images/unity3d/user-management-.png";
    }
    return oParametros;
}


module.exports = PostulanteController;