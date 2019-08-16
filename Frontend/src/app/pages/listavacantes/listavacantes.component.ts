import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from  '@angular/router'
import {VacantesService} from 'src/app/services/vacantes/vacantes.service'

@Component({
  selector: 'app-listavacantes',
  templateUrl: './listavacantes.component.html',
  styles: []
})
export class ListavacantesComponent implements OnInit {
  cUrl='';
  Vacantes;
  constructor(private svcVacante: VacantesService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
     this.ObtenerListaVacantes(0)
  }

  ObtenerListaVacantes(maximo){
    this.Vacantes=this.svcVacante.ObtenerVacantes(maximo);
  }

  AgregarVante()
  {
    this.router.navigate(['./vacantes/add'])
  }
}
