import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostulantesService } from 'src/app/services/postulantes/postulantes.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form-postulantes',
  templateUrl: './form-postulantes.component.html',
  styles: []
})
export class FormPostulantesComponent implements OnInit {
  postForm: FormGroup
  data;
  cTituloform="Agregar Postulante";
  cUrl='';
  Entidad;
  datosUsuario;
  constructor( private actvdRoute: ActivatedRoute,private router: Router,private srvEntidad: PostulantesService) { 
  
    this.postForm = new FormGroup({
      cNombre: new FormControl('', [Validators.required]),
      iEdad:new FormControl('', [Validators.required]),
      cEscolaridad:new FormControl('', [Validators.required]),
      cEstado: new FormControl('', [Validators.required]),
      dIngresosRequeridos:new FormControl('', [Validators.required]),
      cEstadoCivil:new FormControl('', [Validators.required]),
      cIdiomas: new FormControl('', [Validators.required]),
      cUrl:new FormControl('', [Validators.required]),
      Usuario:new FormControl('')
    })

   }

  ngOnInit() {
    this.datosUsuario=JSON.parse(localStorage.getItem('dataUsuarios'));
    if (this.datosUsuario == null)
    {
      this.router.navigate(['./home'])
    }
    this.postForm.get("cNombre").setValue(this.datosUsuario.cNombre);
    this.postForm.get("cUrl").setValue(this.dameUrlSeo(this.datosUsuario.cNombre));
    this.cUrl = this.actvdRoute.snapshot.paramMap.get('cUrl');
  
    if(this.cUrl != null && this.cUrl != ''){
      this.setForm(this.cUrl);
    }

  }

  setForm(cUrl) {
    this.cTituloform = "Actualizar Postulante";
    //this.Entidad=this.srvEntidad.ObtenerEmpresaByUrl(cUrl);
    this.postForm.get("cNombre").setValue(this.Entidad.cNombre);
    this.postForm.get("iEdad").setValue(this.Entidad.iEdad);
    this.postForm.get("cEscolaridad").setValue(this.Entidad.cEscolaridad);
    this.postForm.get("cEstado").setValue(this.Entidad.cEstado);
    this.postForm.get("dIngresosRequeridos").setValue(this.Entidad.dIngresosRequeridos);
    this.postForm.get("cEstadoCivil").setValue(this.Entidad.cEstadoCivil);
    this.postForm.get("cIdiomas").setValue(this.Entidad.cIdiomas);
    this.postForm.get("cUrl").setValue(this.Entidad.cUrl);
  }

  RegresarLista()
  {
    this.router.navigate(['./vacantes'])
  }

  createEntidad() {
    this.postForm.get("Usuario").setValue({"_id":this.datosUsuario._id});
    this.srvEntidad.guardarEntidad(this.postForm.value)
      .subscribe( (res:any) => {
        if (res.cMensaje != null && res.cMensaje=="")
        {
        Swal.fire(
          'Good job!',
          'El Registro se ha Guardado correctamente',
          'success'
        )}
        else
        {
          Swal.fire('Error!',res.cMensaje,'error')
        }
      }, (err) => {
        console.log(err);
      })
    
  }

  urlSeo(event: any)
  {
    let name=event.target.value;
    let NombreSeo= this.dameUrlSeo(name);
    this.postForm.get("cUrl").setValue(NombreSeo);
  }

  dameUrlSeo(name)
  {
    
    name = name.toLowerCase(); // lowercase
    name = name.replace(/^\s+|\s+$/g, ''); // remove leading and trailing whitespaces
    name = name.replace(/\s+/g, '-'); // convert (continuous) whitespaces to one -
    name = name.replace(/[^a-z-]/g, ''); // remove everything that is not [a-z] or -
    return  name;
  }


}