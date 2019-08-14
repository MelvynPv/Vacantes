import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from  '@angular/router'
import {PostulantesService} from 'src/app/services/postulantes/postulantes.service'

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styles: []
})
export class PostulanteComponent implements OnInit {
  cUrl='';
  Postulante;
  constructor(private svcPostulante: PostulantesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.cUrl = this.route.snapshot.paramMap.get('cUrl');
    console.log(this.cUrl)
    this.ObtenerPostulanteByUrl(this.cUrl)
  }

  
  ObtenerPostulanteByUrl(cUrl){
    this.Postulante=this.svcPostulante.ObtenerPostulanteByUrl(cUrl);
    console.log(this.Postulante);
  } 
  

}
