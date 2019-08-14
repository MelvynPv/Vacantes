import { Component, OnInit } from '@angular/core';
import {PostulantesService} from 'src/app/services/postulantes/postulantes.service'
import {Router} from  '@angular/router'

@Component({
  selector: 'app-toppostulantes',
  templateUrl: './toppostulantes.component.html',
  styles: []
})
export class ToppostulantesComponent implements OnInit {
  Postulantes=[];
  constructor(private svcPostulante: PostulantesService,private router: Router) { }

  ngOnInit() {
    this.ObtenListaPostulantes(12);
  }
  ObtenListaPostulantes(maximo){
    this.Postulantes=this.svcPostulante.ObtenerPostulaciones(maximo);
  }
}
