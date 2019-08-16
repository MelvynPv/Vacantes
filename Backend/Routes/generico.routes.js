const express = require('express');
const multer = require('multer')
const router = express.Router();
const CtrUpload = require('../Controllers/Upload.controller');
const PATH = './uploads';



let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    
    let name=file.originalname.split(".");

    cb(null, file.fieldname + '-' + Date.now()+'.'+name[1])
  }
});
let upload = multer({
    storage: storage
  });


router.post('/Upload',upload.single('image'),CtrUpload.Upload);
module.exports = router;