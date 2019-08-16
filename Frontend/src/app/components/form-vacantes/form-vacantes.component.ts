import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VacantesService } from 'src/app/services/vacantes/vacantes.service';

@Component({
  selector: 'app-form-vacantes',
  templateUrl: './form-vacantes.component.html',
  styles: []
})
export class FormVacantesComponent implements OnInit {
  postForm: FormGroup
  data;
  cTituloform="Agregar Vacante";
  cUrl='';
  Vacante;
  constructor( private actvdRoute: ActivatedRoute,private router: Router,private srvVacante: VacantesService) { 
    this.postForm = new FormGroup({
     cTitulo: new FormControl('', [Validators.required]),
     cUrl:new FormControl('', [Validators.required]),
     ConocimientosRequeridos:new FormControl('', [Validators.required]),
     iCantidadDisponibles:new FormControl('', [Validators.required]),
     iCantidadOcupadas:new FormControl('', [Validators.required]),
     cPuesto:new FormControl('', [Validators.required]),
     cDescripcion:new FormControl('', [Validators.required]),
     dSueldo:new FormControl('', [Validators.required]),
    })

   }

  ngOnInit() {
    this.cUrl = this.actvdRoute.snapshot.paramMap.get('cUrl');
    console.log('Usuarios',localStorage.getItem('dataSource'));
    if(this.cUrl != null && this.cUrl != ''){
      this.setForm(this.cUrl);
    }

  }

  setForm(cUrl) {
    this.cTituloform = "Actualizar Vacante";
    this.Vacante=this.srvVacante.ObtenerVacantesByUrl(cUrl);
    this.postForm.get("cTitulo").setValue(this.Vacante.cTitulo);
    this.postForm.get("cUrl").setValue(this.Vacante.cUrl);
    this.postForm.get("ConocimientosRequeridos").setValue(this.Vacante.ConocimientosRequeridos);
    this.postForm.get("iCantidadDisponibles").setValue(this.Vacante.iCantidadDisponibles);
    this.postForm.get("iCantidadOcupadas").setValue(this.Vacante.iCantidadOcupadas);
    this.postForm.get("cPuesto").setValue(this.Vacante.cPuesto);
    this.postForm.get("cDescripcion").setValue(this.Vacante.cDescripcion);
    this.postForm.get("dSueldo").setValue(this.Vacante.dSueldo);
  }

  RegresarLista()
  {
    this.router.navigate(['./vacantes'])
  }

  createVacante() {
    
    if(this.cUrl != null && this.cUrl != ''){

      this.srvVacante.actualizarVacante(this.postForm.value,this.cUrl)
        .subscribe( res => {
          console.log(res);
        }, (err) => {
          console.log(err)
        })

    } else {
    this.srvVacante.guardarVacante(this.postForm.value)
      .subscribe( res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }
  }

}
