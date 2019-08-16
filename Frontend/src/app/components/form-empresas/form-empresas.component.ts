import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';
import Swal from 'sweetalert2'
import { async } from 'q';
@Component({
  selector: 'app-form-empresas',
  templateUrl: './form-empresas.component.html',
  styles: []
})
export class FormEmpresasComponent implements OnInit {
  postForm: FormGroup
  data;
  cTituloform="Agregar Empresa";
  cUrl='';
  Entidad;
  datosUsuario;
  selectedFile: File;
  constructor( private actvdRoute: ActivatedRoute,private router: Router,private srvEntidad: EmpresasService) { 
    this.postForm = new FormGroup({
      cNombreEmpresa: new FormControl('', [Validators.required]),
      cRFC:new FormControl('', [Validators.required]),
      cUrl:new FormControl('', [Validators.required]),
      cDescripcion:new FormControl('', [Validators.required]),
      Usuario:new FormControl(''),
      cImagen:new FormControl(''),
    })

   }

  ngOnInit() {
    this.datosUsuario=JSON.parse(localStorage.getItem('dataUsuarios'));
    

    this.cUrl = this.actvdRoute.snapshot.paramMap.get('cUrl');
  
    if(this.cUrl != null && this.cUrl != ''){
      this.setForm(this.cUrl);
    }

  }

  setForm(cUrl) {
    this.cTituloform = "Actualizar Empresa";
    this.Entidad=this.srvEntidad.ObtenerEmpresaByUrl(cUrl);
    this.postForm.get("cNombreEmpresa").setValue(this.Entidad.cNombreEmpresa);
    this.postForm.get("cRFC").setValue(this.Entidad.cRFC);
    this.postForm.get("cUrl").setValue(this.Entidad.cUrl);
    this.postForm.get("cDescripcion").setValue(this.Entidad.cDescripcion);
  }

  RegresarLista()
  {
    this.router.navigate(['./vacantes'])
  }

  createEntidad() {
   
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.srvEntidad.upload(uploadData).subscribe((event:any) => {
     
      console.log(event)
      this.postForm.get("cImagen").setValue(event.URL);
      console.log(this.postForm.value);
      this.postForm.get("Usuario").setValue({"_id":this.datosUsuario._id});
      this.srvEntidad.guardarEntidad(this.postForm.value)
        .subscribe( res => {
          Swal.fire(
            'Good job!',
            'El Registro se ha Guardado correctamente',
            'success'
          )
        })      
    }, (err) => {
      console.log(err);
    });

    
   

    
  }

  urlSeo(event: any)
  {
    let name=event.target.value;
    name = name.toLowerCase(); // lowercase
    name = name.replace(/^\s+|\s+$/g, ''); // remove leading and trailing whitespaces
    name = name.replace(/\s+/g, '-'); // convert (continuous) whitespaces to one -
    name = name.replace(/[^a-z-]/g, ''); // remove everything that is not [a-z] or -
    this.postForm.get("cUrl").setValue(name);
  }

  onFileChanged(event:any) {
    
    this.selectedFile = event.target.files[0];
  }

  upload()
  {
 
  }

}