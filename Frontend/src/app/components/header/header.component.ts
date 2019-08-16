import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  datosUsuario;
  lInicioSession=false;
 
  constructor(private actvdRoute: ActivatedRoute,private router: Router) { 

  }

  ngOnInit() {
    this.datosUsuario=localStorage.getItem('dataUsuarios');


    if (this.datosUsuario != null)
    {
      this.lInicioSession=true;
    }
  }

  cerrarSesion()
  {
    localStorage.clear();
    this.router.navigate(['./home'])
  }


}
