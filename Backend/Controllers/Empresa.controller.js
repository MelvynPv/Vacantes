const EmpresaController = {};
const EmpresaModel = require('../models/Empresa');

EmpresaController.Nuevo = async (req,res) => {
    const params = req.body;

    
    const NuevaEmpresa = new EmpresaModel(req.body);
    await NuevaEmpresa.save();
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

module.exports = EmpresaController;