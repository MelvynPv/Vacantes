import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from  '@angular/forms'
import {Router} from  '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  datosUsuario;
  lInicioSession=false;
  LoginForm: FormGroup;
  modal : NgbModalRef;
  constructor(private router: Router,private srvUsuario: UsuariosService,public modalService: NgbModal) {
this.LoginForm=new FormGroup({
    cCorreo: new FormControl('',[Validators.email, Validators.required]),
    cPassword: new FormControl('',[Validators.required]),
})

   }

  ngOnInit() {
    this.datosUsuario=localStorage.getItem('dataUsuarios');
    if (this.datosUsuario != null)
    {
      this.lInicioSession=true;
    }

  }

  ValidarUsuario()
  {
    console.log(this.LoginForm.value);
    this.srvUsuario.validarUsuario(this.LoginForm.value).subscribe((data:any) =>{
        
         localStorage.setItem('dataUsuarios',JSON.stringify(data.data));
         this.modal.close();
        if (data.status != null)
        {
          if (data.data.cTipoUsuario=="1")
          {
            this.router.navigate(['./postulantes/completa-perfil']);
          }
          else
          {
            this.router.navigate(['./empresas/completa-perfil']);
          }
        }
        else
        {
         alert(data.cMensaje);
        }
    }) 
  }

  openLogin(content:any) {
    this.modal=this.modalService.open(content);
  
  }

}
