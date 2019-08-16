const UploadController = {};
UploadController.Upload =(req, res)=> {
    console.log(req);
    if (!req.file) {
      console.log("No file is available!");
      return res.send({
        success: false
      });
  
    } else {
     
      let urlImagen='http://localhost:3000/uploads/'+req.file.filename;
      console.log(urlImagen);
      return res.send({
        success: true,
        URL:urlImagen
      })
    }
  }


  module.exports = UploadController;