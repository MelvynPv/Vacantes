import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';
import Swal from 'sweetalert2'
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
  constructor( private actvdRoute: ActivatedRoute,private router: Router,private srvEntidad: EmpresasService) { 
    this.postForm = new FormGroup({
      cNombreEmpresa: new FormControl('', [Validators.required]),
      cRFC:new FormControl('', [Validators.required]),
      cUrl:new FormControl('', [Validators.required]),
      cDescripcion:new FormControl('', [Validators.required]),
      Usuario:new FormControl('')
    })

   }

  ngOnInit() {
    this.datosUsuario=JSON.parse(localStorage.getItem('dataUsuarios'));
    if (this.datosUsuario == null)
    {
      this.router.navigate(['./home'])
    }

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

    this.postForm.get("Usuario").setValue({"_id":this.datosUsuario._id});
    console.log(this.postForm.value);
    this.srvEntidad.guardarEntidad(this.postForm.value)
      .subscribe( res => {
        Swal.fire(
          'Good job!',
          'El Registro se ha Guardado correctamente',
          'success'
        )
      }, (err) => {
        console.log(err);
      })
    
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

}