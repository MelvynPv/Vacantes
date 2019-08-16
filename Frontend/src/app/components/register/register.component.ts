import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import Swal from 'sweetalert2'
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  postForm: FormGroup
  usuarios:{"cNombre":"","id":"","cCorreo"};
  modal : NgbModalRef;
  datosUsuario;
  lInicioSession=false;
  constructor(private actvdRoute: ActivatedRoute,private router: Router,private srvUsuario: UsuariosService,public modalService: NgbModal) {
    this.postForm = new FormGroup({
      cNombre: new FormControl('', [Validators.required]),
      cPassword:new FormControl('', [Validators.required]),
      cCorreo:new FormControl('', [Validators.required]),
      cTipoUsuario:new FormControl('', [Validators.required])
     })
   }

  ngOnInit() {
    this.datosUsuario=localStorage.getItem('dataUsuarios');
    if (this.datosUsuario != null)
    {
      this.lInicioSession=true;
    }
  }


  createUsuario()
  {
    
    this.srvUsuario.createUsuario(this.postForm.value)
    .subscribe( (res:any) => {
      let datosRegistro=res.data;
      localStorage.setItem('dataUsuarios',JSON.stringify(datosRegistro));
      this.modal.close();
      if (datosRegistro.cTipoUsuario=="1")
      {
        this.router.navigate(['./postulantes/completa-perfil']);
      }
      else
      {
        this.router.navigate(['./empresas/completa-perfil']);
      }
      Swal.fire('Good job!','Te has Registrado correctamente, ahora solo falta completar tu perfil','success');

    }, 
    (err) => {
     alert(err);
    })
  }

  Registrarse(content:any) {
    this.modal= this.modalService.open(content);
  
  }

}
